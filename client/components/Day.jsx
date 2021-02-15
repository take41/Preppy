import React, { Component } from 'react';
// ingredient array should be stored and updated in Week component
// 

class Day extends Component {
  constructor(props) {
    super(props);
    this.inputMealName = '';
    
    this.storeMealName = this.storeMealName.bind(this);
  }

  // declare a var and store meal name inputted by user
  storeMealName(event) {
    // console.log('meal name', event.target.value);
    this.inputMealName = event.target.value;
    // update individ's mealName in state
    // console.log('target', event.target);

    // target.event is 
  }

  // store user inputted mealName in state by invoking updateMealName
  invokeUpdateMealName() {
    
  }

  render() {
  

  // update state of Sunday's mealName property

  
  // store ingredient inputted by user in an array to post in db
  
  
  // set mealName in state
  const addMealName = event => {
    // props.mealOfDay(event.target.value);
    // props.setState({
    //   ...props,
    //   mealOfDay = event.target.value
    // })
    // console.log(props.mealOfDay);
  }

  // set user ingredient input
  const addCurrIngredient = event => {
    // console.log('INGREDIENT>>>>>', event.target.value)
    // setCurrIngredient(event.target.value);
  }

  // add ingredient to ingredientList when user presses + button
  const addToIngredientList = () => {
    // setIngredientList([
    //   ...ingredientList,
    //   currIngredient
    // ])
  }
  // console.log(ingredientList);

  // display list of ingredients under input box
  
  

    // ON SAVE POST REQ
  // OBJ to send to SERVER
  // {mealName: MEAL NAME, ingredientList: array}



  // onClick SAVE button, send object w/ingredient list to server
  console.log('props', this.props);

  return (
    // a grid with classes for small, medium, and large devices
    <div id='day' className="col-sm-1 col-md-1 col-lg-1">
      <h5>{this.props.dayOfWeek}</h5> 
      <p></p>
     
     {/* To open the modal window */}
      <button type="button" className="btn btn-info btn-sm" data-toggle="modal" data-target="#addModal">Add Meal</button>

      <div id="addModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Modal Header</h4>
            </div>

            <div className="modal-body">
              <p>Meal Name:</p>
              <input id={this.dayAbbr} type="text" onChange={this.props.testUpdate}></input>
              <br></br>
              <p>Add ingredients:</p>
              <span><input type="text" ></input> <button >+</button></span>
              {/* SHOW LIST OF INGREDIENTS HERE */}
              {/* <ul class="list-group">
                <li class="list-group-item">First item</li>
                <li class="list-group-item">Second item</li>
                <li class="list-group-item">Third item</li>
              </ul>  */}
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal" >Save</button>
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
        {/* end of addModal */}
      </div>
      {/* end of return container */}
    </div> 
  )}
}

export default Day;
