import React, { Component } from 'react'
 
import Aux from '../../hoc/Aux'
import SearchInput from '../../components/Search/SearchInput'
import SubmitButton from '../../components/Submit/SubmitButton'
import Header from '../../components/Header/Header'
import classes from './HomePage.css';

class HomePage extends Component {

  render() {
    
    return (
      <Aux>
        <Header />
        <div className={classes.wrapper}>
          <p className={classes.sample}> Uff! Anyone just hit your vehicle and passed away? <br/>
Dont worry man, just type the code and <br/>find out that vehicle's RTO</p>
          <SearchInput />
          <SubmitButton />
        </div>
      </Aux>
    )
  }
}

export default HomePage