import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services,setServices]= useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

    console.log(services);
    
    return (
        <div>
            <div className='text-center  '> 
                <h3 className='font-bold text-orange-500'>Service</h3>
                <h2 className='text-3xl font-bold'> Our Service Area</h2>
                <p className='py-4'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {services.map(service => <ServiceCard key={service._id} service={service}/>)}
            </div>
            <div className='my-6 text-center'>
               <button className='btn btn-outline text-orange-500 font-bold'>More Products</button>
            </div>
            
        </div>


    );
};

export default Service;