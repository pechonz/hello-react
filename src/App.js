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

  onChange(event){
    this.setState({type:event.target.value})
  }
  render(){

    return(
      <div>
        <Header/>
        <Content title="Hello React" name="Naruephon Sooksinchai" position="System Engineer" workplace="Hoya Optics (Thailand) Ltd."/>
        <button class="btn btn-primary" onClick={this.changeMessage}>{this.state.message}</button>
        <br/>
        <br/>
        <button class="btn btn-success" onClick={this.insertData}>Insert</button>
        <br/>
        <br/>
        <h1>{this.state.data}</h1>
        <br/>
        <br/>
        <input class="form-control" type="text" onChange={this.onChange.bind(this)}/>
        <br/>
        <br/>
        <h1>Welcome : {this.state.type}</h1>
        <Footer/>
      </div>
    );
  }
}

export default App;
