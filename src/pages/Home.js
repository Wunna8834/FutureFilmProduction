import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { MovieCard } from '../components/MovieCard'
import '../css/Home.css'
import { latest_movie } from '../data/latestMovie'
import 'animate.css'
export const Home = () => {
    const [showText, setShowText] = useState(false);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowText(true);
      }, 1000);
  
      return () => clearTimeout(timeout);
    }, []);
    const headerClass = `banner-header fs-1 fw-semibold ${showText ? "animate-fade-in" : ""}`;
    const textClass = `text-light col-6 ${showText ? "animate-slide-in" : ""}`;
  return (
    <div>
        <div className='banner'>
            <div className='px-4 pt-5 pb-2'>
                <h2 className={headerClass}>Experience the magic of cinema with <br/><span className='banner-header-highlight'>Future Film</span></h2>
                <p className="col-sm-12 col-lg-6 text-light">Reserve your favorite films. Enjoy the ultimate movie-going experience without any hassles. You can find the perfect showtime that fits your schedule with a large selection of movies and theaters. Prepare to sit back, relax, and take in the show. Purchase your tickets right away.</p>
                <LinkContainer to="/movie-list">
                    <Button variant="success" size='lg'>Book Now</Button>
                </LinkContainer>
            </div>
        </div>
        {/*Latest movie section */}
        <div className='latest-movie animate__animated animate__pulse'>
            <h2 className='text-center banner-header'>Latest Movie Information</h2>
            <div className='d-flex flex-lg-row flex-md-row flex-column col-12'>
                {latest_movie.filter(movie => movie.category === "latest").map(movie => 
                    <div className='mt-3' key={movie.id}>
                        <MovieCard className="card" 
                            imgSrc={movie.moviePhoto}
                            title={movie.movieName}
                            duration={movie.movieDuration}
                            rating={movie.movieRating}
                            theaterName={movie.theaterName}
                            description={movie.description}
                            id={movie.id}
                        />
                    
                    </div>    
                )}
            </div>
        </div>
        {/*Explore Nearest Theater Location */}
        <div className='d-flex flex-column justify-content-center align-items-center explore-section py-3'>
            <h3 className='banner-header'>Explore Nearest Theater Location</h3>
            <p className='text-light'>Browse and find the most suitable location for you</p>
            <LinkContainer to='/theater-list'>
                <Button variant='danger'>Explore Now</Button>
            </LinkContainer>
        </div>
    </div>
  )
}
