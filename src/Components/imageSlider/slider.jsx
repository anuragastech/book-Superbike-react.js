import React from 'react';
import './slider.css';
import hands from '../Assets/vedioBike.mp4'; // Import the video file

const Slider = () => {
    return (
        <div className='slider'>
            <div className='slider-left'>
                <div className='hand-hand-icon'>
                    <video src={hands} alt='New Arrival Video' autoPlay muted loop />
                </div>
                <p>BuY</p>
                <p>Your DreaM Bik</p>
            </div>
            <div className='slider-right'>
                {/* The right section can remain empty or include an image if needed */}
            </div>
        </div>
    );
}

export default Slider;
