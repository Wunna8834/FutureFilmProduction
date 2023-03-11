import React from 'react'
import { TheaterCard } from '../components/TheaterCard'
import { theater_list } from '../data/theaters'
import '../css/TheaterList.css'
export const TheaterList = () => {
  return (
    <div className='seat-banner p-5'>
        <h2 className='text-center seat-header'>Find your nearest theater location</h2>
        <div className='d-flex flex-lg-row flex-md-row flex-column justify-content-center align-items-center gap-3 mt-4'>
            {theater_list.map(list => 
                <div key={list.id}>
                    <TheaterCard 
                        theaterName={list.theaterName}
                        theaterLocation={list.location}
                        contactInfo={list.phone}
                    />
                </div>    
            )}
        </div>
    </div>
  )
}
