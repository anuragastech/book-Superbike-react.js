import React from 'react';
import "./slider.css"
import bike from "../Assets/orengeredBike.jpg"

import hands from  "../Assets/orengeredBike.jpg"

import midImage from "../Assets/orengeredBike.jpg"

const Slider = () => {
    return (
        <div className='slider'>
            <div className='slider-left'>
<h2>NEW ARRIVALS ONLY</h2>
<div>
    <div className='hand-hand-icon'>
<p>new</p>
<img src={hands} alt=''/>
    </div>
    <p>collections</p>
    <p>for everyone</p>
</div>

<div className='slidrt-latest-btn'>
    <div>Latest collection</div>
    <img src={midImage} alt=''/>

</div>
            </div>
            <div className='slider-right'>
            <img src={bike} alt=''/>


</div>
        </div>
    );
}

export default Slider;
