import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  render(){
    return (
        <div>
        <nav id="navbar" class="">
        <div class="nav-wrapper">
        
            <div class="logo">

            <a href="#home"><i class="fa fa-angellist"></i></a>
            </div>

        
            <ul id="menu">
            <li><NavLink to="/welcome" exact>Home</NavLink></li>
  
            {this.props.user ? 
              <li><NavLink to="/welcome">
                <li onClick={this.props.clickHandler}>Log Out</li>
              </NavLink></li>
              :
              <li><NavLink to="/login">
                <li>Login</li>
              </NavLink></li>
            }
            </ul>
        </div>
        </nav>
    </div>
    )
  }
}

export default Navbar;