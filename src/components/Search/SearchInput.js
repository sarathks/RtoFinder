import React from 'react';

import classes from './SearchInput.css';


const SearchInput = props => {
  return (
        <div className = {classes.search}>
           < input placeholder="DL 4C AG 3316"
             onChange={props.changeInput}
             value={props.value}/>

        </div>
    );
}

export default SearchInput;
