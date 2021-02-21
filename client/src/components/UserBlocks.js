import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Markup } from 'interweave';
import { Card, Button } from 'react-bootstrap';


export default class UserBlocks extends Component {

    state = {
        block: null,
        error: null,
        blocks:[],
        ideas:[]
    }

    getAllUserBlocks = () => {
        const id = this.props.user._id;
        console.log('DASHBOARD ID LOG', this.props.user._id);
        axios.get(`/api/blocks/userblocks/${id}`)
          .then(response => {
            console.log('Show me the response', response);
            this.setState({
              block: response.data,
              blocks: response.data,
              ideas: response.data.ideas,
            })
          })
          .catch(err => {
            console.log(err.response)
            if (err.response.status === 404) {
              this.setState({
                error: 'Something went wrong when accessing all user blocks'
              })
            }
          })
      }

      componentDidMount = () => {
        this.getAllUserBlocks();
      }

      render() {
        if (this.state.error) return <h1>{this.state.error}</h1>
        if (!this.state.blocks) return <h1>Loading...</h1>

        return(
        
        <div className="userblocks">
        <h2 className='m-5'>My blocks</h2>
        <div className='d-flex justify-content-center flex-wrap'>
        {this.state.blocks.map(block => {
        return (


        <Card style={{ width: '18rem' }} className='m-3 shadow' key={block._id}>
          <Card.Body>
            <Card.Title className='fancy' style={{fontSize: 30}}><Link to={`/blocks/${block._id}`}>{block.title}</Link></Card.Title>
          </Card.Body>
        </Card>
        


        )
      })}
      </div>
      </div>








        )





    }
}