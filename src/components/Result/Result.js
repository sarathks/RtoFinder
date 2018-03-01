import React, { Component } from 'react';

import classes from './Result.css';

class Result extends Component {

  render() {
    return (
        <div className = {classes.result}>
           < p>{this.props.value} </p>

        </div>
    );
  }
}





export default Result;
