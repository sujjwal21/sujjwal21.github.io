import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-auto max-[800px]:h-auto w-screen  bg-gradient-to-b to-[#0e0c49] via-[#0e0c49] from-[#3d3a81] text-white max-[800px]:w-full"
    >
      <div
        className="p-4 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full"
      >
        <div className="pb-20 ">
          <p className="text-4xl font-bold inline border-b-4 border-white">
            About
          </p>
        </div>
        <div className=" flex gap-10 max-[800px]:flex-col">
          <div className=" w-2/3 text-justify max-[800px]:w-full"
           data-aos="fade-right"
           data-aos-duration="2000"
           >
            <p className="text-white  ">
              Hi, 𝑴𝒚𝒔𝒆𝒍𝒇 𝑼𝒋𝒋𝒘𝒂𝒍 𝑺𝒊𝒏𝒈𝒉 and I am a passionate Full Stack web
              developer. I live in Lucknow, India. <span >I joined a coding boot camp and got hands-on experience on front-end and back-end tech stacks. And along with it, I got <b className=" text-blue-400 animate-none md:animate-pulse z-0"> 1200+ hours of coding experience,12000+ lines of code,100+ hours of soft skill training,300+ DSA Problems, and did 5+ Projects</b> including individual and collaborative.</span> 
               I am constantly learning and
              striving to improve my skills to deliver the best solutions for my
              clients, with a strong foundation in front-end development.
            </p>

            <br />
            <p>Excited and eagerly looking forward to kickstarting my career and
              continue refining my skills with the proper organization.
              I am comfortable working on projects of all sizes and
              complexities. Whether you need a new website or want to update
              your existing online presence, I am here to help bring your vision
              to life.</p>
              <br />

            <p className="text-white">
              Apart from coding, I'm also a movie enthusiast who watches to all
              genres of movies and a passionate traveler who loves to explore
              new places and learn about the people and culture of that places.
              
            </p>
          </div>
          <div className=" w-1/3 max-[800px]:w-full "
           data-aos="fade-up"
           data-aos-duration="2000">
            <img
              src="https://github.com/manojattri181/ManojAttri-Portfolio/blob/master/src/assets/working.gif?raw=true"
              alt="about"
              className="hover:scale-110 duration-1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;