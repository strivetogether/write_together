import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';




export default class Block extends Component {

  state = {
    title: '',
    text: ''
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
      text: this.state.text
    })
      .then(() => {
        // set the form to it's initial state (empty input fields)
        this.setState({
          title: '',
          text: ''
        })
        // update the parent components state (in Projects) by calling getData()
        // this.props.getData();
      })
      .catch(err => console.log(err))

  }

  render() {
    return (      
        <Form onSubmit={this.handleSubmit}>
        <h1>This is a block</h1>
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
        <Button type='submit'>Add a Project</Button>
      </Form>
      
    )
  }
}
