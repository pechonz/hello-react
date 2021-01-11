import React, {Component} from 'react';

import Header from './Header'
import Content from './Content'
import Footer from './Footer'
//Props
class App extends Component {
  render(){
    return(
      <div>
        <Header/>
        <Content title="Hello React" name="Naruephon Sooksinchai" position="System Engineer" workplace="Hoya Optics (Thailand) Ltd."/>
        <Footer/>
      </div>
    );
  }
}

export default App;
