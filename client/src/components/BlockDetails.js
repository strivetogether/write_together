import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Markup } from 'interweave';
import Interweave from 'interweave';
import { Form, Button } from 'react-bootstrap';
import { Editor } from '@tinymce/tinymce-react';



export default class BlockDetails extends Component {

  state = {
    block: null,
    error: null,
    title: '',
    text: '',
    question: '',
    ideas: '',
    ideaText: '',
  }

  getBlock = () => {
    const id = this.props.match.params.id;
    console.log('ID LOG', id);
    axios.get(`/api/blocks/details/${id}`)
      .then(response => {
        console.log('This is the response', response);
        console.log("this is props", this.props);
        this.setState({
          title: response.data.title,
          text: response.data.text,
          question: response.data.question,
          block: response.data,
          ideas: response.data.ideas,
        })
      })
      .catch(err => {
        console.log(err.response)
        if (err.response.status === 404) {
          this.setState({
            error: 'Sorry - Block Not found 🤷‍♀️ 🤷‍♂️'
          })
        }
      })
  }

  componentDidMount = () => {
    this.getBlock();
  }

  handleSubmit = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios.post(`/api/blocks/details/${id}/addidea`, {
      text: this.state.ideaText,
    })
      .then(() => {
        // set the form to it's initial state (empty input fields)
        this.setState({
          ideaText: '',
        })
        this.getBlock();
        // update the parent components state (in Projects) by calling getData()
        // this.props.getData();
      })
      .catch(err => console.log(err))

  }

  //tinymce's own method
  handleIdeaTextChange = (ideaText, editor) => {
    this.setState({ ideaText: ideaText });
    // console.log('Content was updated:', text);
  }


  handleGoToEdit = () => {
    // console.log("this is the handleGoToEdit", this.props.match.params)
    this.props.history.push(
      `/blocks/${this.props.match.params.id}/editblock`);
  }

  handleDeleteBlock = () => {
    const id = this.props.match.params.id;
    axios.delete(`/api/blocks/delete/${id}`)
      .then(() => {
        this.props.getData();
      })
      .then(() => {
        this.props.history.push('/explore');
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({
            error: 'Something went wrong'
          })
        }
      })

  }

  render() {
    // console.log('BLOCKSLOG', this.props)
    if (this.state.error) return <h1>{this.state.error}</h1>
    if (!this.state.block) return <h1>Loading...</h1>
    let isOwner = false;
    const user = this.props.user;
    const owner = this.state.block.owner;
    if (user && user._id === owner) isOwner = true;

    // console.log('LATEST LOG OF IDEAS', this.state)
    return (
      <div>
        <section className="blockdetails">
          <Interweave content={this.state.title} />
          <Interweave content={this.state.text} />
          <Interweave content={this.state.question} />
          {isOwner && (
            <div>
              <Button onClick={this.handleGoToEdit}>Edit</Button>
              <span>&nbsp;</span>
              <Button onClick={this.handleDeleteBlock}>Delete</Button>
            </div>
          )}
        </section>


        {this.state.block.ideas.map(idea => {
          return (
            <div key={idea._id}>
              <h3>
                <Markup content={idea.owner.username} />
                <Markup content={idea.text} />
                <Link to={`/ideas/${idea._id}`}>Read more...</Link>
                {idea.creationDate.split("T")[0].split("-").reduce((t, v) => t = v + "/" + t)}
              </h3>
            </div>
          )

        })}

        <Form onSubmit={this.handleSubmit}>

          <Form.Group>
            <Form.Label htmlFor='text'>Write an idea: </Form.Label>
            <Editor
              apiKey={process.env.REACT_APP_TINY_ID}
              type="text"
              name="ideaText"
              value={this.state.ideaText}
              id="ideaText"
              initialValue="<p>This is the initial content of the editor</p>"
              init={{
                min_height: 300,
                // height: '50vh',
                fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt",
                menubar: false,
                plugins: [
                  'advlist autolink lists link charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'paste code help wordcount'
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat |  fontsizeselect | help'
              }}
              onEditorChange={this.handleIdeaTextChange}
            />
          </Form.Group>
          <Button type='submit'>Add an Idea</Button>
        </Form>


        {/* 
          Another way to do it is adding block and accesing it directly.
          This way we don't have to set up the objeckt keys on the state.
          <h1>{this.state.block.title}</h1>
          <p>{this.state.block.text}</p> */}
      </div>
    )

  }


}

