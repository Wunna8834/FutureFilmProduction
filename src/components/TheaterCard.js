import React from 'react'
import { Card } from 'react-bootstrap'
export const TheaterCard = (props) => {
  return (
    <Card className='col-12'>
        <Card.Body>
            <Card.Title>{props.theaterName}</Card.Title>
            <Card.Subtitle className='text-secondary'>{props.theaterLocation}</Card.Subtitle>
            <Card.Text>{props.contactInfo}</Card.Text>
        </Card.Body>
    </Card>
  )
}
