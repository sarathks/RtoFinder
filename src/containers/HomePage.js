import React, { Component } from 'react'
 
import Aux from '../hoc/Aux'
import SearchInput from '../components/Search/SearchInput'
import SubmitButton from '../components/Submit/SubmitButton'
import Header from '../components/Header/Header'
import classes from './HomePage.css';

class HomePage extends Component {

  render() {
    
    return (
      <Aux>
        <Header />
        <p className={classes.sample}> Please enter the registration number in space-separated format like "DL 4C AG 3316".</p>
        <SearchInput />
        <SubmitButton />
      </Aux>
    )
  }
}

export default HomePage