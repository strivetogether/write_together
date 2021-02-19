import React, { Component } from 'react';
import UserBlocks from './UserBlocks';
import UserIdeas from './UserIdeas';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1 className="p-3">So many beautiful texts and ideas!</h1>
                <UserBlocks
                    user={this.props.user}
                    setUser={this.props.setUser}
                    {...this.props}
                />
                <UserIdeas
                    user={this.props.user}
                    setUser={this.props.setUser}
                    {...this.props}
                />
            </div>
        );
    }
}
