import React, { Component } from 'react';
import UserBlocks from './UserBlocks';

export default class Dashboard extends Component {

      render() {
        return (
            <div>
              <UserBlocks user={this.props.user} setUser={this.props.setUser} {...this.props} />
            </div>
          )

    }
}