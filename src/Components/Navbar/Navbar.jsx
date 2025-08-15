import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";

// import Typewriter from "typewriter-effect";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [hamberger, setHamberger] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "projects",
    },
    {
      id: 6,
      link: "gitHub",
    },
    {
      id: 7,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center  w-screen h-20 px-0 bg-[#0e0c49] text-white fixed z-50 border-b border-gray-100">
      <div data-aos="flip-left" data-aos-duration="500">
        <h1 className="font-signature text-5xl ml-2 hover:scale-105 duration-500 ">
          <img src="/name.gif" alt="name" width="200px" />
        </h1>
      </div>
      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 capitalize font-medium  hover:scale-105 duration-200 cursor-pointer border-[#0e0c49] hover:border-blue-600 border-b-2"
          >
            <Link to={link} smooth offset={-80} duration={1000}>
              {link}
            </Link>
          </li>
        ))}
        <li className="px-4 capitalize font-medium  hover:scale-105 duration-200 cursor-pointer border-[#0e0c49] hover:border-blue-600 border-b-2">
          <a
            href={"/fw21_1014-Ujjwal-Singh-Resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            download
            onClick={() => window.open("/fw21_1014-Ujjwal-Singh-Resume.pdf")}
          >
            Resume
          </a>
        </li>
      </ul>
      <div
        onClick={() => setHamberger(!hamberger)}
        className="cursor-pointer pr-4 z-10  md:hidden"
      >
        {hamberger ? <FaTimes /> : <FaBars />}
      </div>
      {hamberger && (
        <ul className="flex flex-col justify-center items-center absolute w-full top-0 left-0 h-screen bg-gradient-to-r from-[#0e0c49]  to-[#0e0a7a]">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 capitalize py-6 text-4xl cursor-pointer hover:scale-105 duration-200"
            >
              <Link
                to={link}
                smooth
                offset={-80}
                duration={1000}
                onClick={() => setHamberger(!hamberger)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
