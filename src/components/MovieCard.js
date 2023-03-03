import React from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
export const MovieCard = (props) => {
  return (
    <Card className='col-11'>
        <Card.Img variant='top' src={props.imgSrc}/>
        <Card.Body>
            <Card.Title>
                {props.title}
                <Badge bg='info'>{props.duration}</Badge>
            </Card.Title>
            <Card.Subtitle className='text-secondary mt-1'>
                Rating - {props.rating} <br/>
                Theater Name - {props.theaterName}
            </Card.Subtitle>
            <Card.Text className='mt-3'>{props.description}</Card.Text>
            <div className='d-grid gap-2'>
                <LinkContainer to={`/booking/${props.id}`}>
                    <Button variant='success' size='lg'>Book Now</Button>
                </LinkContainer>
            </div>
        </Card.Body>
    </Card>
  )
}
