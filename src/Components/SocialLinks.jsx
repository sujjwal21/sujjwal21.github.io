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
          L <FaLinkedin color="#ffffff" size={30} /> 
        </>
      ),
      href: "https://www.linkedin.com/in/ujjwal-s-3209b0191/",
      style: "bg-[#0077b5]",
    },
    {
      id: 2,
      child: (
        <>
          G <FaGithub color="#ffffff" size={30} />
        </>
      ),
      href: "https://github.com/sujjwal21",
      style:'bg-[#070707]'
    },
    {
      id: 3,
      child: (
        <>
           W <BsWhatsapp color="#ffffff" size={30} />
        </>
      ),
      href: "https://wa.me/+916393169967",
      style:'bg-[#028600]'
    },
    {
      id: 4,
      child: (
        <>
          G <HiOutlineMail color="#ffffff" size={30} />
        </>
      ),
      href: "mailto:sujjwal85@gmail.com",
      style: "bg-[#af0f08]",
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
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
    <ul>
      {links.map(({ id, child, href, style, download }) => (
        <li
          key={id}
          className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-70px]  duration-300  border" +
            " " +
            style
          }
        >
          <a
            href={href}
            className="flex justify-between items-center w-full text-white font-bold"
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
    // <div className="hidden md:flex lg:flex flex-col top-[60%] right-0 fixed z-50"
    // // data-aos="fade-right" data-aos-duration="2500"
    // >
    //   <ul>
    //     {links.map(({ id, child, href, style, download }) => (
    //       <li
    //         key={id}
    //         className={
    //           "flex justify-between items-center gap-10 h-14 px-4 mr-[20px] hover:scale-110  hover:rounded-md duration-1000 bg-gradient-to-r from-[#3e3ab4]  to-[#3d3c6d]" +
    //           " " +
    //           style
    //         }
    //       >
    //         <a
    //           href={href}
    //           className="flex justify-between items-center w-full text-white"
    //           download={download}
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           {child}
    //         </a>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default SocialLinks;