import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const DisplayService = ({ service }) => {
  const { _id, title, img, price, description } = service;

  return (
    <div>
      <div className="card card-compact w-96 bg-sky-300 shadow-xl">
        {/* <figure className='h-100 rounded-lg'><img src={img} alt=""/></figure> */}
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="" />
          </PhotoView>
        </PhotoProvider>

        <div className="card-body text-black">
          <h2 className="card-title ">{title}</h2>
          <h2>Cost:{price}</h2>
          <p className="">{description}</p>
          <div className="card-actions justify-center">
            <Link to={`/booking/${_id}`}>
              <button className="btn btn-primary">Booking Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayService;
