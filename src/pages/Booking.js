import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { latest_movie } from '../data/latestMovie';
import { Form, Button } from 'react-bootstrap';
import { ModalPopUp } from '../components/ModalPopUp';
export const Booking = () => {
  let {id} = useParams();
  const image_photo = latest_movie[id].moviePhoto;
  const movie_name = latest_movie[id].movieName
  const movie_description = latest_movie[id].description
  const theater_name = latest_movie[id].theaterName

  const [seating, setSeating] = useState("")
  const setSelectedOption = (event) => {
    setSeating(event.target.value)
  }
  const [showTime, setShowTime] = useState("")
  const setSelectedShowtime = (event) => {
    setShowTime(event.target.value)
  }

  const [showDate, setShowDate] = useState("")
  const setSelectedShowDate = (event) => {
    const input = event.target.value
    const dateObj = new Date(input)
    const dateString = dateObj.toISOString()
    setShowDate(dateString.substr(0,10))
  }
  
  const [number, setNumber] = useState("")
  const setSelectedNumber = (event) => {
    setNumber(event.target.value)
  }

  const [payment, setPayment] = useState("")
  const setSelectedPayment = (event) => {
    setPayment(event.target.value);
  }
  const [modal, setModal] = useState(false)
  return (
    <div style={{backgroundColor: "#F5EAEA"}} className='d-flex flex-column flex-lg-row justify-content-around px-2'>
        <div className='col-lg-6 col-12'>
          <img className='col-12' src={image_photo}/>
        </div>
        <div className='col-lg-5 col-12 mb-3'>
          <h3>{movie_name}</h3>
          <p className='col-lg-10 col-12 text-mute' style={{textAlign: "justify"}}>{movie_description}</p>
          <p className='fw-semibold'>Theater Name: {theater_name}</p>
          <Form>
            <Form.Group>
              <Form.Label>Seating Plan</Form.Label>
              <Form.Select onChange={setSelectedOption}>
                <option>Choose your seating plan</option>
                <option value="Normal">Normal</option>
                <option value="VIP">VIP</option>
                <option value="Private">Private</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Show Time</Form.Label>
              <Form.Select onChange={setSelectedShowtime}>
                <option>Select Show Time</option>
                <option value="9AM-12PM">9AM - 12PM</option>
                <option value="1PM-3PM">1PM - 3PM</option>
                <option value="4PM-6PM">4PM - 6PM</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Payment Method</Form.Label>
              <Form.Select onChange={setSelectedPayment}>
                <option>Select Payment Method</option>
                <option value="KBZ Pay">KBZ Pay</option>
                <option value="AYA Bank">AYA Bank</option>
                <option value="Wave Pay">Wave Pay</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Choose Your Date</Form.Label>
              <Form.Control onChange={setSelectedShowDate} type="date"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Select the number of people</Form.Label>
              <Form.Control onChange={setSelectedNumber} type="number"/>
            </Form.Group>
            <Form.Text className='text-danger'>Check your data before clicking booking button</Form.Text>
            <div className='d-grid mt-2'>
              <Button onClick={() => setModal(true)} size="lg">Book</Button>
            </div>
            
          </Form>
          
        </div>
        <ModalPopUp 
          show={modal} 
          onHide={() => setModal(false)}
          movieTitle={movie_name}
          seating={seating}
          showTime={showTime}
          showDate={showDate}
          number={number}
        />
    </div>
  )
}
