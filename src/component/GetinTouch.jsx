import React, { useRef, useState } from "react";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { TiLocation } from "react-icons/ti";
import emailjs from "emailjs-com";

function GetInTouch() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_02k4deo', 'template_nnar7ev', form.current, 'AJypbgydEzDXDCjbW') // Replace 'YOUR_USER_ID' with your actual user ID
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset(); // Optional: Reset the form after submission
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen text-white p-8 flex flex-col justify-between">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="self-center text-3xl md:text-5xl p-5 md:p-10 text-center font-extralight mb-8 text-[#FF9800]">
          Get In Touch
        </h1>
      </div>

      {/* Form and Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side - Info */}
        <div className="flex flex-col justify-center">
          <div className="text-3xl md:text-4xl font-bold mb-5 bg-blue-500 text-transparent bg-clip-text">
            Let's Talk
          </div>

          <p className="text-lg md:text-xl mb-6">
            I'm currently available to take on new projects, so feel free to send
            a message about anything that you want to work on.
          </p>
          <div className="flex flex-col gap-3">
           
            <div className="flex gap-2 items-center">
              <MdEmail />
              <p>krdeep2002@gmail.com</p>
            </div>
            <div className="flex gap-2 items-center">
              <TiLocation />
              <p>Faridabad, Haryana, India</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 mt-1 bg-[#021526] text-white border border-gray-500 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Enter your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-1 bg-[#021526] text-white border border-gray-500 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Write your message here
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 mt-1 bg-[#021526] text-white border border-gray-500 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Type your message..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className={`px-6 py-3 ${loading ? 'bg-gray-600' : 'bg-blue-600'} text-white rounded-lg hover:bg-blue-500`}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col items-center justify-center mt-10">
  <div className="flex gap-4 text-2xl">
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

    </div>
  );
}

export default GetInTouch;
