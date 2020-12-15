import React, { Component } from 'react';
import axios from 'axios';
import { Markup } from 'interweave';


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


  render() {

    if (this.state.error) return <h1>{this.state.error}</h1>
    if (!this.state.idea) return <h1>Loading...</h1>

    return (
      <div>
            <h3>
              <Markup content={this.state.owner} />
              <Markup content={this.state.text} />
            </h3>
      </div>
    )
  }
}
