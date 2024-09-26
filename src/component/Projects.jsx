import React from "react";
import Movieimage from "../assets/movie.jpg";
import book from '../assets/book.jpg'
import cryptoImage from '../assets/crypto.png'
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// Array of projects
const projects = [
  {
    name: "Book Library",
    description: "Our easy-to-use search feature allows you to quickly find books by title, ensuring that your favorite reads are just a click away. Additionally, we’ve made browsing more enjoyable by categorizing our entire collection into genres, so you can effortlessly explore books based on your interests.",
    image: book,
    githubLink: "https://github.com/Deep232002/-_-_booklibrary.git",
    liveLink: "https://booklibrary-steel.vercel.app/",
  },
  {
    name: "Crypto Hub",
    description: "your go-to platform for real-time cryptocurrency data! Stay updated with the latest market trends and track the current value of all major cryptocurrencies, including Bitcoin, Ethereum, and many others.",
    image: cryptoImage,
    githubLink: "https://github.com/Deep232002/crypto-hub.git",
    liveLink: "https://crypto-hub-neon.vercel.app/",
  },
  {
    name: "Movie App",
    description: "With a seamless, user-friendly interface, you can easily browse, search, and categorize movies based on genre, release year, or popularity. Whether you’re in the mood for a movie marathon or just a quick watch, [Your App Name] offers high-quality streaming on all your devices.",
    image: Movieimage,
    githubLink: "https://github.com/Deep232002/movieapp.git",
    liveLink: "https://movieapp-vlne.vercel.app/",
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <div className="container w-[90vw] lg:w-[70vw] mx-auto h-fit my-auto mt-7">
      <div className="self-center text-3xl text-[#FF9800] md:text-5xl p-10 text-center font-extralight mb-8">
        Projects
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center gap-10 md:gap-20"
          >
            {/* Image on the left */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full sm:w-[200px] sm:h-[200px] object-cover rounded-lg"
            />

            {/* Text on the right */}
            <div className="p-5 sm:w-[60%]">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                {project.name}
              </h3>
              <p className="text-base md:text-lg mb-4">{project?.description?.length > 230 ? project?.description.slice(0, 230)+'...':project?.description }</p>
              <div className="flex gap-5 mt-2">
                <Link
                  to={project.githubLink}
                  className="text-blue-300 hover:underline"
                >
                  GitHub
                </Link>
                <Link
                  to={project.liveLink}
                  className="flex items-center text-blue-300 hover:underline"
                >
                  Go live &nbsp; <FaArrowUpRightFromSquare />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
