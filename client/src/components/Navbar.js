import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as Nav } from 'react-bootstrap';
import { logout } from '../services/auth'; 



export default class Navbar extends Component {

  handleLogout = props => {
    // console.log(props);
    logout().then(() => {
      props.setUser(null);
    })
  }

  render() {
    return (

<Nav className='nav d-flex flex-row justify-content-between bg' bg='#db901b'>

      <div>
      <Nav.Brand className='home-padding'>
        <Link to='/'>Home</Link>
      </Nav.Brand>
      </div>

      
      {this.props.user ? (
        
        <> 
          <div className='nav-padding'>             
          <Nav.Brand>
            <Link to='/explore'>Explore</Link>
          </Nav.Brand>

          <Nav.Brand>
            <Link to='/addblock'>Post your block</Link>
          </Nav.Brand>

          <Nav.Brand>
            <Link to='/dashboard'>Dashboard</Link>
          </Nav.Brand>

          <Nav.Brand>
            <Link to='/' onClick={() => this.handleLogout(this.props)}>Logout</Link>
          </Nav.Brand>
          </div>
        </>
        

      ) : (
        
          <>
          <div className='nav-padding'>   
            <Nav.Brand>
              <Link to='/explore'>Explore</Link>
            </Nav.Brand>


            <Nav.Brand>
              <Link to='/signup'>Signup</Link>
            </Nav.Brand>

            <Nav.Brand>
              <Link to='/login'>Login</Link>
            </Nav.Brand>
            </div>
          </>
        
        )}

        

</Nav>
    )
  }
}
