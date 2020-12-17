import React, { Component } from 'react'
import Explore from './Explore'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import demo from './demo.png';

export default class Home extends Component {
    render() {
        return (
            <div className='d-flex justify-content-between align-items-center m-5'>
            <div className='text-left'>
                <h1>Overcome your writer's block &mdash; together!</h1>
                <p>
                We all get stuck behind our computer way to often, staring at the blank screen for hours... if only there
                was a way to ask for some help, right? We got you covered! Welcome to our community of writers, where each
                one of us can share their own writer's block and receive support and ideas on how to unstuck ourselves. 
                </p>

                <p>
                Receiving help is great, but offering it is even better: on this site you will find the chance to put your
                skills to use and help other fellow writers with their own struggles. 
                </p>
                
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna. 
                Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Ac turpis egestas 
                maecenas pharetra convallis. Rutrum tellus pellentesque eu tincidunt. Duis tristique 
                sollicitudin nibh sit. Urna nunc id cursus metus aliquam eleifend mi in nulla. 
                Interdum posuere lorem ipsum dolor sit. Etiam non quam lacus suspendisse faucibus 
                interdum posuere. Integer malesuada nunc vel risus commodo viverra maecenas. Massa 
                tempor nec feugiat nisl. Ut faucibus pulvinar elementum integer enim neque volutpat 
                ac tincidunt.</p>
                <div>
                
                    {/* <Explore blocks={this.props.blocks}/> */}
                    <Button type='submit'><Link to='/explore'>Help someone!</Link></Button>
                </div>
            </div>
            <div>

                <img className='typewriter' src={demo} alt='happy people around typewriter'/>
            </div>
                
            </div>
        )
    }
}
