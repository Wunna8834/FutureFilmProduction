import React from 'react'
import { Form, Button } from 'react-bootstrap'
export const SignIn = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{backgroundColor: "#2E3840", height: "100vh"}}>
        <h3 className='text-center text-color'>Sign In</h3>
            <Form className='col-6 mx-auto'>
                <Form.Group>
                    <Form.Label className='text-light'>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter your email address'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='text-light'>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter your password'/>
                </Form.Group>
                <Button className='rounded-pill mt-3' type="submit">Sign in</Button>
            </Form>
    </div>
  )
}
