import React, { Component } from 'react';
import UserBlocks from './UserBlocks';
import UserIdeas from './UserIdeas';

export default class Dashboard extends Component {

      render() {
        return (
            <div>
              <h2>This is MY dashboard</h2>
              <UserBlocks user={this.props.user} setUser={this.props.setUser} {...this.props} />
              <UserIdeas user={this.props.user} setUser={this.props.setUser} {...this.props} />
            </div>
          )

    }
}