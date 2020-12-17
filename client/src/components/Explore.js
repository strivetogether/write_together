import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import Interweave from 'interweave';

export default class Explore extends Component {
  
  render() {
    
    return (
      <div>


      <div className='d-flex justify-content-center flex-wrap'>
        {this.props.blocks.map(block => {
        return (


        <Card style={{ width: '18rem' }} className='m-3'>
          <Card.Body>
            <Card.Title>{block.title}</Card.Title>
            <Card.Text>
            <Interweave content={block.question} />
            {block.creationDate.split("T")[0].split("-").reduce((t, v) => t = v + "/" + t)}
            </Card.Text>
            <Button><Link to={`/blocks/${block._id}`}>Go to block.</Link></Button>
          </Card.Body>
        </Card>
        


        )
      })}
      </div>
      </div>
    )
  }
}
