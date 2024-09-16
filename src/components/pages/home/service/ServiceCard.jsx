import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id,title,img,price} = service;
    return (
        <div className="card bg-base-100 w-full lg:w-80 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={img}
      alt=""
      className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{title}</h2>
    
    <div className="card-actions items-center">
    <p className='text-orange-500 font-bold'>Price: ${price}</p>
      <Link to={`/serviceDetail/${_id}`}><button><FaArrowRightLong className='text-orange-500'/></button></Link>
    </div>

   
  </div>
</div>
    );
};

export default ServiceCard;