import React from "react";
import image from "../assets/myimage.jpg";
import resume from "../assets/DeepakKumarResume (5).pdf"; // Adjust the path to your resume
import { FaRegCalendarDays, FaPhoneSlash } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function About() {
  return (
    <div className="container w-[90vw] md:w-[80vw] mx-auto  sm:mb-10">
      {/* Title */}
      <div className="text-3xl md:text-5xl p-5 md:p-10 text-center font-extralight text-[#FF9800]">
        About <span className="text-[#E2E2B6]">Me</span>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-16 lg:gap-20">
        
        {/* Image Section */}
        <div className="w-[200px] md:w-[350px] h-[200px] md:h-[350px] rounded-lg overflow-hidden">
          <img src={image} alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[50%] text-center lg:text-left">
          <div className="text-lg md:text-xl mb-3">HELLO EVERYONE, I'M</div>
          <div className="text-3xl md:text-4xl font-semibold mb-5">DEEPAK</div>
          <div className="text-lg md:text-xl font-bold mb-3">FULL STACK DEVELOPER</div>
          <div className="text-sm md:text-base mb-5 leading-relaxed">
          I’m a passionate Full-Stack Developer with a strong foundation in both front-end and back-end technologies. I specialize in building dynamic, responsive web applications using modern frameworks like React, Node.js, Express, and MongoDB. As a fresher, I’m eager to learn and grow in a collaborative environment, applying my skills in JavaScript, HTML/CSS, APIs, and database management to create efficient, scalable solutions.
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3 items-center lg:items-start">
            <div className="flex gap-2 items-center text-sm md:text-base">
              <FaRegCalendarDays />
              <p>
                23<sup>rd</sup>, December 2003
              </p>
            </div>

            <div className="flex gap-2 items-center text-sm md:text-base">
              <FaPhoneSlash />
              <p>+91 &nbsp; 1422661262</p>
            </div>

            <div className="flex gap-2 items-center text-sm md:text-base">
              <MdEmail />
              <p>krdeep2002@gmail.com</p>
            </div>
          </div>

          {/* Download Resume Button */}
          <a 
            href={resume} 
            download 
            className="mt-5 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
