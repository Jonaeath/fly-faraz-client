import React from 'react';

const DisplayService = ({service}) => {

    const {title,img,price,description} = service;

    return (
        <div>
            <div className="card card-compact w-96 bg-sky-300 shadow-xl">
                <figure className='h-100 rounded-lg'><img src={img} alt=""/></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h2>Cost:{price}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Booking Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayService;