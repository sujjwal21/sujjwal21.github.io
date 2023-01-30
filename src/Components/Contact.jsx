import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FcPhone } from "react-icons/fc";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {GiOutbackHat} from "react-icons/gi"

const Contact = () => {
  const form = useRef();
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin color="rgb(10,102,194)" size={35} />
        </>
      ),
      href: "https://www.linkedin.com/in/ujjwal-singh-3209b0191/",
      style: "rounded-tr-md rounded-tl-md ",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub color="gray" size={40} />
        </>
      ),
      href: "https://github.com/sujjwal21",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail color="#a70c0c" size={40} />
        </>
      ),
      href: "mailto:sujjwal85@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" alt="" />
        </>
      ),
      href: "https://www.hackerrank.com/sujjwal85",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kl6ti0j",
        "template_gdr1l6r",
        form.current,
        "HTktv614CczUmOCfj"
      )
      .then(
        (result) => {
          alert("Message sent successfully");
          console.log(result.text);
          window.location.reload();
        },
        (error) => {
          alert("Failed to send the msg");
          console.log(error.text);
        }
      );
  };
  return (
    <div
    
      name="contact"
      className="w-screen h-auto bg-gradient-to-b to-black from-gray-800 text-white "
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 text-2xl text-gray-400">
            Submit the form below to get in touch with me
          </p>
        </div>
        {/* style={{border:"0px solid red",display:"flex",justifyContent:"center",alignItems:"center"}} */}
        <div className=" flex flex-row justify-center max-[800px]:flex-col gap-40">
          <div  className="flex h-full w-1/2 max-[800px]:w-[90%] ">
            <div className="flex flex-col justify-center items-center" >
              <img
                src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                alt="msg"
                width={"90%"}
                data-aos="fade-up-right"
                data-aos-duration="2000"
              />
              <h5 className="text-2xl flex flex-col justify-center  py-9 text-gray-400 gap-y-1">
              <span><GiOutbackHat style={{marginBottom:"-10px"}} className="hover:animate-bounce" size="30px"/> 𝐔𝐣𝐣𝐰𝐚𝐥 𝐒𝐢𝐧𝐠𝐡</span>
                
                (𝔽𝕦𝕝𝕝 𝕊𝕥𝕒𝕔𝕜 𝕎𝕖𝕓 𝔻𝕖𝕧𝕖𝕝𝕠𝕡𝕖𝕣)
                
                <span className="flex gap-1"><FcPhone className="hover:animate-bounce" color="#01240e" size="30px" /><b>Contact:</b> +91 6393169967 </span>
                <span className="flex gap-1"> <SiGmail  className="hover:animate-bounce" size="25px" color="#9b0808" /><b>Email:</b> sujjwal85@gmail.com</span>
              </h5>
              <h1 className=" text-3xl">ᖴｉ𝐍đ _ 𝓜𝔢 _ 𝓞ⓝ -</h1>
              <div className="flex justify-center align-middle ">
                {links.map(({ id, child, href, style, download }) => (
                  <li
                    key={id}
                    className={
                      "flex flex-col justify-center items-center w-20 h-14 px-4 hover:animate-bounce" +
                      " " +
                      style
                    }
                  >
                    <div>
                      <a
                        href={href}
                        className="flex justify-between items-center w-full text-white"
                        download={download}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {child}
                      </a>
                    </div>
                  </li>
                ))}
              </div>
            </div>
          </div>
          <form
          data-aos="fade-left" data-aos-duration="2000"
            className=" flex flex-col w-full md:w-1/2 max-[800px]:w-[90%]"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="p-2 bg-transparent  border-b-2  text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-b-2  text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-b-2  text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
      <span className=" text-3xl text-gray-500 flex justify-center items-center w-screen">Designed & Built by Ujjwal Singh, © 2023 All rights reserved</span>
    </div>
    
  );
};

export default Contact;
