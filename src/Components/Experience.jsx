import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="h-auto w-screen bg-gradient-to-b from-[#0e0c49] via-[#3d3a81] to-[#0e0c49] text-white"
    >
      <div className="p-4 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-20">
          <p className="text-4xl font-bold inline border-b-4 border-white">
            Experience
          </p>
        </div>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-50 dark:text-gray-500">
              September 2023 - Present
            </time>
            <h3 className="text-lg font-semibold  dark:text-white">
              Product Engineer (Full Stack Developer)
            </h3>
            <h6 className="text-sm font-semibold  dark:text-white">
            Advenio TecnoSys Private Limited
            </h6>

            <p className="text-base font-normal text-gray-50 dark:text-gray-400 mt-2">
              At Advenio Tecnosys, I have been working as a Product Engineer,
              focusing on both front-end and back-end development. My role
              involves designing and implementing scalable web applications,
              ensuring a seamless user experience, and collaborating with
              cross-functional teams to deliver high-quality products. I am
              responsible for writing clean, efficient, and maintainable code
              while staying up-to-date with the latest industry trends and
              technologies.
            </p>
            <p className="text-base font-normal text-gray-50 dark:text-gray-400 mt-4">
              <b>Key Qualities:</b>
            </p>
            <ul className="list-disc list-inside text-gray-50 dark:text-gray-400">
              <li>Proficient in modern JavaScript frameworks and libraries such as React and Node.js.</li>
              <li>Strong understanding of database management and server-side development.</li>
              <li>Excellent problem-solving skills and ability to troubleshoot complex issues.</li>
              <li>Effective communication and collaboration with team members and stakeholders.</li>
              <li>Ability to manage multiple tasks and projects simultaneously.</li>
              <li>Continuous learner, always seeking to enhance skills and knowledge.</li>
              <li>Strong attention to detail and commitment to delivering high-quality work.</li>
            </ul>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-50 dark:text-gray-500">
              July 2023 - September 2023
            </time>
            <h3 className="text-lg font-semibold text-gray-50 dark:text-white">
              Product Intern (Full Stack Developer)
            </h3>
            <h6 className="text-sm font-semibold  dark:text-white">
            Advenio TecnoSys Private Limited
            </h6>
            <p className="text-base font-normal text-gray-50 dark:text-gray-400 mt-2">
              During my internship at Advenio Tecnosys, I gained hands-on experience in full stack development, working closely with senior developers to learn best practices in coding, debugging, and deploying web applications. I contributed to various projects, enhancing my understanding of the development lifecycle and improving my technical skills in a real-world environment.
            </p>
            <p className="text-base font-normal text-gray-50 dark:text-gray-400 mt-4">
              <b>Key Achievements:</b>
            </p>
            <ul className="list-disc list-inside text-gray-50 dark:text-gray-400">
              <li>Successfully developed and deployed a feature-rich web application within the internship period.</li>
              <li>Improved team efficiency by creating reusable components and optimizing code structure.</li>
              <li>Received positive feedback for problem-solving abilities and quick adaptation to new technologies.</li>
            </ul>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-50 dark:text-gray-500">
              July 2022 - April 2023
            </time>
            <h3 className="text-lg font-semibold text-gray-50 dark:text-white">
              Full Stack Web Development Bootcamp
            </h3>
            <h6 className="text-sm font-semibold  dark:text-white">
            Masai School
            </h6>
            <p className="text-base font-normal text-gray-50 dark:text-gray-400 mt-2">
              Completed an intensive Full Stack Web Development course at Masai School, focusing on the MERN stack (MongoDB, Express.js, React, Node.js). The bootcamp provided over 1200+ hours of hands-on coding experience, covering front-end and back-end development, data structures and algorithms, and industry best practices.
            </p>
            <p className="text-base font-normal text-gray-50 dark:text-gray-400 mt-4">
              <b>Key Achievements:</b>
            </p>
            <ul className="list-disc list-inside text-gray-50 dark:text-gray-400">
              <li>Developed multiple full-stack projects, both individually and collaboratively.</li>
              <li>Gained expertise in JavaScript, React, Node.js, and database management.</li>
              <li>Enhanced problem-solving skills by solving 300+ data structures and algorithms problems.</li>
              <li>Received 100+ hours of soft skills training to improve communication and teamwork abilities.</li>
              <li>Participated in coding challenges and hackathons to test and refine skills.</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Experience;
