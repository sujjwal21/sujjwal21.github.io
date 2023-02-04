import React from "react";
import Typewriter from "typewriter-effect";
import myImage from "../../assets/myImage.png";
import { FiArrowRightCircle } from "react-icons/fi";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen max-[800px]:h-auto w-screen bg-gradient-to-b from-[#0e0c49] via-[#0e0c49] to-[#3d3a81] py-10 pb-20"
    >
      <div className="max-w-screen-lg mx-auto w-full flex flex-col items-center justify-center h-auto px-4 md:flex-row gap-20">
        <div
          style={{ marginTop: "50px" }}
          className="flex flex-col justify-center h-full "
        >
          <h2 className="text-3xl  sm:text-5xl font-bold text-white my-12">
            I'm <br/><span className=" text-blue-400 animate-none md:animate-pulse z-0 ">Ujjwal Singh</span><br/> Full Stack
            <Typewriter
              options={{
                strings: ["Web Developer", "Web Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className=" text-white pb-4 max-w-md">
          Analytical and detail-oriented aspiring Full Stack Developer.
            Capable of writing production-ready code using ReactJS, Redux, and
            CSS on the front end, NodeJS, and Express on the back end to build
            single-page applications. Passionate about coding and intensely
            interested in working in a product-based company.
          </p>

          <div>
            <a href={"/Ujjwal-Singh-Resume.pdf"} target="_blank" rel="noopener noreferrer" download 
            onClick={()=>window.open("/Ujjwal-Singh-Resume.pdf")}>
              <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#0e0c49]  to-[#0e0a7a] cursor-pointer ">
                Resume
                <span className="group-hover:rotate-90 duration-1000 ml-3">
                  <FiArrowRightCircle size={20} className="ml-1" />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <img
            src={myImage}
            alt="My_profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;