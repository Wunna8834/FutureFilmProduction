import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import 'animate.css'
export const ModalPopUp = (props) => {
  
  return (
    <Modal {...props} centered className='animate__tada animate__animated'>
        <Modal.Header closeButton>
            <Modal.Title className='mx-auto fs-2' id="contained-modal-title-vcenter">Thanks For Choosing Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <p className='fw-bold'>Movie Name: {props.movieTitle}</p>
           <p className='fw-semibold'>Seat: <span className='fw-normal'>{props.seating}</span></p>
           <p className='fw-semibold'>Show Time: <span className='fw-normal'>{props.showTime}</span></p>
           <p className='fw-semibold'>Show Date: <span className='fw-normal'>{props.showDate}</span></p>
           <p className='fw-semibold'>Number: <span className='fw-normal'>{props.number}</span></p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
  )
}
