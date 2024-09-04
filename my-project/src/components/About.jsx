import React from "react";
import key from "../assets/key.png";
import vedio from "../assets/vedio.png"
import laptop from "../assets/laptop.png"
import laptopContent from "../assets/laptopContent.png"
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"

const About = () => {
  return (
    <div className="w-[95%] mx-auto mt-12 mb-24">
      <div className="flex items-center justify-evenly ">

        {/* left side */}
        <div className="w-[40%]">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold text-4xl">
              GuideMia <span className="text-[#3B66B0]">gTok</span>
            </h1>
            <img src={key} alt="key" className="w-[28px] h-[35px]" />
          </div>

          <p className="pt-10">
            GuideMia gTok is a peer-to-peer communication software. It can send
            texts and files, and make audio/video calls as well. You and your
            contact can see each other’s screen through desktop sharing, and
            discuss design cases with audio and video calls. You can also
            sharing your life moments with file sharing. With peer-to-peer
            technology and end-to-end encryption, gTok does not use any server,
            and your data is never visible to anyone other than your recipients,
            not even the government. It can be installed as a standalone system,
            or as part of GuideMia implant or orthodontic software systems.
          </p>

          <div className="flex items-center gap-4 mt-10">
            <div
              className="bg-[#3B66B0] w-[210px] h-[60px] rounded-md flex items-center justify-center text-white text-xl"
            >
              Read More
            </div>
            <div>
            <div
              className="bg-[#3B66B0] w-[210px] h-[60px] rounded-md flex items-center justify-center text-white text-xl gap-2"
            >
             <h2>
             Watch Video
             </h2>
             <img src={vedio} className="w-[32px] h-[32px]" alt="" />
            </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
            <div className="relative">
                <img src={laptop} className="w-[690px] h-[385px]" alt="" />
                <img src={laptopContent} alt="aptopContent" className="w-[530px] h-[330px] absolute top-6 left-[5rem]" />
                <img src={pic1} alt="" className="w-[200px] h-[230px] absolute -bottom-20" />
                <img src={pic2} alt="" className="w-[190px] h-[140px] absolute -bottom-16 left-[7rem]" />
            </div>
      </div>
    </div>
  );
};

export default About;
