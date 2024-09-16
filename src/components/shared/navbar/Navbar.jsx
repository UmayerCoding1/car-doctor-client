import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../../assets/logo.svg';
import { AuthContext } from '../../provider/AuthProvider';


const Navbar = () => {
   const {user,logout} = useContext(AuthContext);
    const navItems = <>
      <li className='mr-3'><NavLink to={'/'}>Home</NavLink></li>
      <li className='mr-3'><NavLink to={'/about'}>About</NavLink></li>
      <li className='mr-3'><NavLink to={'/services'}>Services</NavLink></li>
      {user?.email && <li className='mr-3'><NavLink to={'/bookings'}>My Bookings</NavLink></li>}
      <li className='mr-3'><NavLink to={'/blog'}>Blog</NavLink></li>
      <li className='mr-3'><NavLink to={'/contact'}>Contact</NavLink></li>
    </>

   const handleSignOut = () => {
          logout()
          .then(res => res.json())
          .catch(error => {
            console.log(error);
            
          })
   }



    return (
        <div className="navbar bg-white h-28 mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         {navItems}
      </ul>
    </div>

   <Link to={'/'}>
    <img src={logo} alt="" />
   </Link>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
   {
    user?.email ? <>
    <p className='text-xs pr-1'>{user.email.slice(0,6)}..</p>
     <Link onClick={handleSignOut}><button className='btn btn-outline text-red-500 '>Sign Out</button></Link>
     
    </> :
    <>
    <Link to={'/login'}><button className='btn btn-outline mr-3 text-cyan-500 font-bold hover:bg-cyan-500 hover:text-white'>Login</button></Link>
    <Link to={'/register'}><button className='btn btn-outline  text-orange-500 font-bold hover:bg-orange-400 hover:text-white'>Create Account</button></Link>
    </>
    
   }

    
  </div>
</div>
    );
};

export default Navbar;