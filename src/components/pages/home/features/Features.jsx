import React from 'react';
import group from './../../../../assets/icons/group.svg';
import delvery from './../../../../assets/icons/deliveryt.svg';
import person from './../../../../assets/icons/person.svg';
import Wrench from './../../../../assets/icons/Wrench.svg';
import check from './../../../../assets/icons/check.svg';
import { IoMdClock } from "react-icons/io";


const Features = () => {
    return (
        <div>
            <div className='text-center my-8'>
                <p className='font-bold text-orange-500 mt-4'>Core Features</p>
                <h2 className='text-3xl font-bold mt-2 mb-6'>Why Choose Us</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className='my-6 px-4'>
                <div className=' grid grid-cols-2 lg:grid-cols-6 gap-10'>
                   <div className='border p-2 flex flex-col items-center rounded-lg'>
                      <img className='w-1/2' src={group} alt="" />  
                      <p className='font-bold'>Expert Team</p>
                   </div>

                   <div className='border p-2 rounded-lg flex items-center flex-col bg-red-500 text-white '>
                      <button><IoMdClock className='text-5xl ' /></button>
                      <p className='font-bold'>Expert Team</p>
                   </div>

                   <div className='border p-2 flex flex-col items-center rounded-lg'>
                      <img className='w-14' src={person} alt="" />  
                      <p className='font-bold'>24/7 Support</p>
                   </div>

                   <div className='border p-2 flex flex-col items-center rounded-lg'>
                      <img className='w-1/2' src={Wrench} alt="" />  
                      <p className='font-bold'>Best Equipment</p>
                   </div>

                   <div className='border p-2 flex flex-col items-center rounded-lg'>
                      <img className='w-14' src={check} alt="" />  
                      <p className='font-bold'>100% Guranty</p>
                   </div>

                   <div className='border p-2 flex flex-col items-center rounded-lg'>
                      <img className='w-1/2' src={delvery} alt="" />  
                      <p className='font-bold'>Timely Delivery</p>
                   </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Features;