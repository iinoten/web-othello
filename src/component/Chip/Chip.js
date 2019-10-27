import React, {Component} from 'react';

import './Chip.css'
import Draggable from 'react-draggable';

class Chip extends Component{
  constructor(){
    super();
    this.state = {
      is_black: true
    }
  }
  doubletap_handler = () => {
    this.setState({is_black: !this.state.is_black})
  }
  render(){
    return(
      <Draggable>
        <div onDoubleClick={this.doubletap_handler} className={"chip " + (this.state.is_black?"black":"white")}></div>
      </Draggable>
    );
  }
}

export default Chip;