import React from "react";
import pear from "../assets/portfolio/pear_gif1 (1).gif";
import body_care from "../assets/portfolio/body_care_gif (2).gif"
import I2J from "../assets/portfolio/I2J_gif (2).gif"
import Port from "../assets/portfolio/portfolio_26_gif (1).gif"
import {VscGithub} from 'react-icons/vsc';
import {FiExternalLink} from 'react-icons/fi';


const Projects = () => {
  return (
    <div 
      name="projects"
      className="bg-gradient-to-b to-[#0e0c49] via-[#171274] from-[#3d3a81] w-screen text-white md:h-auto "
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="py-8">
          <p className="text-4xl font-bold  inline border-b-4 border-white text-white ">
            Project
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        {/* grid sm:grid-cols-2 md:grid-cols-3 gap-8 shadow-md shadow-gray-500  */}
        <div className="flex flex-col gap-20">
          
          <div className=" flex max-[850px]:flex-col w-full">
            <div className=" w-3/5 max-[850px]:w-[95%] h-auto pt-5" 
            data-aos="fade-right" data-aos-duration="2500" >
              <img
                src={pear}
                alt="pear"
                width={"100%"}
                height="100vh"
                
              />
            </div>
            <div className=" w-2/5 max-[850px]:w-[85%] px-5 text-white max-[850px]:my-8"
            data-aos="fade-up" data-aos-duration="2500" >
              <h1 className="text-3xl font-bold text-white pb-2">
                Peer.com
                <hr />
              </h1>
              <p>Pear is built with the reference website apple.com.</p>
              <h1 className="text-2xl font-bold text-white py-2">
                Tech Stack :
              </h1>
              <p>
                React || Redux || Axios || React-Router-Dom || FireBase-Auth ||
                Chakra-UI || Vitejs
              </p>
              <h1 className="text-2xl font-bold text-white py-2">
                Features :
              </h1>
              <p>
                Login/Signup || Google Authentication || Admin Section || Cart
                || Place Order
              </p>
              <h1 className="text-2xl font-bold text-white py-2">
                Area of responsibility :
              </h1>
              <p>
                Mac and Watch Page || Single Product Page || Cart Page ||
                Checkout Page
              </p>
              <p className=" font-bold">
                A collaborative project built by a team of 5 Full stack web
                developers executed in 5 days.
              </p>

              <div className="flex gap-10 max-[500px]:flex-col max-[500px]:gap-1">
                <a
                  href="https://github.com/sujjwal21/Pear-website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className=" group duration-200 hover:scale-105 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#0e0c49]  to-[#0e0a7a] cursor-pointer gap-3 ">
                    GitHub <VscGithub size={"25px"} />
                  </button>
                </a>
                <a
                  href="https://pear-website.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className=" group duration-200 hover:scale-105 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#0e0c49]  to-[#0e0a7a] cursor-pointer gap-3">
                    Deployed <FiExternalLink size={"22px"}/>
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* =================================================== */}
          <div className=" flex max-[850px]:flex-col-reverse w-full">
            <div className=" w-2/5 max-[850px]:w-[85%] px-5 text-white max-[850px]:my-8"
            data-aos="fade-right" data-aos-duration="2500" >
              <h1 className="text-3xl font-bold text-white pb-2">
                Body_care
                <hr />
              </h1>
              <p>Body_care is built with the reference website SkinStore. In this I use chakra templates to make pages responsive and 
                make my own backend to get data, I deploy my backend on Render and use that API to make search functionality in my website. 
                And this is an individual project for all parts of the website performed by me.
              </p>
              <h1 className="text-2xl font-bold text-white py-2">
                Tech Stack :
              </h1>
              <p>
                React || Axios || React-Router-Dom || 
                Chakra-UI || Render
                {/* <div className='flex justify-center items-center gap-x-2 mt-5' data-aos="zoom-out">
            <div><SiJavascript size="32px" color="yellow" className="hover:animate-bounce hover:cursor-pointer"/></div>||
            <div><SiHtml5 size="32px" color="#e34c26" className="hover:animate-bounce hover:cursor-pointer"/></div>||
            <div><SiCss3 size="32px" color="#264de4" className="hover:animate-bounce hover:cursor-pointer"/></div>||
            </div> */}
              </p>
              <h1 className="text-2xl font-bold text-white py-2">
                Features :
              </h1>
              <p>
                Login/Signup || Search Functionality || Wishlist || DarkMode
                ||  Carousel
              </p>
              <p className=" font-bold">
              An individual project was built with in 5 days.
              </p>

              <div className="flex gap-10 max-[500px]:flex-col max-[500px]:gap-1">
                <a
                  href="https://github.com/sujjwal21/serene-jail-301"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className=" group duration-200 hover:scale-105 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#0e0c49]  to-[#0e0a7a]  cursor-pointer gap-3 ">
                    GitHub <VscGithub size={"25px"}/>
                  </button>
                </a>
                <a
                  href="https://body-care-sujjwal21.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className=" group duration-200 hover:scale-105 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#0e0c49]  to-[#0e0a7a]  cursor-pointer gap-3">
                    Deployed <FiExternalLink size={"22px"}/>
                  </button>
                </a>
              </div>
            </div>
            <div className=" w-3/5 max-[850px]:w-[95%] h-auto pt-5" 
            data-aos="fade-up" data-aos-duration="2500" >
              <img
                src={body_care}
                alt="pear"
                width={"100%"}
                height="100vh"
                
              />
            </div>
          </div>
              {/* =============================================================== */}
              <div className=" flex max-[850px]:flex-col w-full">
            <div className=" w-3/5 max-[850px]:w-[95%] h-auto pt-5" 
            data-aos="fade-right" data-aos-duration="2500" >
              <img
                src={I2J}
                alt="pear"
                width={"100%"}
                height="100vh"
                
              />
            </div>
            <div className=" w-2/5 max-[850px]:w-[85%] px-5 text-white max-[850px]:my-8"
            data-aos="fade-up" data-aos-duration="2500" >
              <h1 className="text-3xl font-bold text-white pb-2">
                Inter to Job
                <hr />
              </h1>
              <p>Inter t0 Job is built with the reference website Inter Theory. </p>
              <h1 className="text-2xl font-bold text-white py-2">
                Tech Stack :
              </h1>
              <p>
                HTML || CSS || JavaScript
              </p>
              <h1 className="text-2xl font-bold text-white py-2">
                Features :
              </h1>
              <p>
                Login/Signup || Contact Us  || Search Functionality || Filter Functionality
                ||Hamburger Navbar
              </p>
              <h1 className="text-2xl font-bold text-white py-2">
                Area of responsibility :
              </h1>
              <p>
              Online Courses || Post Internship || Contact Us ||
              Refund & Cancellation Policy

              </p>
              <p className=" font-bold">
                A collaborative project built by a team of 5 Full stack web
                developers executed in 5 days.
              </p>

              <div className="flex gap-10 max-[500px]:flex-col max-[500px]:gap-1">
                <a
                  href="https://github.com/sujjwal21/Intern_To_Job"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className=" group duration-200 hover:scale-105 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#0e0c49]  to-[#0e0a7a]  cursor-pointer gap-3 ">
                    GitHub <VscGithub size={"25px"}/>
                  </button>
                </a>
                <a
                  href="https://cloudy-thing-7898.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className=" group duration-200 hover:scale-105 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#0e0c49]  to-[#0e0a7a]  cursor-pointer gap-3">
                    Deployed <FiExternalLink size={"22px"}/>
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* ===================================================================== */}
          <div className=" flex max-[850px]:flex-col-reverse w-full">
           
           <div className=" w-2/5 max-[850px]:w-[85%] px-5 text-white max-[850px]:my-8"
           data-aos="fade-right" data-aos-duration="2500" >
             <h1 className="text-3xl font-bold text-white pb-2">
               My Portfolio
               <hr />
             </h1>
             <p>I make this Portfolio by taking references from a youtube video and adding a lot of CSS and functionality.I used Emajjs 
              for the contact page by which I get emails in my inbox.
             </p>
             <h1 className="text-2xl font-bold text-white py-2">
               Tech Stack :
             </h1>
             <p>
               React || Emailjs || Tailwind || 
               React-Icons || GitHub  Calendar  || React-Scroll || React-Tooltip || AOS
             </p>
             <h1 className="text-2xl font-bold text-white py-2">
               Features :
             </h1>
             <p>
               Responsive  || Live Github Status || Resume Download Functionality || Functional Contact Page
               
             </p>
             <p className=" font-bold my-6">
               It is an individual project .
             </p>

             <div className="flex gap-10 max-[500px]:flex-col max-[500px]:gap-1">
               <a
                 href="https://github.com/sujjwal21/sujjwal21.github.io"
                 target="_blank"
                 rel="noreferrer"
               >
                 <button className=" group duration-200 hover:scale-105 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#0e0c49]  to-[#0e0a7a]  cursor-pointer gap-3 ">
                   GitHub <VscGithub size={"25px"}/>
                 </button>
               </a>
               <a
                 href="https://sujjwal21.github.io/"
                 target="_blank"
                 rel="noreferrer"
               >
                 <button className=" group duration-200 hover:scale-105 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#0e0c49]  to-[#0e0a7a]  cursor-pointer gap-3">
                   Deployed <FiExternalLink size={"22px"}/>
                 </button>
               </a>
             </div>
           </div>
           <div className=" w-3/5 max-[850px]:w-[95%] h-auto pt-5" 
           data-aos="fade-up" data-aos-duration="2500" >
             <img
               src={Port}
               alt="pear"
               width={"100%"}
               height="100vh"
               
             />
           </div>
         </div>
         {/* ========================================================================== */}
        </div>
      </div>
    </div>
  );
};

export default Projects;