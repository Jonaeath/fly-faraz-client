import React from 'react';
import imge from '../../../Image/Biman-06.jpg'

const Banner = () => {
    return (
        <div className='flex p-5 rounded-md'>
            <div className="hero min-h-screen" style={{ backgroundImage:`url(${imge})`,borderRadius:'1.5rem' }}>
                <div className="hero-overlay rounded-3xl bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold text-primary-content" >Enjoy the best moments of life.</h1>
                        <p className="mb-5 text-primary-content">DISCOVER THE NATURE NEW TRAVEL</p>
                        <button className="btn btn-primary">FOR BOOKING</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;