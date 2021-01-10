import React, {Component} from 'react';
//Style and Expression with JSX
class App extends Component {
  render(){
    var mystyle = {
      FontSize:100,
      color:'#FF0000'
    }
    return(
      <div>
        <h1 style={mystyle}>Hello! React</h1>
        <h2>{(50*50)/2}</h2>
      </div>
    );
  }
}

export default App;
