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
                <br />
                
                <p>
                We all get stuck behind our computer way to often, staring at the blank screen for hours... if only there
                was a way to ask for some help, right? We got you covered! Welcome to our community of writers, where each
                one of us can share their own writer's block and receive support and ideas on how to unstuck ourselves. 
                </p>

                <p>
                Receiving help is great, but offering it is even better: on this site you will find the chance to put your
                skills to use and help other fellow writers with their own struggles. 
                </p>
                <br />
                <div>
                
                    {/* <Explore blocks={this.props.blocks}/> */}
                    <Button className='btn-lg bg' type='submit'><Link to='/explore'>Help someone!</Link></Button>
                </div>
            </div>
            <div>

                <img className='typewriter' src={demo} alt='happy people around typewriter'/>
            </div>
                
            </div>
        )
    }
}
