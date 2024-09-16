import React from 'react';
import team1 from './../../../../assets/images/team/1.jpg';
import team2 from './../../../../assets/images/team/2.jpg';
import team3 from './../../../../assets/images/team/3.jpg';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Team = () => {
    return (
        <div className='my-6'>
            <div className='text-center my-10'>
                <p className='text-orange-500 font-bold'>Team</p>
                <h2 className='text-3xl font-bold'>Meet Our Team</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className='  lg:grid grid-cols-3 gap-7'>
                <div className='  p-5 border rounded-lg m-5 '>
                    <div className=''>
                        <img className='rounded-lg' src={team1} alt="" />
                    </div>

                    <div className='text-center'>
                        <h1 className='text-2xl mt-3 font-bold'>Car Engine Plug</h1>
                        <p className='mt-2 font-bold text-gray-500'>Engine Expert</p>
                        <div className='mt-3'>
                            <button className='mr-3 text-2xl text-blue-600'><FaFacebook/></button>
                            <button className='mr-3 text-2xl '><FaSquareXTwitter/></button>
                            <button className='mr-3 text-2xl text-blue-500'><FaLinkedin/></button>
                            <button className='mr-3 text-2xl text-[#e14371]'><FaInstagram/></button>
                        </div>
                    </div>
                </div>
                <div className='  p-5 rounded-lg border m-5'>
                    <div className=''>
                        <img className='rounded-lg' src={team2} alt="" />
                    </div>
                    <div className='text-center'>
                        <h1 className='text-2xl mt-3 font-bold'>Car Engine Plug</h1>
                        <p className='mt-2 font-bold text-gray-500'>Engine Expert</p>
                        <div className='mt-3'>
                            <button className='mr-3 text-2xl text-blue-600'><FaFacebook/></button>
                            <button className='mr-3 text-2xl '><FaSquareXTwitter/></button>
                            <button className='mr-3 text-2xl text-blue-500'><FaLinkedin/></button>
                            <button className='mr-3 text-2xl text-[#e14371]'><FaInstagram/></button>
                        </div>
                    </div>
                </div>
                <div className='  p-5 border rounded-lg m-5'>
                    <div className=''>
                        <img className='rounded-lg' src={team3} alt="" />
                    </div>

                    <div className='text-center '>
                        <h1 className='text-2xl mt-3 font-bold'>Car Engine Plug</h1>
                        <p className='mt-2 font-bold text-gray-500'>Engine Expert</p>
                        <div className='mt-3'>
                            <button className='mr-3 text-2xl text-blue-600'><FaFacebook/></button>
                            <button className='mr-3 text-2xl '><FaSquareXTwitter/></button>
                            <button className='mr-3 text-2xl text-blue-500'><FaLinkedin/></button>
                            <button className='mr-3 text-2xl text-[#e14371]'><FaInstagram/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;