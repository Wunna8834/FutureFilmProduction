import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../css/Account.css'
export const Account = () => {
  const navigate = useNavigate()
  function handleSubmit(event) {
    event.preventDefault();
    navigate('/success')
  }
  return (
    <div className='account-page-bg pt-4'>
            <h3 className='text-center text-color'>Create Account</h3>
            <Form className='col-lg-6 col-10 mx-auto' onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label className='text-light'>User Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter your username'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='text-light'>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter your email address'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='text-light'>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter your password'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='text-light'>Re-type password</Form.Label>
                    <Form.Control type='password' placeholder='Type your password again'/>
                </Form.Group>
                <Button className='rounded-pill mt-3' type="submit">Register</Button>
            </Form>
            <p className='text-light text-center'>Already have an account? 
                <LinkContainer to="/sign-in" style={{cursor: "pointer"}}>
                    <p className='text-primary'>Sign In!</p>
                </LinkContainer>
            </p>
        </div>
  )
}
