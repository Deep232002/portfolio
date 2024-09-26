import React from "react";
import image from '../assets/myimage.jpg';
import Header from "./Header";

function Landing() {
  return (
    <div className="w-full  flex flex-col lg:flex-row items-center sm:justify-center px-4 lg:px-10">
      <Header />
      
      {/* Text Section */}
      <div className="w-[100%] flex flex-col-reverse lg:flex-row items-center sm:justify-between px-10">
      <div className="w-full lg:w-[60%] flex flex-col py-5 lg:py-10 px-5 lg:px-10 text-center lg:text-left">
        <div className="text-xl lg:text-2xl mb-2 lg:mb-4">I'm</div>
        <div className="text-4xl lg:text-6xl font-extralight mb-4 lg:mb-8"> Deepak</div>
        <div className="text-xl lg:text-2xl mb-2 lg:mb-4 text-[#FF9800]">Full Stack Developer</div>
        <div className="text-base lg:text-lg leading-relaxed">
        I’m a passionate Full-Stack Developer with a strong foundation in both front-end and back-end technologies. I specialize in building dynamic, responsive web applications using modern frameworks like React, Node.js, Express, and MongoDB. 
        </div>
      </div>

      <div className="flex justify-center items-center mt-8 lg:mt-0 w-[300px] h-[300px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden border border-gray-300"> {/* You can change the border color as needed */}
  <img 
    src={image} 
    alt="Profile" 
    className="w-full h-full object-cover"
  />
</div>

      </div>
    </div>
  );
}

export default Landing;
