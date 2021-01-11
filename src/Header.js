import React, {Component} from 'react';
import { Jumbotron } from 'react-bootstrap';

class Header extends Component {
  constructor(){
    super();
    this.state={
      name:"Naruephon Sooksinchai",
      count:0
    };
  }
  render(){
    setTimeout(()=>{
        this.setState({name:"Petch"});
    },1000);
    setInterval(()=>{
        this.setState({count:this.state.count+1});
    },1000);
    return(
      <div class="jumbotron text-center">
        <h1>My First Bootstrap Page</h1>
        <h2>{this.state.name}</h2>
        <h2>{this.state.count}</h2>
        <p>Resize this responsive page to see the effect!</p>
      </div>
    );
  }
}

export default Header;
