import React, {Component} from 'react';

import Header from './Header'
import Content from './Content'
import Footer from './Footer'
//Creat Component with JSX and React with Bootstrap
class App extends Component {
  render(){
    return(
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
