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


        <Card key={block._id} style={{ width: '18rem' }} className='m-3 shadow'>
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title className='cormorant' style={{fontSize: 30}} >{block.title}</Card.Title>
            <Card.Text>
            <Interweave content={block.question} />
            {block.creationDate.split("T")[0].split("-").reduce((t, v) => t = v + "/" + t)}
            </Card.Text>
            <Button><Link to={`/blocks/${block._id}`}>Read more.</Link></Button>
          </Card.Body>
        </Card>
        


        )
      })}
      </div>
      </div>
    )
  }
}
