import React from 'react'
import GoogleMap from '../images/googlemap.webp'
import { Accordion, Button, Form } from 'react-bootstrap'
import { accordion_data } from '../data/accordionData'
import '../css/ContactUs.css'
export const ContactUs = () => {
  return (
    <div className='col-12 contact-us-bg'>
        <div className='d-flex text-light flex-column justify-content-center align-items-center py-4'>
            <h2 style={{color:"#F2921D"}}>Reach us from the following</h2>
            <div>
                <p>Office Phone:<span>  01-123456</span></p>
                <p>Address:<span>Office 32, Junction Mawtin</span></p>
                <p>Email:<span>realfilm-production8776@gmail.com</span></p>
                <p>Office Hour:<span>9AM - 5PM</span></p>
                <p>Social Media Link:<span></span></p>
            </div>
        </div>
        <div className='text-center'>
            <img src={GoogleMap}/>
        </div>
        <div className='mt-3'>
            <h2 className='text-center' style={{color:"#F2921D"}}>Frequently Asked Questions</h2>
            <Accordion className='col-lg-6 col-sm-12 mx-auto'>
                {accordion_data.map(item =>
                    <Accordion.Item key={item.id} eventKey={item.id}>
                        <Accordion.Header>{item.question}</Accordion.Header>
                        <Accordion.Body>{item.answer}</Accordion.Body>
                    </Accordion.Item>    
                )}
            </Accordion>
        </div>
        <div className='mt-4'>
            <h2 className='text-center' style={{color:"#F2921D"}}>Get in touch with us</h2>
            <Form className='col-lg-6 col-sm-12 mx-auto'>
                <Form.Group>
                    <Form.Label className='text-light'>Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter your name'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='text-light'>Email</Form.Label>
                    <Form.Control type='email' placeholder='youremail@gmail.com'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='text-light'>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Write message to us"/>
                </Form.Group>
                <Button variant='primary' type='submit' className='mt-2 mb-2'>Submit</Button>
            </Form>
        </div>
    </div>
  )
}
