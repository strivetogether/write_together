import React, { Component } from 'react';
import axios from 'axios';
import Interweave from 'interweave';


export default class BlockDetails extends Component {

  state = {
    block: null,
    error: null,
    title: '',
    text: '',
    question: '',
  }

  getData = () => {
    const id = this.props.match.params.id;
    console.log('ID LOG', id);
    axios.get(`/api/blocks/details/${id}`)
      .then(response => {
        console.log('This is the response', response);
        this.setState({
          title: response.data.title,
          text: response.data.text,
          question: response.data.question,
          block: response.data,
        })
      })
      .catch(err => {
        console.log(err.response)
        if (err.response.status === 404) {
          this.setState({
            error: 'Sorry - Block Not found 🤷‍♀️ 🤷‍♂️'
          })
        }
      })
  }

  componentDidMount = () => {
    this.getData();
  }


    render() {
      console.log('STATE LOG', this.state)
      if (this.state.error) return <h1>{this.state.error}</h1>
      if (!this.state.block) return <h1>Loading...</h1>

      

      return (
        <div>
          <Interweave content={this.state.title} />
          <Interweave content={this.state.text} />
          <Interweave content={this.state.question} />
          
          {/* 
          Another way to do it is adding block and accesing it directly.
          This way we don't have to set up the objeckt keys on the state.
          <h1>{this.state.block.title}</h1>
          <p>{this.state.block.text}</p> */}
        </div>
      )

    }


}

