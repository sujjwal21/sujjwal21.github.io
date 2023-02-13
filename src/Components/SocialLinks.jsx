import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin color="#020242" size={30} /> 
        </>
      ),
      href: "https://www.linkedin.com/in/ujjwal-s-3209b0191/",
      style: "rounded-t-md",
    },
    {
      id: 2,
      child: (
        <>
           <FaGithub color="#000003" size={30} />
        </>
      ),
      href: "https://github.com/sujjwal21",
    },
    {
      id: 3,
      child: (
        <>
           <BsWhatsapp color="#1ad509" size={30} />
        </>
      ),
      href: "https://wa.me/+916393169967",
    },
    {
      id: 4,
      child: (
        <>
          <HiOutlineMail color="#4b0303" size={30} />
        </>
      ),
      href: "mailto:sujjwal85@gmail.com",
      style: "rounded-b-md",
    },
    // {
    //   id: 4,
    //   child: (
    //     <>
    //       <BsFillPersonLinesFill color="#043516" size={30} />
    //     </>
    //   ),
    //   href: "/Ujjwal-Singh-Resume.pdf",
    //   style: "rounded-b-md",
    //   download:"/Ujjwal-Singh-Resume.pdf"
      
    // },
  ];

  return (
    <div className="hidden md:flex lg:flex flex-col top-[60%] right-0 fixed z-50"
    // data-aos="fade-right" data-aos-duration="2500"
    >
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center gap-10 h-14 px-4 mr-[20px] hover:scale-110  hover:rounded-md duration-1000 bg-gradient-to-r from-[#3e3ab4]  to-[#3d3c6d]" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;