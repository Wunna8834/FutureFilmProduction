import React from 'react'
import { MovieCard } from '../components/MovieCard'
import { latest_movie } from '../data/latestMovie'
import '../css/MovieList.css'
export const MovieLIst = () => {
  return (
    <div className='col-12 mx-auto movie-page-bg'>
        <div className='mx-auto col-lg-10 col-sm-12 pt-3'>
            <h3 className='title-color'>Now showing in The King's Heart</h3>
            <div className='d-flex flex-lg-row flex-column col-12 mt-3'>
                {latest_movie.filter(item => item.category === "King").map(item => 
                    <div key={item.id} className='ps-3 ps-lg-0'>
                        <MovieCard 
                            imgSrc={item.moviePhoto}
                            title={item.movieName}
                            duration={item.movieDuration}
                            rating={item.movieRating}
                            theaterName={item.theaterName}
                            description={item.description}
                            id={item.id}
                        />
                    </div>    
                )}
            </div>
        </div>
        <div className='mt-3 mx-auto col-10'>
            <h3 className='title-color'>Now showing in The Queen's Tear</h3>
            <div className='d-flex flex-lg-row flex-column col-12 mt-3'>
                {latest_movie.filter(item => item.category === "Queen").map(item => 
                    <div key={item.id} className=''>
                        <MovieCard 
                            imgSrc={item.moviePhoto}
                            title={item.movieName}
                            duration={item.movieDuration}
                            rating={item.movieRating}
                            theaterName={item.theaterName}
                            description={item.description}
                            id={item.id}
                        />
                    </div>    
                )}
            </div>
        </div>
        <div className='mt-3 mx-auto col-10'>
            <h3 className='title-color'>Now showing in The Prince's Love</h3>
            <div className='d-flex flex-lg-row flex-column col-12 mt-3'>
                {latest_movie.filter(item => item.category === "Prince").map(item => 
                    <div key={item.id} className='ps-3 ps-lg-0'>
                        <MovieCard 
                            imgSrc={item.moviePhoto}
                            title={item.movieName}
                            duration={item.movieDuration}
                            rating={item.movieRating}
                            theaterName={item.theaterName}
                            description={item.description}
                            desiredPage="prince"
                            id={item.id}
                        />
                    </div>    
                )}
            </div>
        </div>
    </div>
  )
}
