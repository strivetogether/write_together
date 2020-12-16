import React, { Component } from 'react';
import axios from 'axios';
import { Markup } from 'interweave';
import { Button } from 'react-bootstrap';


export default class IdeaDetails extends Component {
  
  state = {
    idea: null,
    error: null,
    text: '',
    comments: '',
    owner: '',
  }

  getIdea = () => {
    const id = this.props.match.params.id;
    axios.get(`/api/ideas/details/${id}`)
      .then(response => {
        console.log('This is the response', response);
        this.setState({
          idea: response.data,
          text: response.data.text,
          comments: response.data.comments,
          owner: response.data.owner,
        })
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({
            error: 'Sorry - Idea Not found 🤷‍♀️ 🤷‍♂️'
          })
        }
      })
  }

  componentDidMount = () => {
    this.getIdea();
  }

  deleteIdea = () => {
    const id = this.props.match.params.id;
    axios.delete(`/api/ideas/delete/${id}`)
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

    if (this.state.error) return <h1>{this.state.error}</h1>
    if (!this.state.idea) return <h1>Loading...</h1>

    //Hide or show delete button according to logged in user
    let allowedToDelete = false;
    const user = this.props.user._id;
    const owner = this.state.owner._id;
    if (user === owner) allowedToDelete = true;

    console.log('user is', this.props.user._id)
    console.log('owner is', this.state.owner._id)
    // console.log('IdeaDetails state', this.state)
    return (
      <div>
            <h3>
              <Markup content={this.state.owner.username} />
              <Markup content={this.state.text} />
            </h3>
            {allowedToDelete && (
              <Button variant='danger' onClick={this.deleteIdea}>Delete</Button>
            )}
              
      </div>
    )
  }
}
