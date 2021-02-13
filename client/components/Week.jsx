import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Day from './Day.jsx';


function Week(props) {
  const [days, setDays] = useState(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //iterate to get the Days of the Week
  const arrOfDays = [];
  for (let i = 0; i < 7; i++) {
    // console.log('this.state.days>>>>', this.state.days)
    arrOfDays.push(<Day key={i} dayOfWeek={days[i]}/>)
  }

  //pop-up for Get Coupons button

  return(
    <div>
      {arrOfDays}
      <Button variant="primary" size="lg" onClick={handleShow}>
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
          {/* list the ingredients of the week */}
          <h5>Coupons:</h5>
          {/* show coupons */}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}


// class Week extends Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//       modalShow: false,
//     }

//     this.setModalShow = this.setModalShow.bind(this);
//   }

//   //Vertically centered Modal
//   // setModalShow(event){
    
//   // }

//   render() {
//     const arrOfDays = [];
//     for (let i = 0; i < 7; i++) {
//       // console.log('this.state.days>>>>', this.state.days)
//       arrOfDays.push(<Day key={i} dayOfWeek={this.state.days[i]}/>)
//     }
    
//     return(
//       <div> 
//         {arrOfDays}
//         <Button variant="primary" size="lg" onClick={() => this.setModalShow(true)}>
//           Get My Weekly Coupons
//         </Button>
//         {/* <MyVerticallyCenteredModal
//           show={this.state.modalShow}
//           onHide={() => this.setModalShow(false)}
//         /> */}
//         {/* <input type="submit" value="Get My Weekly Coupons" /> */}
//       </div>
//     )
//   }
// }

export default Week;