import React, { Component } from 'react'
import Explore from './Explore'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna. 
                Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Ac turpis egestas 
                maecenas pharetra convallis. Rutrum tellus pellentesque eu tincidunt. Duis tristique 
                sollicitudin nibh sit. Urna nunc id cursus metus aliquam eleifend mi in nulla. 
                Interdum posuere lorem ipsum dolor sit. Etiam non quam lacus suspendisse faucibus 
                interdum posuere. Integer malesuada nunc vel risus commodo viverra maecenas. Massa 
                tempor nec feugiat nisl. Ut faucibus pulvinar elementum integer enim neque volutpat 
                ac tincidunt.</p>
                <div>
                    <Explore blocks={this.props.blocks}/>
                </div>
            </div>
        )
    }
}
