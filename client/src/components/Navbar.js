import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as Nav } from 'react-bootstrap';
// import { logout } from '../services/auth'; 



export default class Navbar extends Component {

  // handleLogout = props => {
  //   console.log(props);
  //   logout().then(() => {
  //     props.setUser(null);
  //   })
  // }

  render() {
    return (
<Nav className='nav justify-content-end' bg='primary'>
      <Nav.Brand>
        <Link to='/'>Home</Link>
      </Nav.Brand>
      {this.props.user ? (
        <>
          <Nav.Brand>
            <Link to='/projects'>Projects</Link>
          </Nav.Brand>
          <Nav.Brand>
            <Link to='/' onClick={() => this.handleLogout(this.props)}>Logout</Link>
          </Nav.Brand>
        </>
      ) : (
          <>
            <Nav.Brand>
              <Link to='/signup'>Signup</Link>
            </Nav.Brand>
            <Nav.Brand>
              <Link to='/login'>Login</Link>
            </Nav.Brand>
          </>
        )}
</Nav>
    )
  }
}
