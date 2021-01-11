import React, {Component} from 'react';
import { Container } from 'react-bootstrap';

class Content extends Component {
  render(){
    return(
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <h3>{this.props.title}</h3>
          </div>
          <div class="col-sm-3">
            <h3>{this.props.name}</h3>
          </div>
          <div class="col-sm-3">
            <h3>{this.props.position}</h3>
          </div>
          <div class="col-sm-3">
            <h3>{this.props.workplace}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
