import React, { Component } from 'react';

import classes from './SubmitButton.css';

class SubmitButton extends Component {

  render() {
    return (
        <div 
        	className = {classes.submit}
        	onClick={this.props.clicked}>
        </div>
    );
  }
}



// const SubmitButton = props => {
//   return (
//         <div 
//         	className = {classes.submit}
//         	onClick={props.clicked}>
//         </div>
//     );
// }



export default SubmitButton;
