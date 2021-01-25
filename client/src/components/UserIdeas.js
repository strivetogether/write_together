import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Interweave from 'interweave';
import { deleteModel } from 'mongoose';

export default class UserBlocks extends Component {

  state = {
    // block: null,
    error: null,
    ideas: null,
    parentBlockTitles: null
  }

  getAllUserIdeas = () => {
    const id = this.props.user._id;
    console.log('DASHBOARD User ID LOG from userideas', this.props.user._id);
    axios.get(`/api/ideas/userideas/${id}`)
      .then(response => {
        console.log('IDEAS RESPONSE', response);
        
        // this.setState({
        //   // block: response.data,
        //   ideas: response.data,
        // })
        return response
      })
      .then((response) => {


        for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].parentBlock === undefined || response.data[i].parentBlock === null) {
         response.data[i].parentBlock = {title:"Deleted Block"}
        // parentBlockTitles.push["Deleted block"]
        }           
          
        console.log("nach 2. then", this.state.ideas);
        console.log("nach 2. then nur response data", response.data);
          }
        this.setState({
          // block: response.data,
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
      // .then(() => {
      //   console.log();
      //   // for (const elem of this.state.ideas) {
      //   //     console.log("elem ", elem)
      //   //         }
      // })
  }

  getOneBlockTitle = (blockId) => {
    //const blockId //
    console.log('This it the getOneBlockTitle - or rather the ideas parentblocks-ID right now', blockId)
  }

  componentDidMount = () => {
    this.getAllUserIdeas();
  }

  render() {
    if (this.state.error) return <h1>{this.state.error}</h1>
    if (!this.state.ideas) return <h1>Loading ideas...</h1>

    // console.log("ideas:", this.state.ideas)
    // we still need to access each block that the ideas belong to so that we can use it to display the blocks' titles above the ideas
    // for each idea > get parentblock idea
    // it works now BUT breaks when one parentblock has been deleted >> Ale , any ideas?
    return (
      <div>
        <h2>My ideas</h2>
        <div className="postitrow">
          <section className="postit">
            <ul className="d-flex flex-wrap">
              {this.state.ideas.map(idea => {
              {/* let parentBlockTitle; 
              parentBlockTitle = idea.parentBlock.title === 0 ? idea.parentBlock.title : 'test' */}

                return (
                  <li key={idea._id}>
                    <section>
                      <div>
                        <Link to={`/ideas/${idea._id}`}>
                        {/* {parentBlockTitle}  */}
                        <p>{idea.parentBlock.title}</p>
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