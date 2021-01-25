import React, { Component } from 'react';
import axios from 'axios';
import { Markup } from 'interweave';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class IdeaDetails extends Component {
  
  state = {
    idea: null,
    error: null,
    text: '',
    comments: '',
    owner: '',
    parentBlock: '',
    creationDate: ''
  }

  getIdea = () => {
    const id = this.props.match.params.id;
    axios.get(`/api/ideas/details/${id}`)
    .then(response => {
      this.setState({
        idea: response.data,
        text: response.data.text,
        comments: response.data.comments,
        owner: response.data.owner,
        parentBlock: response.data.parentBlock
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
      this.props.getData();
    })
    .then(() => {
      this.props.history.push(`/blocks/${this.state.parentBlock}`);
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
    const date = this.state.creationDate.split("T")[0].split("-").reduce((t, v) => t = v + "/" + t);
    if (user === owner) allowedToDelete = true;

    if (allowedToDelete) {
      return (
        <div>
    
              <h3>
                <Link to={`/dashboard`}><Markup content={this.state.owner.username} /></Link>
                <Markup content={this.state.text} />
              </h3>
                <Button variant='danger' onClick={this.deleteIdea}>Delete</Button>                
        </div>
      )
    } else {
      return (
        <div>
              <h3>
                <Link to={`/dashboard/${owner}`}><Markup content={this.state.owner.username} /></Link>
                <Markup content={this.state.text} />
              </h3>             
        </div>
      )
    }
  }
}
