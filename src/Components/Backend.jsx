import React from "react";

const Backend = () => {
  const techs = [ 
    {
      id: 11,
      src: "https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg",
      title: "Node.js",
      style: "shadow-green-600 ",
      aos:"fade-down",
      animation:"hover:animate-bounce "
    },{
      id: 13,
      src: "https://manojattri.vercel.app/static/media/express.cca64e0f360897258ecb.png",
      title: "Express.js",
      style: "shadow-gray-300",
      aos:"fade-up",
      animation:"hover:animate-bounce "
    },
    {
      id: 12,
      src: "https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg",
      title: "MongoDB",
      style: "shadow-green-500 ",
      aos:"flip-right",
      animation:"hover:animate-bounce "
    }
  ];

  return (
    <div
      className="bg-gradient-to-b to-[#0e0c49] via-[#0e0c49] from-[#3d3a81] w-screen h-auto py-8 max-[800px]:w-[100%]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-white p-2 inline">
          Backend Tech Stack
          </p>
          <p className="py-6">These are the Backend Tech Stacks I've worked with</p>
        </div>

        <div className="w-full grid max-[400px]:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style ,aos,animation}) => (
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

export default Backend;