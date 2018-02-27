import React, { PureComponent } from 'react';

import classes from './SubmitButton.css';

class SubmitButton extends PureComponent {
  handleChange = (event) => {
    this.props.textChange(event);
  }

  render() {
    return (
        <div className = {classes.submit}>
          < div />
        </div>
    );
  }
}

export default SubmitButton;
