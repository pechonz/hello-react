import React, {Component} from 'react';

import Header from './Header'
import Content from './Content'
import Footer from './Footer'
//Event
class App extends Component {
  constructor(){
    super();
    this.state={
      data:[],
      message:"Unlike",
      type:""
    };
    this.changeMessage=this.changeMessage.bind(this);
    this.insertData=this.insertData.bind(this);
  }

  changeMessage(){
    this.setState({message:"Like"})
  }

  insertData(){
    var item="React"
    var myArray=this.state.data;
    myArray.push(item)
    this.setState({data:myArray})
  }

  render(){

    return(
      <div>
        <Header/>
        <Content title="Hello React" name="Naruephon Sooksinchai" position="System Engineer" workplace="Hoya Optics (Thailand) Ltd."/>
        <button onClick={this.changeMessage}>{this.state.message}</button>
        <button onClick={this.insertData}>Insert</button>
        <h1>{this.state.data}</h1>
        <Footer/>
      </div>
    );
  }
}

export default App;
