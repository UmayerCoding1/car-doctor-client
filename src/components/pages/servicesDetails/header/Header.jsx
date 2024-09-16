import React from 'react';
const Header = () => {
    return (
        
         <div className='relative mb-10'>
            <div className='lg:h-[40vh] lg:mb-8 w-full  relative'>
            <img className='lg:w-full h-40 lg:h-full' src="https://i.postimg.cc/wTGR83yY/checkout.png" alt="" />

               <div className='absolute w-full h-40 lg:h-full top-0 bg-gradient-to-r rounded-lg from-[#000] to-[rgba(21,21,21,0)] flex items-center'>
                   <h2 className="text-4xl text-white font-bold ml-6 lg:ml-20">Service Details</h2>
              </div>
         </div>

         <div>
             <div className=" h-10 text-center bg-orange-500 text-white font-bold p-2 hover:bg-orange-500 absolute top-[87%] left-1/4 lg:left-[40%] lg:top-[90%]">Home/Service Details</div>
         </div>
        </div>
    );
};

export default Header;