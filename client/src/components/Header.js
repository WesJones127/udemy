import React, { Component, component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="left brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" class="right">
            <li>
              <a href="">Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
