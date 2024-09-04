import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { FaPhone } from "react-icons/fa6";



const Head = () => {
  return (
    <div className='bg-[#3B66B0] w-full h-12 '>
        <div className='w-[90%] mx-auto py-3' >
       <div className='flex items-center justify-between'>
       <div className='flex items-center gap-6'>
                <div className='flex gap-2 items-center'>
                    <FaPhone color='white' />

                    <h1 className='text-white font-bold'>+1(657) 529-829</h1>
                </div>
                <h1 className='text-white font-bold'>info@guidemia.com</h1>


        </div>

        <div className='flex gap-2 items-center'>
            <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center'><FaFacebookF color='#3B66B0' size={15}  /></div>
            <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center'><FaInstagramSquare color='#3B66B0' size={15}/></div>
            <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center'><FaTwitter color='#3B66B0' size={15}/></div>
            <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center'><FaLinkedin color='#3B66B0' size={15}/></div>
        </div>

       </div>
        </div>
    </div>
  )
}

export default Head
