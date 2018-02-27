import React, { PureComponent } from 'react';

import classes from './Header.css';

class Header extends PureComponent {
  handleChange = (event) => {
    this.props.textChange(event);
  }

  render() {
    return (
        <div className = {classes.header}>
          <h1> Vehicle RTO Location </h1>
        </div>
    );
  }
}

export default Header;
