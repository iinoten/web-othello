import React, { Component } from 'react';
import Draggable from 'react-draggable';
import posed from 'react-pose';
import './Chip.css';

const rand_percent = () => {
  return(
    Math.floor((Math.random () * (80-30))+30) + "% " +
    Math.floor((Math.random () * (80-30))+30) + "% " +
    Math.floor((Math.random () * (80-30))+30) + "% " +
    Math.floor((Math.random () * (80-30))+30) + "%/" +
    Math.floor((Math.random () * (80-30))+30) + "% " +
    Math.floor((Math.random () * (80-30))+30) + "% " +
    Math.floor((Math.random () * (80-30))+30) + "% " +
    Math.floor((Math.random () * (80-30))+30) + "%"
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
      style_flag: true,
      is_dragging: false
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

  drag_onstart_handler = () => {
    this.setState({
      is_dragging: true
    })
  }
  drag_onstop_handler = () => {
    this.setState({
      is_dragging: false
    })
  }
  
  
  render(){
    return(
      <Draggable 
        onStart={this.drag_onstart_handler}
        onStop={this.drag_onstop_handler} >
        <Box 
          style={this.state.is_black?{backgroundColor:'#272B2E', boxShadow: '0px 3px 4px rgba(244, 245, 247)', zIndex:(this.state.is_dragging?10:9)} : {backgroundColor:'#F4F5F7', boxShadow: '0px 3px 4px #272B2E', zIndex:(this.state.is_dragging?10:9)}} 
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