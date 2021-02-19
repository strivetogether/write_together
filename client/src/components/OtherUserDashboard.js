import React, { Component } from 'react';
import UserBlocks from './UserBlocks';
import UserIdeas from './UserIdeas';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <UserBlocks {...this.props} />
                <UserIdeas {...this.props} />
            </div>
        );
    }
}
