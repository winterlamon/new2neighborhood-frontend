import React from 'react';
// import AppBar from 'material-ui/AppBar';
import {Navbar} from 'react-materialize'
import About from './About';
import Login from './Login';



const NavBar = () => {
    return (
      <Navbar brand='New2Neighborhood' right>
        <About href='/about'>About</About>
      	<Login href='/login'>Login</Login>
      </Navbar>

    )
}

export default NavBar
