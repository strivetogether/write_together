import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { Editor } from '@tinymce/tinymce-react';


export default class EditBlock extends Component {
  state = {
    title: '',
    text: '',
    question: '',
  }
  

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  
  getBlock = () => {
    const id = this.props.match.params.id;
    console.log('ID LOG', id);
    axios.get(`/api/blocks/details/${id}`)
      .then(response => {
        console.log('This is the response', response);
        this.setState({
          title: response.data.title,
          text: response.data.text,
          question: response.data.question,
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
  
  handleUpdateBlockSubmit = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios.put(`/api/blocks/${id}/editblock`, {
      title: this.state.title,
      text: this.state.text,
      question: this.state.question
    })
      .then(response => {
        this.setState({
          block: response.data,
          title: response.data.title,
          question: response.question,
          description: response.data.question,
        })
      })
      .then(() => {
        this.props.history.push(`/blocks/${id}/`);
      })
      .catch(err => {
        console.log(err);
      })
  }

    //tinymce's own method
    handleTextChange = (text, editor) => {     
      this.setState({ text: text});
    }

    handleQuestionChange = (question, editor) => {
      this.setState({ question: question});
    }
    componentDidMount = () => {
      this.getBlock();
    }
  
  render() {

    return (
      
        <Form onSubmit={this.handleUpdateBlockSubmit}>

        <Form.Group>
          <Form.Label htmlFor='title'>Title </Form.Label>
          <Form.Control
            type='text'
            id='title'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
          />
        </Form.Group>
        
        <Form.Group>
          <Form.Label htmlFor='text'>Your text so far </Form.Label>
          <Editor
          apiKey={process.env.REACT_APP_TINY_ID}
          type="text"
          name="text"
          value={this.state.text}
          id="text"
          initialValue=""
          init={{
           min_height: 300,
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
         onEditorChange={this.handleTextChange}
        />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='text'>Your question(s) and writing block(s) </Form.Label>
          <Editor
          apiKey={process.env.REACT_APP_TINY_ID}
          type="text"
          name="question"
          value={this.state.question}
          id="question"
          initialValue=""
          init={{
           min_height: 300,
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
         onEditorChange={this.handleQuestionChange}
        />
        </Form.Group>

        <Button type='submit'>Update this block</Button>
      </Form>
      
    )
  }
}
