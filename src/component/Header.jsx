import React from 'react';
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

function Header() {
  return (
    <div className="flex flex-row lg:flex-col w-full lg:w-fit justify-between items-center lg:items-start h-fit lg:h-screen p-4 md:p-6 lg:p-8 xl:p-10">
      {/* Logo Section */}
      <div className="text-2xl p-2 rounded-full border-2 border-[#FF9800] text-[#FF9800]">
        DK
      </div>

      {/* Social Icons Section */}
      <div className="text-xl flex flex-row lg:flex-col justify-center items-center gap-3">
      <a href="https://www.instagram.com/i.t.s.d.e.e.p_07/" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="hover:text-[#FF9800] transform hover:scale-125 transition duration-300" />
    </a>
    <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
      <FaFacebook className="hover:text-[#FF9800] transform hover:scale-125 transition duration-300" />
    </a>
    <a href="https://github.com/Deep232002" target="_blank" rel="noopener noreferrer">
      <FaGithub className="hover:text-[#FF9800] transform hover:scale-125 transition duration-300" />
    </a>
      </div>
    </div>
  );
}

export default Header;
