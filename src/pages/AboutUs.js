import React from 'react'
import { CardGroup, Card, CardImg } from 'react-bootstrap'
import Sarah from '../images/Sarah.png'
import John from '../images/John.png'
import Maya from '../images/Maya.png'
import Logo from '../images/Logo.png'
import '../css/AboutUs.css'
import 'animate.css'
export const AboutUs = () => {
  return (
    <div className='about-us-bg'>
        {/* Information Section*/}
        <h3 className='text-center fs-2 header-color fw-bold'>About Us</h3>
        <div className='d-flex justify-content-center align-items-center gap-4 mt-2 animate__animated animate__tada animate__bounceInDown'>
            <div className='col-3'>
                <img className='col-12' src={Logo}/>
            </div>
            <div className='col-7 text-light' style={{textAlign: "justify"}}>
                <p>
                    Company Name: Future Film Production <br/>
                    Location: Yangon, Myanmar <br/>
                    Type of Business: Online Movie Booking System
                </p>
                <p>
                Future Film Production is a leading online movie booking system based in Yangon, Myanmar. Established in 2010, the company has grown to become one of the most popular and reliable movie booking platforms in the country, with a wide network of branches in different cities.
                </p>
                <p>
                Our platform provides a user-friendly interface that allows customers to book movie tickets online, choose their preferred seats, and pay securely using a range of payment options. We offer a wide selection of movies from different genres, including action, comedy, drama, horror, and more, to cater to the diverse interests of our customers.
                </p>
            </div>
        </div>
        {/* Available Service*/}
        <div className='mt-2'>
            <h3 className='text-center fs-2 header-color'>Your Best Experience, <br/> <span style={{color: "#FCF000"}}>Enjoy With Us</span></h3>
            <CardGroup className='p-3'>
                <Card style={{ backgroundColor: "#00edeb"}}>
                    <Card.Body>
                        <Card.Title>Basic Movie Ticket</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>Allow customers to book standard movie tickets for any available showtime.</li>
                                <li>Starting from 5,000 Kyats per ticket</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{backgroundColor: "#fcf000"}}>
                    <Card.Body>
                        <Card.Title>VIP Seating</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>Premium seating with leather recliners and extra legroom.</li>
                                <li>Starting from 12,000 Kyats per ticket</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ backgroundColor: "#00edeb"}}>
                    <Card.Body>
                        <Card.Title>Private Movie Screening</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>Book an entire cinema hall for a private movie screening</li>
                                <li>Starting from 500,000 Kyats including refreshments and snacks for up to 50 guests</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
        {/* Customer Review */}
        <div>
            <h3 className='text-center fs-2 header-color'>Our Customers Review</h3>
            <CardGroup className='p-3'>
                <Card className='bg-secondary text-light'>
                    <Card.Img style={{width: "15rem", height: "15rem"}} className='rounded-circle mx-auto' variant='top' src={Sarah}/>
                    <Card.Body>
                        <Card.Title className='text-center'>Sarah T</Card.Title>
                        <Card.Text>
                        "I've been using Future Film Production for all my movie bookings, and I must say, it's the most convenient and reliable platform out there. The user interface is so easy to navigate, and I love that I can choose my seats and pay online. Plus, the customer support team is always quick to respond and resolve any issues. Highly recommend!"
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='bg-secondary text-light'>
                    <Card.Img style={{width: "15rem", height: "15rem"}} className='rounded-circle mx-auto' variant='top' src={John}/>
                    <Card.Body>
                        <Card.Title className='text-center'>John L</Card.Title>
                        <Card.Text>
                        I recently booked a private movie screening for my daughter's birthday party through Future Film Production, and it was an absolute hit! The cinema hall was spacious, the screen and sound quality were excellent, and the refreshments were top-notch. The staff was so accommodating and made sure everything was perfect. Thank you for making my daughter's special day even more memorable!"
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='bg-secondary text-light'>
                    <Card.Img style={{width: "15rem", height: "15rem"}} className='rounded-circle mx-auto' variant='top' src={Maya}/>
                    <Card.Body>
                        <Card.Title className='text-center'>Maya S</Card.Title>
                        <Card.Text>
                        "I used the VIP Seating plan for a recent movie, and I must say, it was worth every penny. The leather recliners were so comfortable, and the extra legroom was a game-changer. It made the movie-watching experience so much more enjoyable. I highly recommend upgrading to the VIP Seating if you want to take your movie experience to the next level!"
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    </div>
  )
}
