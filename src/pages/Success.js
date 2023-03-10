import React from 'react'
import { Card } from 'react-bootstrap'
import '../css/Success.css'
export const Success = () => {
  return (
    <div style={{backgroundColor: "#ECF2FF"}} className='d-flex justify-content-center align-items-center success'>
        <Card className='col-lg-6 col-10 p-5 text-center fs-2 bg-secondary text-light' variant="dark">
            Account created successfully
        </Card>
    </div>
  )
}
