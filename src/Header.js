import React, {Component} from 'react';
import { Jumbotron } from 'react-bootstrap';

class Header extends Component {
  render(){
    return(
      <div class="jumbotron text-center">
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>
    );
  }
}

export default Header;
