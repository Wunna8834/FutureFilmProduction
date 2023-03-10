import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
export const SignIn = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{backgroundColor: "#2E3840", height: "100vh"}}>
        <h3 className='text-center text-color'>Sign In</h3>
            <Form className='col-lg-6 col-10 mx-auto'>
                <Form.Group>
                    <Form.Label className='text-light'>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter your email address'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='text-light'>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter your password'/>
                </Form.Group>
                <LinkContainer to='/'> 
                  <Button className='rounded-pill mt-3' type="submit">Sign in</Button>
                </LinkContainer>
            </Form>
    </div>
  )
}
