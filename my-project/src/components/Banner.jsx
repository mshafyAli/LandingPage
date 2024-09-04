
// without Slider code
// import React from 'react'
// import banner from "../assets/banner.png"
// import bannerIcon from "../assets/bannerIcon.png";
// import { BsDot } from "react-icons/bs";


// const Banner = () => {
//   return (
//     <div>
//         <div className='flex items-center gap-2 relative'>
//         {/* left side */}
//         <div className=''>
//             <img src={banner} className='' alt="" />
//         </div>
        

//         <div className='absolute left-[55rem] '>
//             <div className='w-24 h-24 rounded-full flex items-center justify-center bg-[#d3d3d3] absolute right-24 -top-2'><img src={bannerIcon} className='' alt="" /></div>
//             <h1 className='text-[#3B66B0] text-5xl font-bold mb-2'>Revolutionizing</h1>
//             <h1 className='text-5xl font-bold mb-2'>Orthodontic</h1>
//             <h1 className=' text-5xl font-bold mb-6'><span className='text-[#3B66B0]'>and</span> Implement Design</h1>
//             <p className='w-[70%] mb-8 font-semibold'>Join our community of professionals enhancing dental care
//             through innovative technology</p>


//             <div className='flex items-center gap-4'>
//                 <button className='w-[200px] h-[50px] bg-[#3B66B0] rounded-md text-white '>Explore Software</button>
//                 <button className='w-[200px] h-[50px] bg-[white] rounded-md text-[#3B66B0] border border-[#3B66B0]'>Join Community</button>

//             </div>
//         </div>
      
//     </div>
//         <div className='flex justify-center'>
//         <BsDot size={30} color='#3B66B0' />
//         <BsDot size={30} color='#3B66B0' />
//         <BsDot size={30} color='#3B66B0' />
//         </div>
//     </div>
    
//   )
// }

// export default Banner



// with slider code

import React from 'react';
import banner1 from "../assets/banner.png";
import banner2 from "../assets/banner1.jpg";
import banner3 from "../assets/banner2.jpg";
import bannerIcon from "../assets/bannerIcon.png";
import { BsDot } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: (i) => (
      <div className="text-[#3B66B0]">
        <BsDot size={30} />
      </div>
    ),
  };

  return (
    <div className="relative">
      {/* Slider Section */}
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <img src={banner1} alt="Banner 1" className="w-full h-[700px] object-cover" />
        </div>

        {/* Slide 2 */}
        <div>
          <img src={banner2} alt="Banner 2" className="w-full h-[700px] object-cover" />
        </div>

        {/* Slide 3 */}
        <div>
          <img src={banner3} alt="Banner 3" className="w-full h-[700px] object-cover" />
        </div>
      </Slider>

      {/* Fixed Text Section */}
      <div className="absolute left-[55rem] top-1/4">
        <div className="w-24 h-24 rounded-full flex items-center justify-center bg-[#d3d3d3] absolute right-24 -top-2">
          <img src={bannerIcon} alt="Banner Icon" />
        </div>
        <h1 className="text-[#3B66B0] text-5xl font-bold mb-2">Revolutionizing</h1>
        <h1 className="text-5xl font-bold mb-2">Orthodontic</h1>
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-[#3B66B0]">and</span> Implement Design
        </h1>
        <p className="w-[70%] mb-8 font-semibold">
          Join our community of professionals enhancing dental care through innovative technology.
        </p>
        <div className="flex items-center gap-4">
          <button className="w-[200px] h-[50px] bg-[#3B66B0] rounded-md text-white">Explore Software</button>
          <button className="w-[200px] h-[50px] bg-white rounded-md text-[#3B66B0] border border-[#3B66B0]">Join Community</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;


