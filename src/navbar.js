import React, { Component } from 'react';

/*class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
        <div id='navbar'>Hello World</div>
        );
    }
}*/

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
        <nav className="navbar bg-danger">
            <a href="#" className="navbar-brand text-white"><h2>InnoApps</h2></a>
        </nav>
        );
    }
}
 
export default Navbar;