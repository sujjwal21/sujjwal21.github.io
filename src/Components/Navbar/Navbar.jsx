import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll';

// import Typewriter from "typewriter-effect";
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [hamberger, setHamberger] = useState(false)
  const links = [
    {
      id: 1,
      link: "home"
    },
    {
      id: 2,
      link: "about"
    },
    {
      id: 3,
      link: "skills"
    },
    {
      id: 4,
      link: "projects"
    },
      {
      id: 5,
      link: "gitHub"
    },
    {
      id: 6,
      link: "contact"
    },
    

  ]
  return (
    <div className='flex justify-between items-center  w-screen h-20 px-0 bg-black text-white fixed z-50'>
      <div data-aos="flip-left" data-aos-duration="500" >
        <h1 className='font-signature text-5xl ml-2 hover:scale-105 duration-500 '>
          <img src="/name.gif" alt="name" width="200px"/>
        </h1>
      </div>
      <ul className='hidden md:flex '>
        {links.map(({ id, link }) => (<li key={id} className='px-4 capitalize font-medium text-gray-500 hover:scale-105 duration-200 cursor-pointer'>
          <Link to={link} smooth  duration={1000}>{link}</Link>
        </li>
        ))}
        <li className='px-4 capitalize font-medium text-gray-500 hover:scale-105 duration-200 cursor-pointer'><a href="/Ujjwal-Singh-Resume.pdf" target="_blank">Resume</a></li>
      </ul>
      <div onClick={() => setHamberger(!hamberger)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden" >
        {hamberger ? <FaTimes /> : <FaBars />}
      </div>
      {hamberger && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>

          {links.map(({ id, link }) => (<li key={id} className='px-4 capitalize py-6 text-4xl cursor-pointer hover:scale-105 duration-200'>
             <Link to={link} smooth  offset={50} duration={1000}>{link}</Link>
          </li>))}
        </ul>
      )}


    </div>
  )
}

export default Navbar