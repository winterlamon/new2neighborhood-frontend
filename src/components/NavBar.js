import React from 'react';
import { Navbar, NavItem } from 'react-materialize'
import { withRouter } from 'react-router-dom'


class NavBar extends React.Component {

  render() {

    const loggedIn = !!this.props.currentUser.id;

    return (
      <div>
        <Navbar className="grey darken-4 logo" brand='New2Neighborhood' right>
            {loggedIn ? (
              <div>
                {console.log(`${this.props.currentUser.username} is logged in.`)}
              </div>
            ) : null}
            {loggedIn ? (
              <div>
                <NavItem href='/'>Home</NavItem>
                <NavItem href='/dashboard'>Dashboard</NavItem>
                <NavItem onClick={() => {
                  this.props.history.push('/login');
                  this.props.handleLogout();
                }}>Log Out</NavItem>
              </div>
            ) : (
              <div>
                <NavItem href='/'>Home</NavItem>
                <NavItem href='/signup'>Sign Up</NavItem>
                <NavItem href='/login'>Log In</NavItem>
              </div>
            )}
        </Navbar>
      </div>
    )
  }
}

export default withRouter(NavBar)
