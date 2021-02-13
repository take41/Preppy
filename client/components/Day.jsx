import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Day(props) {
  
  const [displayAddPopup, setDisplayAddPopup] = useState(false);

  const handleClose = () => setDisplayAddPopup(false);
  const handleOpen = () => setDisplayAddPopup(true);

  return (
    <div id='day'>
      <h5>{props.dayOfWeek}</h5>
      <Button className="btn-primary" variant="primary" onClick={handleOpen}>Add</Button>
      <Modal 
        show={displayAddPopup} onHide={handleClose}
        size="sm"
        centered
        variant="primary"
        >
        <Modal.Header closeButton>
          <Modal.Title>Hello Add Button</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <button onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Day;
