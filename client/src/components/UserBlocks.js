import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';


export default class UserBlocks extends Component {

    state = {
        block: null,
        error: null,
        blocks:[],
        ideas:[],
        username: ''
    }
    
    getAllUserBlocks = () => {
        const owner = this.props.match.params.id
        let id = this.props.user._id;

        if(!owner) {
          axios.get(`/api/blocks/userblocks/${id}`)
          .then(response => {
            this.setState({
              block: response.data,
              blocks: response.data,
              ideas: response.data.ideas,
            })
          })
          .catch(err => {
            if (err.response.status === 404) {
              this.setState({
                error: 'Something went wrong'
              })
            }
          })

        } else if (owner && id !== owner) {
          id = this.props.match.params.id
          axios.get(`/api/blocks/userblocks/${id}`)
          .then(response => {
            this.setState({
              block: response.data,
              blocks: response.data,
              ideas: response.data.ideas,
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
            if (err.response.status === 404) {
              this.setState({
                error: 'Something went wrong'
              })
            }
          })

      }

      componentDidMount = () => {
      this.getAllUserBlocks();
      this.getUsername();        
      }

      render() {
        if (this.state.error) return <h1>{this.state.error}</h1>
        if (!this.state.blocks) return <h1>Loading...</h1>

        const owner = this.props.match.params.id

        if (!owner) {
        return(

        <div>
        <h1 className='m-5'>My blocks</h1>
        <div className='d-flex justify-content-center flex-wrap'>

        {this.state.blocks.map(block => {


        return (
        <Card style={{ width: '18rem' }} className='m-3'>
          <Card.Body>
            <Card.Title className='cormorant' style={{fontSize: 30}}>
              <Link to={`/blocks/${block._id}`}>{block.title}</Link>
            </Card.Title>
          </Card.Body>
        </Card>
        )
      })}
        </div>
        </div>
        )

      } else {

        return (       
          <div>
          <h1 className='m-5'>{this.state.username}'s blocks</h1>
          <div className='d-flex justify-content-center flex-wrap'>
          {this.state.blocks.map(block => {

          return (
          <Card style={{ width: '18rem' }} className='m-3'>
            <Card.Body>
              <Card.Title className='cormorant' style={{fontSize: 30}}>
                <Link to={`/blocks/${block._id}`}>{block.title}</Link>
              </Card.Title>
            </Card.Body>
          </Card>
          )
        })}
          </div>
          </div>
          )
      }
    }
  }