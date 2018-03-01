import React, { Component } from 'react'
 
import Aux from '../../hoc/Aux'
import SearchInput from '../../components/Search/SearchInput'
import SubmitButton from '../../components/Submit/SubmitButton'
import Header from '../../components/Header/Header'
import Result from '../../components/Result/Result'
import { arr } from './Data.js'

import classes from './HomePage.css';

class HomePage extends Component {

   state = {
   input: '',
   result: ''
  }
  handleChange = (e) => {
    console.log("changed");
     // var str = e.target.value;
      
     //  if (str.substring(4,5) != "-")
     //  {     
     //        str = str.substring(0,2) + "-" + str.substring(2,str.length);
     //  }
     //       this.state.input = str;
           
    this.setState({ input: e.target.value });
    console.log(this.state);
  }
  
   handleClick = (e) => {
    var entered_val = this.state.input.toUpperCase()
  var answer = arr.find(function(ele){
    
 return (ele.code == entered_val) ? ele.type : false
})

 answer? this.setState({ result: answer.type}) : this.setState({ result: 'Not available'});
  console.log("result",this.state.result)
  }

  render() {
    return (
      <Aux>
        <Header />
        <div className={classes.wrapper}>
          <p className={classes.sample}> Uff! Anyone just hit your vehicle and passed away? <br/>
Dont worry man, just type the code and <br/>find out that vehicle's RTO</p>
          <SearchInput changeInput={ this.handleChange } value={this.state.input} />
          <SubmitButton clicked={ this.handleClick }/>
          <Result  value={this.state.result} />

        </div>
      </Aux>
    )
  }
}

export default HomePage