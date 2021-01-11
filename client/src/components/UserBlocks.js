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
        const owner = this.props.match.params.id
        let id = this.props.user._id;
        // console.log('DASHBOARD USER ID LOG', this.props.user._id);
        // console.log('DASHBOARD OWNER ID LOG', this.props.match.params.id);

        if(!owner) {
          axios.get(`/api/blocks/userblocks/${id}`)
          .then(response => {
            // console.log('Show me the response', response);
            this.setState({
              block: response.data,
              blocks: response.data,
              ideas: response.data.ideas,
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
          axios.get(`/api/blocks/userblocks/${id}`)
          .then(response => {
            // console.log('Show me the NEW response', response);
            this.setState({
              block: response.data,
              blocks: response.data,
              ideas: response.data.ideas,
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

      componentDidMount = () => {
      this.getAllUserBlocks();
        
      }

      // componentDidMount = () => {
      //   const owner = this.props.match.params.id
      //   const id = this.props.user._id;
      //   if (owner !== id) {this.getAllUserBlocks()}
        
      // }

      render() {
        if (this.state.error) return <h1>{this.state.error}</h1>
        if (!this.state.blocks) return <h1>Loading...</h1>

        // return (
        //     <div>
        //     <h1>My blocks</h1>
            
        //       {this.state.blocks.map(block => {
        //       return (
        //         <div key={block._id}>
        //           <h2>
        //             <Link to={`/blocks/${block._id}`}>{block.title}</Link>
        //           </h2>
        //         </div>
        //       )
        //     })}
        //     </div>
        //   )
        
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
            <Card.Title className='cormorant' style={{fontSize: 30}}><Link to={`/blocks/${block._id}`}>{block.title}</Link></Card.Title>
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
          <h1 className='m-5'>`{owner} blocks`</h1>
          <div className='d-flex justify-content-center flex-wrap'>
          {this.state.blocks.map(block => {
          return (
          <Card style={{ width: '18rem' }} className='m-3'>
            <Card.Body>
              <Card.Title className='cormorant' style={{fontSize: 30}}><Link to={`/blocks/${block._id}`}>{block.title}</Link></Card.Title>
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