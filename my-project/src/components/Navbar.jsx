import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className='w-[95%] mx-auto h-24 py-1' > 
      <div className='flex items-center justify-between'>
            {/* loge here */}
            <img src={logo} className='w-[350px] h-[80px]'  alt="" />
        <div>

        </div>

            {/* nav Links  */}
        <div className='flex items-center gap-8'>
            <h1 className='text-xl font-semibold hover:underline hover:text-[#3B66B0] cursor-pointer'>Home</h1>
            <h1 className='text-xl font-semibold'>About</h1>
            <h1 className='text-xl font-semibold'>Software</h1>
            <h1 className='text-xl font-semibold'>Services</h1>
            <h1 className='text-xl font-semibold'>MemberShip</h1>
            <h1 className='text-xl font-semibold'>Freelance</h1>



        </div>

        <div className='flex items-center gap-4'>
            <button className='w-[100px] h-[30px] bg-[#3B66B0] uppercase text-white font-bold rounded-sm'>Login</button>
            <button className='w-[100px] h-[30px] bg-[#3B66B0] uppercase text-white font-bold rounded-sm'>SignUp</button>

        </div>
      </div>
    </div>
  )
}

export default Navbar
