import React from 'react';
import Logo from '../assets/logo.png';
import { BsInstagram, BsWhatsapp,  } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";


function Navbar() {
  return (
    <>
        <div className='w-full h-20 flex justify-between items-center fixed z-50'>
            <div>
                <img className='h-16 w-52' src={Logo} alt='Logo'/>
            </div>
            <div className='flex gap-10 justify-center text-center text-white mr-20'>
                <h1 className='cursor-pointer hover:bg-yellow-400 hover:text-black py-2 px-4 rounded-2xl font-semibold'>Home</h1>
                <h1 className='cursor-pointer hover:bg-yellow-400 hover:text-black py-2 px-4 rounded-2xl font-semibold'>Flight</h1>
                <h1 className='cursor-pointer hover:bg-yellow-400 hover:text-black py-2 px-4 rounded-2xl font-semibold'>Blog</h1>
                <h1 className='cursor-pointer hover:bg-yellow-400 hover:text-black py-2 px-4 rounded-2xl font-semibold'>Pricing</h1>
                <h1 className='cursor-pointer hover:bg-yellow-400 hover:text-black py-2 px-4 rounded-2xl font-semibold'>Gallery</h1>
            </div>
            <div className='flex justify-center items-center gap-3 mr-5 text-white'>Follow us:
                <BsInstagram />
                <BsInstagram />
                <FaFacebookF />
                <BsWhatsapp />

            </div>
        </div>
    </>
  )
}

export default Navbar