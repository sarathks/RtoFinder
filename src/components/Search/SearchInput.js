import React, { PureComponent } from 'react';

import classes from './SearchInput.css';

class SearchInput extends PureComponent {
  handleChange = (event) => {
    this.props.textChange(event);
  }

  render() {
    return (
        <div className = {classes.search}>
          < input placeholder="DL 4C AG 3316"/>
        </div>
    );
  }
}

export default SearchInput;
