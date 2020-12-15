import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';


console.log('HERE WE ARE')

export default class AddBlock extends Component {

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

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    console.log(this.state);
    axios.post('/api/blocks', {
      title: this.state.title,
      text: this.state.text,
      question: this.state.question,
    })
      .then(() => {
        // set the form to it's initial state (empty input fields)
        this.setState({
          title: '',
          text: '',
          question: '',
        })
        this.props.getData();
        // update the parent components state (in Projects) by calling getData()
        // this.props.getData();
      })
      .catch(err => console.log(err))

  }

    //tinymce's own method
    handleTextChange = (text, editor) => {     
      this.setState({ text: text});
      // console.log('Content was updated:', text);
    }

    handleQuestionChange = (question, editor) => {
      this.setState({ question: question});
      // console.log('Content was updated:', text);
    }

  render() {

    return (
      
        <Form onSubmit={this.handleSubmit}>

        <Form.Group>
          <Form.Label htmlFor='title'>Title: </Form.Label>
          <Form.Control
            type='text'
            id='title'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
          />
        </Form.Group>
        
        <Form.Group>
          <Form.Label htmlFor='text'>Your text so far: </Form.Label>
          <Editor
          apiKey={process.env.REACT_APP_TINY_ID}
          type="text"
          name="text"
          value={this.state.text}
          id="text"
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
         onEditorChange={this.handleTextChange}
        />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='text'>Your text so far: </Form.Label>
          <Editor
          apiKey={process.env.REACT_APP_TINY_ID}
          type="text"
          name="question"
          value={this.state.question}
          id="question"
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
         onEditorChange={this.handleQuestionChange}
        />
        </Form.Group>

        <Button type='submit'>Add a Project</Button>
      </Form>
      
    )
  }
}


