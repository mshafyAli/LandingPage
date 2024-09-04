import React from "react";
import key from "../assets/key.png";
import Teeth from "../assets/Teeth.png";
import star from "../assets/star.png";
const Cards = () => {
  return (
    <div className="mt-24">
      <div className="w-[55%] mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8">
          <h1 className="font-semibold text-4xl">
            GuideMia <span className="text-[#3B66B0]">Membership Tiers</span>
          </h1>
          <img src={key} alt="key" className="w-[28px] h-[35px]" />
        </div>
        <p className="text-center font-medium">
          In this case, a 13 year old has a hidden tooth in anterior area. The
          doctors from Fujian Provincial Dental Hospital used GuideMia to
          perform treatment planning, designed the tooth extraction path and
          access opening, and printed the surgical guide for the operation.
        </p>
      </div>

      <div className="w-[95%] mx-auto">
        <div className="flex items-center justify-center gap-10 mt-10">
          <div className="bg-card bg-center w-[300px] h-[400px] relative">
          <div className="absolute top-2 left-8 z-10 py-12">
              <h1 className="text-2xl font-bold px-20">Free <span className="text-[#3B66B0]">Tier</span></h1>
              <div className="flex items-center gap-2 mt-8">
                <img src={star} alt="star" />
                <h2 className="font-semibold text-sm">Cardiovascular Services</h2>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <img src={star} alt="star" />
                <h2 className="font-semibold text-sm">Weight Management</h2>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <img src={star} alt="star" />
                <h2 className="font-semibold text-sm">Dental Services</h2>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <img src={star} alt="star" />
                <h2 className="font-semibold text-sm">Women's Health</h2>
              </div>
              <button className="w-[130px] h-[32px] bg-[white] text-[#3B66B0] rounded-md mx-10 font-bold mt-4">SIGN UP</button>
            </div>
            <img
              src={Teeth}
              className="absolute top-28 left-16 opacity-10"
              alt="teeth"
            />
          </div>
        
          <div className="bg-card bg-center w-[300px] h-[400px] relative">
          <div className="absolute top-2 left-8 z-10 py-12">
              <h1 className="text-2xl font-bold pl-16">Implant <span className="text-[#3B66B0]">Tier</span></h1>
              <div className="flex items-center gap-2 mt-8">
                <img src={star} alt="star" />
                <h2 className="font-semibold text-sm">Cardiovascular Services</h2>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <img src={star} alt="star" />
                <h2 className="font-semibold text-sm">Weight Management</h2>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <img src={star} alt="star" />
                <h2 className="font-semibold text-sm">Dental Services</h2>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <img src={star} alt="star" />
                <h2 className="font-semibold text-sm">Women's Health</h2>
              </div>
              <button className="w-[130px] h-[32px] bg-[white] text-[#3B66B0] rounded-md mx-10 font-bold mt-4">SIGN UP</button>
            </div>
            <img
              src={Teeth}
              className="absolute top-28 left-16 opacity-10"
              alt="teeth"
            />
          </div>

          <div className="bg-card bg-center w-[300px] h-[400px] relative">
          <div className="absolute top-2 left-8 z-10 py-12">
              <h1 className="text-2xl font-bold pl-10">Orthodontic <span className="text-[#3B66B0]">Tier</span></h1>
              <div className="flex items-center gap-2 mt-8">
                <img src={star} alt="star" />
                <h2 className="font-semibold text-sm">Cardiovascular Services</h2>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <img src={star} alt="star" />
                <h2 className="font-semibold text-sm">Weight Management</h2>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <img src={star} alt="star" />
                <h2 className="font-semibold text-sm">Dental Services</h2>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <img src={star} alt="star" />
                <h2 className="font-semibold text-sm">Women's Health</h2>
              </div>
              <button className="w-[130px] h-[32px] bg-[white] text-[#3B66B0] rounded-md mx-10 font-bold mt-4">SIGN UP</button>
            </div>
            <img
              src={Teeth}
              className="absolute top-28 left-16 opacity-10"
              alt="teeth"
            />
          </div>
          <div className="bg-card bg-center w-[300px] h-[400px] relative">
          <div className="absolute top-2 left-8 z-10 py-12">
              <h1 className="text-2xl font-bold px-10">Combination<span className="text-[#3B66B0]">Tier</span></h1>
              <div className="flex items-center gap-2 mt-8">
                <img src={star} alt="star" />
                <h2 className="font-semibold text-sm">Cardiovascular Services</h2>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <img src={star} alt="star" />
                <h2 className="font-semibold text-sm">Weight Management</h2>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <img src={star} alt="star" />
                <h2 className="font-semibold text-sm">Dental Services</h2>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <img src={star} alt="star" />
                <h2 className="font-semibold text-sm">Women's Health</h2>
              </div>
              <button className="w-[130px] h-[32px] bg-[white] text-[#3B66B0] rounded-md mx-10 font-bold mt-4">SIGN UP</button>
            </div>
            <img
              src={Teeth}
              className="absolute top-28 left-16 opacity-10"
              alt="teeth"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
