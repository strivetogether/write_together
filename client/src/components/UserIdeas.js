import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Markup } from 'interweave';
import Interweave from 'interweave';

export default class UserBlocks extends Component {

    state = {
        block: null,
        error: null,
        ideas:[],
        username: ''
    }

    getAllUserIdeas = () => {
        let id = this.props.user._id;
        const owner = this.props.match.params.id

        // console.log('DASHBOARD ID LOG', this.props.user._id);

        if (!owner) {        
          axios.get(`/api/ideas/userideas/${id}`)
          .then(response => {
            // console.log('IDEAS RESPONSE', response);
            this.setState({
              block: response.data,
              ideas: response.data,
            })
          })
          .catch(err => {
            // console.log(err.response)
            if (err.response.status === 404) {
              this.setState({
                error: 'Something went wrong'
              })
            }
          })

        } else if (owner && id !== owner) {
        id = this.props.match.params.id
        axios.get(`/api/ideas/userideas/${id}`)
          .then(response => {
            // console.log('IDEAS RESPONSE', response);
            this.setState({
              block: response.data,
              ideas: response.data,
            })
          })
          .catch(err => {
            // console.log(err.response)
            if (err.response.status === 404) {
              this.setState({
                error: 'Something went wrong'
              })
            }
          })
      }
      }

      getUsername = () => {
        const userid = this.props.match.params.id
        axios.get(`/api/blocks/dashboard/${userid}`)
          .then(response => {
            console.log('THIS RESPONSE IS THE GOOOD ONE', response)
            this.setState({
              username: response.data.username,
            })
          })
          .catch(err => {
            // console.log(err.response)
            if (err.response.status === 404) {
              this.setState({
                error: 'Something went wrong'
              })
            }
          })

      }

      componentDidMount = () => {
        this.getAllUserIdeas();
        this.getUsername();  
      }

      render() {
        if (this.state.error) return <h1>{this.state.error}</h1>
        if (!this.state.ideas) return <h1>Loading...</h1>

        // return (
        //     <div>
        //     <h1>My ideas</h1>
            
        //       {this.state.ideas.map(idea => {
        //       return (
        //         <div key={idea._id}>
        //           <h2>
        //             <Link to={`/blocks/${idea._id}`}><Interweave content={idea.text}></Interweave></Link>
        //           </h2>
        //         </div>
        //       )
        //     })}
        //     </div>
        //   )

          const owner = this.props.match.params.id
          if (!owner){ 
            return (
              <div>
              <h1>My ideas</h1>
              <div className="postitrow">
              <section className="postit">
              <ul className="d-flex flex-wrap">
    
              {this.state.ideas.map(idea => {
            return (
              <li key={idea._id}>
              <section>
                <div>
                <Link to={`/ideas/${idea._id}`}>
                <Interweave content={idea.text} ></Interweave>
                </Link>
                </div>
                </section>
              </li>
                )
          }
          )        
          }
          </ul>
          </section>
          </div>
          </div>
          )
          } else {
            return (
              <div>
              <h1>{this.state.username}'s ideas</h1>
              <div className="postitrow">
              <section className="postit">
              <ul className="d-flex flex-wrap">
    
              {this.state.ideas.map(idea => {
            return (
              <li key={idea._id}>
              <section>
                <div>
                <Link to={`/ideas/${idea._id}`}>
                <Interweave content={idea.text} ></Interweave>
                </Link>
                </div>
                </section>
              </li>
                )
          }
          )        
          }
          </ul>
          </section>
          </div>
          </div>
          )
          }
      }
}