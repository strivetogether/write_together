import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default class BlockDetails extends Component {
  render() {
    if (this.state.error) return <div>{this.state.error}</div>
    if (!this.state.project) return (<></>)

    // we set a boolean if there is a loggedInUser and the user is also the owner of the project
    let allowedToDelete = false;
    const user = this.props.user;
    const owner = this.state.project.owner;
    if (user && user._id === owner) allowedToDelete = true;

    return (
      <div>
        <h1>{this.state.project.title}</h1>
        <p>{this.state.project.description}</p>
        {/* // then we only show the button if the the deletion is allowed  */}
        {allowedToDelete && (
          <Button variant="danger" onClick={this.deleteProject}>
            Delete project
          </Button>
        )}
      </div>
    )
  }
}
