import React from "react";
import github from "../assets/github.png";
import vscode from "../assets/vscode.png"

const ToolsSection = () => {
  const techs = [
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
      aos:"flip-right",
      animation:"hover:animate-bounce "
    },
    {
      id: 9,
      src: "https://cdn.iconscout.com/icon/free/png-256/npm-3521612-2945056.png",
      title: "npm",
      style: "shadow-red-400",
      aos:"fade-right",
      animation:"hover:animate-bounce "
    }, 
    {
      id: 15,
      src: "https://chiranjeev-thapliyal.vercel.app/svg/git.svg",
      title: "GIT",
      style: "shadow-orange-400 ",
      aos:"fade-right",
      animation:"hover:animate-bounce  "
    }, {
      id: 16,
      src: "https://iconape.com/wp-content/files/gj/370774/svg/370774.svg",
      title: "Cypress",
      style: "shadow-cyan-400 ",
      aos:"flip-right",
      animation:"hover:animate-bounce "
    },
    {
      id: 17,
      src: vscode,
      title: "VS code",
      style: "shadow-blue-400 ",
      aos:"fade-right",
      animation:"hover:animate-bounce "
    },
    {
      id: 18,
      src: "https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8",
      title: "Postman",
      style: "shadow-orange-400 ",
      aos:"flip-right",
      animation:"hover:animate-bounce  "
    },
  ];

  return (
    <div
      className="bg-gradient-to-b from-[#0e0c49] via-[#0e0c49] to-[#3d3a81] w-screen h-auto py-8 max-[800px]:w-[100%]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-white p-2 inline">
          Tools section
          </p>
          <p className="py-6">These are the tools I've worked with</p>
        </div>

        <div className="w-full grid max-[400px]:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style ,aos,animation}) => (
            <div
            data-aos={`${aos}`}
            data-aos-duration="1500"
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

export default ToolsSection ;