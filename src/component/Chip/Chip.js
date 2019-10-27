import React, { Component } from 'react';
import Draggable from 'react-draggable';
import posed from 'react-pose';
import './Chip.css';

const rand_percent = () => {
  return Math.floor(Math.random () * 50) + "% " + Math.floor(Math.random () * 50) + "% " + Math.floor(Math.random () * 50) + "% " + Math.floor(Math.random () * 50) + "%/" + Math.floor(Math.random () * 50) + "% " + Math.floor(Math.random () * 50) + "% " + Math.floor(Math.random () * 50) + "% " + Math.floor(Math.random () * 50) + "%";
}

const Box = posed.div({
  right: {borderRadius: rand_percent},
  left:  {borderRadius: rand_percent}
})

class Chip extends Component{
  constructor(){
    super();
    this.state = {
      is_black: true,
      style_flag: true
    }
  }

  doubletap_handler = () => {
    this.setState({is_black: !this.state.is_black})
  }
  
  componentDidMount(){
    setInterval(()=>{
      this.setState({style_flag: !this.state.style_flag})
    },500);
  }

  render(){
    return(
        <Box className="box" pose={this.state.style_flag ? 'right' : 'left'} className={"chip " + (this.state.is_black?"black":"white")}>
        </Box>
    );
  }
}

export default Chip;