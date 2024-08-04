import React from 'react';
import hands from '../Assets/vedioBike.mp4'; // Import the video file
import bikeImage from '../Assets/orengeredBike.jpg'; // Import the background image

const Slider = () => {
    return (
        <div
            className="flex flex-col md:flex-row justify-between items-center p-10 bg-cover bg-center border-8 border-white h-[70vh] relative text-white rounded-[50px] shadow-lg"
            style={{ backgroundImage: `url(${bikeImage})` }}
        >
            <div className="flex-1 max-w-md p-5 relative">
                <div className="mb-5">
                    <video className="w-[39%] rounded-lg shadow-lg" src={hands} autoPlay muted loop></video>
                </div>
                <p className="text-2xl font-bold my-2 text-white">BuY</p>
                <p className="text-2.5xl text-[#ff5722] font-bold my-2">Your DreaM Bik</p>
            </div>
            <div className="flex-1 flex justify-center items-center p-5">
                {/* The right section can remain empty or include an image if needed */}
            </div>
        </div>
    );
};

export default Slider;
