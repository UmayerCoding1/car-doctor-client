import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from './header/Header';



const ServicesDetails = () => {
    const loadedService = useLoaderData();
    console.log(loadedService);
    const {img,title,price,description,facility,_id} = loadedService;
    
    return (
        <div>
            <Header/>
            <div className='lg:grid grid-cols-3  my-10 pr-5'>
                <div className='lg:col-span-2 '>
                    <img  className='ml-4 rounded-lg' src={img} alt="" />
                    <div className='pl-8'>
                       <h2 className='text-4xl font-bold mb-2'>Unique Car {title}</h2>
                       <p className='text-gray-600 my-2 text-sm'>{description}</p>
                       <div className='lg:grid grid-cols-2 gap-4 my-10'> 
                         {
                            facility.map((f,i) => {
                                return([
                                    <div className='mt-4 bg-gray-200 p-4 rounded-lg border-t-2 border-orange-500' key={i}>
                                       <h1 className='text-2xl font-bold'>{f.name}</h1>
                                       <p>{f.details}</p>
                                    </div>
                                ])
                            })
                         }
                       </div>
                       <p className='text-gray-600 my-2 text-sm'>{description}</p>
                       <div>
                        <h2 className="text-4xl font-bold mb-2 mt-5">3 Simple Steps to Process</h2>
                        <p className='text-gray-600 my-2 text-sm'>{description}</p>
                       </div>
                    </div>
                </div>
                <div>
                  
                    <h2 className='text-5xl font-bold'>Price: ${price}</h2>
                    <Link to={`/booking/${_id}`}><button className='btn bg-[#FF3811] hover:bg-[#FF3811] text-white mt-5 '>Proceed Checkout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;