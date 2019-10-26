import React, {Component} from 'react';

import './Chip.css'

class Chip extends Component{
  constructor(){
    super();
    this.state = {
      is_black: true
    }
  }
  render(){
    return(
      <div className={"chip " + (this.state.is_black?"black":"white")}></div>
    );
  }
}

export default Chip;