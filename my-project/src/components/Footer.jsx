import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full bg-[#3B66B0] h-[280px] mt-12">
      <div className="w-[95%] mx-auto">
        <div className="flex items-center justify-evenly gap-2">
          <div className="w-[40%] text-white">
            <h1 className="font-bold my-8 text-2xl">About Us</h1>
            <p className="text-sm w-[85%]">
              Digital treatment planning can be extremely time consuming and
              technically challenging. With more than 20 years of experience
              from advisors in Italy, Germany, the US, China, Israel, and Canada
              and an excellent design team, however, we offer treatment planning
              for you.Digital treatment planning can be extremely time consuming
              and technically challenging. With more than 20 years of experience
              from advisors in Italy,{" "}
            </p>
          </div>
          <div className="w-1/4 text-white">
            <h1 className="font-bold my-8 text-2xl">Useful Links</h1>
            <li className="text-base py-1">Home</li>
            <li className="text-base py-1">About</li>
            <li className="text-base py-1">Services</li>
            <li className="text-base py-1">FAQ</li>
          </div>

          <div className="w-1/3 text-white">
            <h1 className="font-bold my-8 text-2xl">Contact Address</h1>
            <div className="flex gap-4 items-center">
              <div className="w-6 h-6 bg-[#49A5DC] transform rotate-45 flex items-center justify-center">
                <FaPhone color="white" size={15} />
              </div>
              <h2>+1‪(657) 529-8298‬, +17143912739</h2>
            </div>
            <div className="flex gap-4 items-center mt-6">
              <div className="w-6 h-6 bg-[#49A5DC] transform rotate-45 flex items-center justify-center mt-2">
               
              </div>
              <h2>info@guidemia.com</h2>
            </div>
            <div className="flex gap-4 items-center mt-6">
              <div className="w-6 h-6 bg-[#49A5DC] transform rotate-45 flex items-center justify-center mt-1">
                <div className="transform -rotate-45">
                  <MdOutlineLocationOn color="white" size={15} />
                </div>
              </div>
              <h2>5030 Katella Ave, Ste 209, Los Alamitos, CA 90720, USA</h2>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
