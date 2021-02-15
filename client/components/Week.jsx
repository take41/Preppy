import React, { Component } from 'react';
import Day from './Day.jsx';

class Week extends Component {
  constructor(props){
    super(props);

    this.state = {
      testMealName: '',
      Sun: {
        dayName: 'Sunday',
        mealName: '',
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
    this.days = ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'];
    
    this.updateMealName = this.updateMealName.bind(this);
    this.updateTestMealName = this.updateTestMealName.bind(this);
  }

  updateTestMealName(event) {
    const newName = event.target.value;
    console.log('target', event.target.value);
    this.setState({
      ...this.state,
      testMealName: newName
    });
    console.log('state', this.state.testMealName);
  }

  // update individual mealName
  // indiv day obj is
  updateMealName(event) {
    const newMealName = '';
    // newMealName = event.target.
    console.log('target', event.target);
    const dayAbbr = this.days[event.target.id];
    // this.state[dayAbbr][dayName] = currMealName

    this.setState({
      ...this.state,
      dayAbbr: {
        ...this.state[dayAbbr],
        mealname: newMealName
      }
    })
  }
  
  render() {
    const arrOfDays = [];
    for (let i = 0; i < 7; i++) {
      // console.log('this.state.days>>>>', this.state.days)
      let dayAbbr = this.days[i];
      arrOfDays.push(<Day 
        key={i} 
        dayAbbr={dayAbbr} 
        dayOfWeek={this.state[dayAbbr].dayName} 
        mealOfDay={this.state[dayAbbr]['mealname']} 
        ingredientList={this.state[dayAbbr]['ingrList']}
        updateMealName={this.updateMealName}
        testUpdate={this.updateTestMealName}
        />)
    }
    
    return(
      <div> 
        <div className="container-fluid">
          <div className="row">
            {arrOfDays}
          </div>
        </div>

        <button type="button" className="btn btn-success btn-lg" data-toggle="modal" data-target="#couponModal">Get My Weekly Coupons!</button>

        <div id="couponModal" className="modal fade" role="dialog">
          <div className="modal-dialog">

            <div className="modal-content">

              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Coupons!!!</h4>
              </div>

              <div className="modal-body">
                <p>Ingredients: </p>
                <p>Coupons: </p>
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

// function Week(props) {
//   /*
//   this.state = {
//     dayObj1: {
//       dayName: Sunday,
//       mealName: 'string',
//       ingrList: []
//     },
//     dayObj2: {
//       dayName: Monday,
//       mealname: 'banana',
//       ingrList: []
//     }
//     props.dayName // Monday
//     props.mealName //
//   }
//   */
//   // const [eachDay, seteachDay] = useState([
//   //   {
//   //     dayName: 'Sunday',
//   //     mealName: '',
//   //     ingrList: []
//   //   }, 
//   //   {
//   //     dayName: 'Monday',
//   //     mealName: '',
//   //     ingrList: []
//   //   }, 
//   //   {
//   //     dayName: 'Tueday',
//   //     mealName: '',
//   //     ingrList: []
//   //   }, 
//   //   {
//   //     dayName: 'Wednesday',
//   //     mealName: '',
//   //     ingrList: []
//   //   }, 
//   //   {
//   //     dayName: 'Thursday',
//   //     mealName: '',
//   //     ingrList: []
//   //   }, 
//   //   {
//   //     dayName: 'Friday',
//   //     mealName: '',
//   //     ingrList: []
//   //   }, 
//   //   {
//   //     dayName: 'Saturday',
//   //     mealName: '',
//   //     ingrList: []
//   //   }
//   // ])


//   // const [oneDayObj, setDaysObj] = useState({
//   //   dayNames: 'Sunday',
//   //   objOfIngrLists: {},
//   // });
//   // const [objOfIngrLists, setIngrList] = useState({
//   //   list: []
//   // });
//   const [days, setDays] = useState(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);

//   const [show, setShow] = useState(false);
//   const [ingredientsFromServer, setIngredientsFromServer] = useState([]);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   //iterate to get the Days of the Week
//   const arrOfDays = [];
//   for (let i = 0; i < 7; i++) {
//     // console.log('this.state.days>>>>', this.state.days)
//     arrOfDays.push( //<div className="col" key ={i}>
//     <Day key={i} dayOfWeek={days[i]} />
//     // <Day key={i} dayOfWeek={eachDay[i]['dayName']} mealOfDay={eachDay[i]['mealName']} ingredientList={eachDay[i]['ingrList']} />
//     // </div>
//     )
//   }

//   //fetch GET request for the ingredients (MAKE SURE TO MATCH PATH FROM BACKEND)
//   //using this useEffect, you tell React that your component needs to do something after render
//   useEffect(() => {
//     fetch('/ingredients')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setIngredientsFromServer(data); //check what data returns, see if its [data]
//       });
//   })

//   return(
//     <div>
      // <div className="container-fluid">
      //   <div className="row">
      //     {arrOfDays}
      //   </div>
      // </div>

      // <button type="button" className="btn btn-success btn-lg" data-toggle="modal" data-target="#couponModal">Get My Weekly Coupons!</button>

      // <div id="couponModal" className="modal fade" role="dialog">
      //   <div className="modal-dialog">

      //     <div className="modal-content">

      //       <div className="modal-header">
      //         <button type="button" className="close" data-dismiss="modal">&times;</button>
      //         <h4 className="modal-title">Coupons!!!</h4>
      //       </div>

      //       <div className="modal-body">
      //         <p>Ingredients: </p>
      //         <p>Coupons: </p>
      //       </div>

      //       <div className="modal-footer">
      //         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
      //       </div>
      //     </div>

      //   </div>
      // </div>
//     </div>
//   )
// }

{/* <Button variant="success" size="lg" onClick={handleShow}>
        Get My Weekly Coupons
      </Button>
      
      <Modal size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered 
        show={show} 
        onHide={handleClose}
        >

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Weekly Coupons!!!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h5>Ingredients:</h5> 
          //list the ingredients of the week
          <h5>Coupons:</h5>
          //show coupons
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}

export default Week;