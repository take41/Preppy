import React, { Component } from 'react';
import Day from './Day.jsx';

class Week extends Component {
  constructor(props){
    super(props);

    this.state = {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    }

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(event){
    
  // }

  render() {
    const arrOfDays = [];
    for (let i = 0; i < 7; i++) {
      // console.log('this.state.days>>>>', this.state.days)
      arrOfDays.push(<Day key={i} dayOfWeek={this.state.days[i]}/>)
    }
    
    return(
      <div> 
        {arrOfDays}
        <input type="submit" value="Get My Weekly Coupons" />
      </div>
    )
  }
}

export default Week;