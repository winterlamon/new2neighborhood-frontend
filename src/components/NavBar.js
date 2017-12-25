import React from 'react';
// import AppBar from 'material-ui/AppBar';
import {Navbar, NavItem} from 'react-materialize'
// import About from './About';
// import Login from './Login';



const NavBar = () => {
    return (
      <Navbar className="cyan darken-2" brand='New2Neighborhood' right>
        <NavItem href='/about'>About</NavItem>
        <NavItem href='/dashboard'>Dashboard</NavItem>
        <NavItem href='/login'>Login</NavItem>
        <NavItem href='/signup'>Signup</NavItem>
      </Navbar>

    )
}

export default NavBar
