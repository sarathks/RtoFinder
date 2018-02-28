import React, { PureComponent } from 'react';

import classes from './Header.css';

class Header extends PureComponent {
  handleChange = (event) => {
    this.props.textChange(event);
  }

  render() {
    return (
        <div className = {classes.header}>
          <h1> Find Rto </h1>
        </div>
    );
  }
}

export default Header;
