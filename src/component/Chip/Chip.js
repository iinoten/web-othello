import React, { Component } from 'react';
import Draggable from 'react-draggable';
import posed from 'react-pose';
import './Chip.css';

const rand_percent = () => {
  return(
    Math.floor((Math.random () * (80-20))+20) + "% " +
    Math.floor((Math.random () * (80-20))+20) + "% " +
    Math.floor((Math.random () * (80-20))+20) + "% " +
    Math.floor((Math.random () * (80-20))+20) + "%/" +
    Math.floor((Math.random () * (80-20))+20) + "% " +
    Math.floor((Math.random () * (80-20))+20) + "% " +
    Math.floor((Math.random () * (80-20))+20) + "% " +
    Math.floor((Math.random () * (80-20))+20) + "%"
  );
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
    console.log("double clicked")
    this.setState({is_black: !this.state.is_black})
  }
  
  componentDidMount(){
    setInterval(()=>{
      this.setState({style_flag: !this.state.style_flag})
    },200);
  }

  render(){
    return(
      <Draggable>
        <Box 
          style={this.state.is_black?{backgroundColor:'#272B2E'} : {backgroundColor:'#F4F5F7'}} 
          className="box" 
          pose={this.state.style_flag ? 'right' : 'left'} 
          className={"chip"} 
          onDoubleClick={this.doubletap_handler}
        />
      </Draggable>
    );
  }
}

export default Chip;