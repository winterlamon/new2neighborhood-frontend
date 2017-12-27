import React from 'react';
import {Navbar, NavItem} from 'react-materialize'


const NavBar = () => {
    return (
      <Navbar className="grey darken-4 logo" brand='New2Neighborhood' right>
        <NavItem href='/'>Home</NavItem>
        <NavItem href='/dashboard'>Dashboard</NavItem>

      {/* We need to add logic for a signed in user... */}
      {/* If no user is signed in... */}
        <NavItem href='/login'>Login</NavItem>
        <NavItem href='/signup'>Sign Up</NavItem>
      {/* If a user is signed in... */}
        <NavItem href='/'>Logout</NavItem>
      </Navbar>
    )
}

export default NavBar
