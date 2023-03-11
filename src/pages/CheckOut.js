import React from 'react'
import QR_Code from '../images/QR.png'
import { Card } from 'react-bootstrap'
export const CheckOut = () => {
  return (
    <div>
        <h2 className='text-center fs-2' style={{color:"#F2921D"}}>Take your movie ticket here</h2>
        <Card className="col-lg-4 col-md-7 col-10 mx-auto mb-3 mt-2">
            <Card.Img src={QR_Code} variant="top"/>
            <Card.Body>
                <Card.Title className='text-center fs-3'>A girl with a beautiful skirt</Card.Title>
                <Card.Text className='mt-3'>
                    <p>Theater Name: The King's Heart</p>
                    <p>Seat Number: VIP-43</p>
                    <p>Date: 11.3.2023</p>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}
