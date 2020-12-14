import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';


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

  render() {
    console.log('HERE WE ARE 2')
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
          <Form.Control
            type='text'
            id='text'
            name='text'
            value={this.state.text}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='question'>What's your block?: </Form.Label>
          <Form.Control
            type='question'
            id='question'
            name='question'
            value={this.state.question}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Button type='submit'>Add a Project</Button>
      </Form>
      
    )
  }
}
