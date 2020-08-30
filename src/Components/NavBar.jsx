import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';


class NavBar extends Component {
    
    render() { 
        return ( 
          <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
              <h1 className="head-color">Dunder Mifflin Scranton</h1>
          </Navbar.Brand>
        </Navbar>
      
         );
    }
}
 
export default NavBar;