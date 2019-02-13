import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <nav className="navbar fixed-top navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Post Board</a>
                </nav>
            </React.Fragment>
         );
    }
}
 
export default NavBar;