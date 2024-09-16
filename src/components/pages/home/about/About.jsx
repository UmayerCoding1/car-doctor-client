import React from 'react';
import parson from './../../../../assets/images/about_us/person.jpg';
import parts from './../../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className=''>
            <div className="hero bg-white min-h-screen">
  <div className="hero-content  flex-col lg:flex-row">
   <div className='lg:w-1/2 relative'>
   <img
      src={parson} 
      className=" rounded-lg shadow-2xl w-full" />
      <img className='absolute w-1/2  border-8 rounded-lg border-white right-0 top-1/2 lg:right-[-40px] lg:top-56'  src={parts} alt="" />
   </div>

    <div className=' lg:ml-14 lg:w-1/2'>
    <h2 className='text-2xl font-bold mb-5 text-orange-500 lg:mb-10'>About Us</h2>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      </p>
      <p className='pu-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white   my-6">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;