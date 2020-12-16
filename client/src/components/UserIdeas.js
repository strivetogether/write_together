import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Markup } from 'interweave';
import Interweave from 'interweave';

export default class UserBlocks extends Component {

    state = {
        block: null,
        error: null,
        ideas:[]
    }

    getAllUserIdeas = () => {
        const id = this.props.user._id;
        console.log('DASHBOARD ID LOG', this.props.user._id);
        axios.get(`/api/ideas/userideas/${id}`)
          .then(response => {
            console.log('IDEAS RESPONSE', response);
            this.setState({
              block: response.data,
              ideas: response.data,
            })
          })
          .catch(err => {
            console.log(err.response)
            if (err.response.status === 404) {
              this.setState({
                error: 'Something went wrong'
              })
            }
          })
      }

      componentDidMount = () => {
        this.getAllUserIdeas();
      }

      render() {
        if (this.state.error) return <h1>{this.state.error}</h1>
        if (!this.state.ideas) return <h1>Loading...</h1>

        return (
            <div>
            <h1>My ideas</h1>
            
              {this.state.ideas.map(idea => {
              return (
                <div key={idea._id}>
                  <h2>
                    <Link to={`/blocks/${idea._id}`}><Interweave content={idea.text}></Interweave></Link>
                  </h2>
                </div>
              )
            })}
            </div>
          )

    }
}