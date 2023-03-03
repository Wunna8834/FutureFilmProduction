import React from 'react'
import { Navbar } from 'react-bootstrap'

export const Footer = () => {
  return (
    <Navbar className='pt-2 bg-dark'>
        <div className='d-flex flex-column justify-content-center align-items-center mx-auto'>
          <p className='text-center text-light'>Copyright @2023 <span>Future Film Production</span></p>
          <p className='text-center text-light'>Developed by Wunna Aung(HND-43)</p>
        </div>
    </Navbar>
  )
}
