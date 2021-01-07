import React, { Component } from 'react';
import UserBlocks from './UserBlocks';
import UserIdeas from './UserIdeas';
import axios from 'axios';

export default class Dashboard extends Component {

    state = {
        block: null,
        error: null,
        blocks:[],
        ideas:[],
        owner: '',
    }

      render() {
        return (
            <div>
                <h2>This is the OTHER user dashboard</h2>
              <UserBlocks owner={this.props.owner}  {...this.props} />
              <UserIdeas owner={this.props.owner}  {...this.props} />
            </div>
          )

    }
}