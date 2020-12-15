import { Link } from 'react-router-dom'
import React, { Component } from 'react'

export default class Explore extends Component {
  
  render() {
    console.log('CONSOLE LOG', this.props.blocks)
    return (
      <div>
      <h1>Blockz</h1>
      
        {this.props.blocks.map(block => {
        return (
          <div key={block._id}>
            <h2>
              <Link to={`/blocks/${block._id}`}>{block.title}</Link>
            </h2>
          </div>
        )
      })}
      </div>
    )
  }
}
