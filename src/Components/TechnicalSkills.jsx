import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";

const TechinicalSkills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      aos: "fade-right",
      animation: "hover:animate-bounce ",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      aos: "fade-down",
      animation: "hover:animate-bounce ",
    },
    {
      id: 3,
      src: "https://ih1.redbubble.net/image.2221346343.9025/raf,360x360,075,t,fafafa:ca443f4786.jpg",
      title: "JavaScript",
      style: "shadow-yellow-500",
      aos: "fade-right",
      animation: "hover:animate-bounce ",
    },
    {
      id: 4,
      src: "https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg",
      title: "React",
      style: "shadow-blue-600",
      aos: "fade-up",
      animation: "animate-spin hover:animate-bounce",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
      aos: "fade-right",
      animation: "hover:animate-bounce ",
    },
    {
      id: 6,
      src: "https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png",
      title: "Next JS",
      style: "shadow-white",
      aos: "flip-right",
      animation: "hover:animate-bounce ",
    },
    {
      id: 7,
      src: "https://chiranjeev-thapliyal.vercel.app/svg/redux.svg",
      title: "Redux ",
      style: "shadow-purple-400",
      aos: "fade-right",
      animation: "animate-spin hover:animate-bounce",
    },
    {
      id: 10,
      src: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
      title: "TypeScript",
      style: "shadow-blue-400 ",
      aos: "flip-right",
      animation: "hover:animate-bounce ",
    },
    {
      id: 13,
      src: "https://manojattri.vercel.app/static/media/jest.809768de8350fa5f6a21.png",
      title: "Jest",
      style: "shadow-orange-400 ",
      aos: "fade-right",
      animation: "hover:animate-bounce ",
    },
    {
      id: 14,
      src: "https://manojattri.vercel.app/static/media/chakra.e4cb472ccaabf22affba.png",
      title: "Chakra UI",
      style: "shadow-blue-400 ",
      aos: "flip-right",
      animation: "hover:animate-bounce ",
    },
    {
      id: 15,
      src: "https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo.png",
      title: "Material UI",
      style: "shadow-blue-400 ",
      aos: "flip-right",
      animation: "hover:animate-bounce ",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-[#0e0c49] via-[#0e0c49] to-[#3d3a81] w-screen h-auto py-8 max-[800px]:w-[100%]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-white p-2 inline max-[450px]:text-2xl">
            Frontend Tech Stack
          </p>
          <p className="py-6">
            These are the Frontend Tech Stacks I've worked with
          </p>
        </div>

        <div className="w-full grid max-[400px]:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style, aos, animation }) => (
            <div
              data-aos={`${aos}`}
              data-aos-duration="2500"
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}
            >
              <img src={src} alt="" className={`w-20 mx-auto ${animation}`} />
              <p className="mt-4 text-2xl">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechinicalSkills;
