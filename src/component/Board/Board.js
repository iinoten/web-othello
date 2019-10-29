import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import Chip from '../Chip/Chip';
import ChipVase from '../ChipVase/ChipVase';
import Frame from '../Frame/Frame';
import './Board.css';


class Board extends Component{
  constructor(){
    super();
    this.state = {
      chips_array: []
    }
  }
  click_chipvase_handler = () => {
    let concatted_state_chips = this.state.chips_array.concat(<Chip />)
    this.setState({chips_array: concatted_state_chips})
    console.log("vas1e")
  }
  render(){
    return(
      <div id={isMobile?"board-mobile":"board-pc"}>
        <Frame />
        <Chip />
        {this.state.chips_array}
        <ChipVase click_handler={this.click_chipvase_handler}/>
      </div>
    );
  }
}

export default Board;