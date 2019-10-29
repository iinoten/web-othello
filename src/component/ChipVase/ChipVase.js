import React, {Component} from 'react';

import './ChipVase.css'
import SavingChip from '../SavingChip/SavingChip';



class ChipVase extends Component{
  constructor() {
    super()
  }
  onClicked_vase_handler = () => {
    this.props.click_handler()
  }
  render(){
    const chips = [];
    for (let index = 0; index < 20; index++) {
      chips.push(<SavingChip />)
    }
    return(
      <div className="chipvase" onClick={this.onClicked_vase_handler}>
        {chips}
      </div>
    );
  }
}

export default ChipVase;