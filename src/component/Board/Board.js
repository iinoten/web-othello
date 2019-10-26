import React, {Component} from 'react';
import {isMobile} from 'react-device-detect'

import Chip from '../Chip/Chip'

import './Board.css'

class Board extends Component{
  render(){
    return(
      <div id={isMobile?"board-mobile":"board-pc"}><Chip /></div>
    );
  }
}

export default Board;