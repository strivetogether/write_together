import React, { Component } from 'react';
import UserBlocks from './UserBlocks';
import UserIdeas from './UserIdeas';
import axios from 'axios';

export default class Dashboard extends Component {

      render() {
        console.log('CHECKING THE OWNER', this.props.user)
        return (
            <div>
                <h2>`This is the other user's dashboard`</h2>
              <UserBlocks  {...this.props} />
              <UserIdeas   {...this.props} />
            </div>
          )

    }
}