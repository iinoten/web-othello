import React, {Component} from 'react';
import './SavingChip.css'
import posed, { Transition } from 'react-pose';

const bias_random_number = () => {
  return Math.round( ( (Math.random()*(40-0)+0) + (Math.random()*(40-0)+0) ) / 1   )+'%';
}

const random_number = () => {
  return Math.round((Math.random()*(75-0)+0))+'%'
}

const rand_percent = () => {
  return(
    Math.floor((Math.random () * (50-30))+30) + "% " +
    Math.floor((Math.random () * (50-30))+30) + "% " +
    Math.floor((Math.random () * (50-30))+30) + "% " +
    Math.floor((Math.random () * (50-30))+30) + "%/" +
    Math.floor((Math.random () * (50-30))+30) + "% " +
    Math.floor((Math.random () * (50-30))+30) + "% " +
    Math.floor((Math.random () * (50-30))+30) + "% " +
    Math.floor((Math.random () * (50-30))+30) + "%"
  );
}

const Box = posed.div({
  right: {borderRadius: rand_percent, 
    top: bias_random_number, 
    left: bias_random_number, 
    transition: {
      ease: 'easeOut',
      duration: 1200,
      type: 'spring'
    }},
  left:  {
    borderRadius: rand_percent, 
    top: bias_random_number, 
    left: bias_random_number,
    transition: {
      ease: 'easeOut',
      duration: 1200,
      type: 'spring'
    }
  }
})

const FreeBox = posed.div({
  right: {
    borderRadius: rand_percent, 
    top: random_number, 
    left: random_number,
    transition: {
      ease: 'linear',
      duration: 1200,
    }
  },
  left: {
    borderRadius: rand_percent, 
    top: random_number, 
    left: random_number,
    transition: {
      ease: 'linear',
      duration: 1200,
    }
  }
})


class SavingChip extends Component{
  constructor(){
    super();
    this.state = {
      color: 'black',
      change_move: false
    } 
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({change_move: !this.state.change_move})
    },1200)
  }
  render(){
    return(
      <div>
        <FreeBox pose={this.state.change_move?'right':'left'} className={"savingchip " + this.state.color}/>
        <Box pose={this.state.change_move?'right':'left'} className={"savingchip " + this.state.color} />
      </div>
    );
  }
}

export default SavingChip;