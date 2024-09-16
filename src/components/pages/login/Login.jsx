import React, { useContext } from 'react';
import loginPic from './../../../assets/images/login/login.svg';
import googlepic from './../../../assets/images/login/google.png';
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';
const Login = () => {

    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;        
        const email = form.email.value;
        const password = form.password.value;
        

        signInUser(email,password)
        .then(result => {
            console.log(result.user);
            const user = {email};
            
            axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
            .then(res => {
                console.log(res.data);
                if(res.data.success){
                    navigate(location?.state ? location?.state : '/')
                }
                
            })
            // form.reset();
        })
        .catch(error => {
            console.log(error.code);
            
        })
    }
    return (
        <div className='my-10 p-2 lg:flex'>
            <div className='w--[90%] lg:w-1/2'>
                <img className=' lg:w-[65%] lg:ml-24' src={loginPic} alt="" />
            </div>
            <div className=' p-10 border rounded-lg shadow-lg lg:w-1/2  '>
                 <form onSubmit={handleLogin}>
                        <h2 className='text-3xl font-bold text-center'>Login</h2>
                    <div className='mt-5'>
                        <label htmlFor="email" className='text-sm font-bold pl-1'>Email</label><br />
                        <input className='border  outline-none rounded-lg  w-full h-10 pl-3 mt-1' type="email" name="email"  placeholder='Your email'/>
                    </div>

                    <div className='mt-5'>
                        <label htmlFor="password" className='text-sm font-bold pl-1'>Confirm Password</label><br />
                        <input className='border  outline-none rounded-lg  w-full h-10 pl-3 mt-1' type="password" name="password"  placeholder='Your password'/>
                    </div>

                    <div>
                        <input className='btn bg-[#FF3811] hover:bg-[#FF3811] text-white w-full my-7' type="submit" value="Sign In" />
                        <p className='text-center'>Or Sign In with</p>
                    </div>

                    <div className='flex items-center justify-center my-5'>
                        <button className=' mr-7'>
                            <img className='w-8' src={googlepic} alt="" />
                        </button>
                        <button className=' mr-7 text-2xl text-blue-400'><FaLinkedinIn/></button>
                        <button className=' mr-7 text-2xl text-blue-600'><FaFacebook/></button>
                    </div>
                      <p className='font-bold text-center'>Have an account? <Link to={'/register'} className='text-orange-500'>Sign In</Link></p>
                 </form>
            </div>
        </div>
    );
};

export default Login;