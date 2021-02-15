import React, { Component } from 'react';


class Day extends Component {
  render() {

  // console.log('props>>>>', this.props);

  // key={i}
  // dayModal={`day${i}`}
  // dayAbbr={daysOfWeek[i]}
  // dayOfWeek={this.state[dayAbbr].dayName} 
  // mealOfDay={this.state[dayAbbr].mealname} 
  // ingredientList={this.state[dayAbbr].ingrList}
  // saveMealName={this.saveMealName}
  
  const arrOfIngr = [];
  for (let i = 0; i < this.props.ingredientList.length; i++) {
    arrOfIngr.push(<li key={i}>{this.props.ingredientList[i]}</li>)
  }

  return (
    
    // a grid with classes for small, medium, and large devices
    <div style={style.container} className="col-sm-1 col-md-1 col-lg-1">
      <h3>{this.props.dayOfWeek}</h3> 
      <h5>{this.props.mealOfDay}</h5>
     
     {/* To open the modal window */}
      <button type="button" className="btn btn-info btn-sm" data-toggle="modal" data-target={`#${this.props.dayModal}`}>Add Meal</button>

      <div id={this.props.dayModal} className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Add your meal plan</h4>
            </div>

            <div className="modal-body">
              <p>Meal Name:</p>
              <input id={this.props.dayAbbr} type="text" onChange={this.props.saveMealName}></input>
              <br></br>
              <p>Add ingredients:</p>
              <span>
                <input type="text" onChange={this.props.saveIngrName}></input> 
                <button id={this.props.dayAbbr} onClick={this.props.addToIngrList}>+</button>
              </span>

              {/* SHOW LIST OF INGREDIENTS HERE */}
              <ul>{arrOfIngr}</ul>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal" id={this.props.dayAbbr}>Save</button>
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

const style = {
  container: {
    border: '1px solid black'
  }
}

export default Day;
