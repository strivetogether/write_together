import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Interweave from 'interweave';

export default class UserBlocks extends Component {

  state = {
    // block: null,
    error: null,
    ideas: null,
  }

  getAllUserIdeas = () => {
    const id = this.props.user._id;
    console.log('DASHBOARD User ID LOG from userideas', this.props.user._id);
    axios.get(`/api/ideas/userideas/${id}`)
      .then(response => {
        return response
      })
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].parentBlock === undefined || response.data[i].parentBlock === null) {
            response.data[i].parentBlock = { _id: "#", title: "Deleted Block" }
          }
        }
        this.setState({
          ideas: response.data,
        })
      })
      .catch(err => {
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
    if (!this.state.ideas) return <h1>Loading ideas...</h1>

    return (
      <div>
        <h2>My ideas</h2>
        <div className="postitrow">
          <section className="postit">
            <ul className="d-flex flex-wrap">
              {this.state.ideas.map(idea => {

                return (
                  <li key={idea._id}>
                    <p>{idea.parentBlock.title}</p>
                    <section>
                      <div>
                        <Link to={`/ideas/${idea._id}`}>
                          <Interweave content={idea.text} ></Interweave>
                        </Link>
                      </div>
                    </section>
                  </li>
                )
              })}
            </ul>
          </section>
        </div>
      </div>
    )
  }
}