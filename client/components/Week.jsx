import React, { Component } from 'react';
import Day from './Day.jsx';

class Week extends Component {
  constructor(props){
    super(props);

    this.state = {
      currIngrName: '',
      Sun: {
        dayName: 'Sunday',
        mealname: '',
        ingrList: []
      },
      Mon: {
        dayName: 'Monday',
        mealname: '',
        ingrList: []
      },
      Tues: {
        dayName: 'Tuesday',
        mealname: '',
        ingrList: []
      },
      Weds: {
        dayName: 'Wednesday',
        mealname: '',
        ingrList: []
      },
      Thurs: {
        dayName: 'Thursday',
        mealname: '',
        ingrList: []
      },
      Fri: {
        dayName: 'Friday',
        mealname: '',
        ingrList: []
      },
      Sat: {
        dayName: 'Saturday',
        mealname: '',
        ingrList: []
      }
    }
    this.saveMealName = this.saveMealName.bind(this);
    this.saveIngrName = this.saveIngrName.bind(this);
    this.addToIngrList = this.addToIngrList.bind(this);
  }

  saveMealName(event) {
    const newMealName = event.target.value;
    const dayAbbr = event.target.id;
    const newState = {
      ...this.state,
    };
    newState[dayAbbr].mealname = newMealName;
    this.setState(newState);
  }

  saveIngrName(event){
    const newIngrName = event.target.value;
    const newState = {
      ...this.state,
      currIngrName: newIngrName
    };
    this.setState(newState);
  }

  addToIngrList(event) {
    const ingrToAdd = this.state.currIngrName;
    const dayAbbr = event.target.id;
    const newState = {
      ...this.state
    };
    newState[dayAbbr].ingrList.push(ingrToAdd);
    this.setState(newState);
  }

  /********** FETCH REQUESTS **********/
  // onclick save btn
  // post meal name and ingr list to server
  onSaveButtonClick(event) {
    const dayAbbr = event.target.id;
    const userBody = this.state[dayAbbr];

    fetch('/mealAndIngredients', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      body: JSON.stringify(userBody)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  // get meal name from server
  // to populate in Day cell


  // get ingr list from server
  // to populate shopping list modal


  
  render() {
    const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'];
    const arrOfDays = [];
    for (let i = 0; i < daysOfWeek.length; i++) {
      let dayAbbr = daysOfWeek[i];
      arrOfDays.push(<Day 
        key={i}
        dayModal={`day${i}`}
        dayAbbr={daysOfWeek[i]}
        dayOfWeek={this.state[dayAbbr].dayName} 
        mealOfDay={this.state[dayAbbr].mealname} 
        ingredientList={this.state[dayAbbr].ingrList}
        saveMealName={this.saveMealName}
        addToIngrList={this.addToIngrList}
        saveIngrName={this.saveIngrName}
        />)
    }

    /********** GET ALL INGREDIENTS FROM EVERY DAY **********/
    const allOfIngr = [];
    for (let key in this.state) {
      console.log('check type of this.state.key', typeof this.state[key]);
      if (typeof this.state[key] === 'object'){
        allOfIngr.push(...this.state[key].ingrList);
      }
    }
    // console.log('ALLOFINGREDIENTS>>>>', allOfIngr)

    const showAllOfIngr = [];
    for (let i = 0; i < allOfIngr.length; i++){
      showAllOfIngr.push(<li>{allOfIngr[i]}</li>);
    }
    

    return(
      <div> 
        <div className="container-fluid">
          <div className="row">
            {arrOfDays}
          </div>
        </div>

        <button type="button" className="btn btn-success btn-lg" data-toggle="modal" data-target="#couponModal">Shopping List for the week!</button>

        <div id="couponModal" className="modal fade" role="dialog">
          <div className="modal-dialog">

            <div className="modal-content">

              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Shopping List</h4>
              </div>

              <div className="modal-body">
                <p>Ingredients: </p>
                <ul>{showAllOfIngr}</ul>
                {/* <p>Coupons: </p> */}
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Week;