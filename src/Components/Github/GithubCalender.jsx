import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip'
import React from 'react';
import Stats from './Stats';

const GithubCalender = () => {
  //   const selectLastHalfYear = contributions => {
  // const currentYear = new Date().getFullYear();
  // const currentMonth = new Date().getMonth();
  // const shownMonths = 6;

  // return contributions.filter(day => {
  //   const date = new Date(day.date);
  //   const monthOfDay = date.getMonth();

  //   return (
  //     date.getFullYear() === currentYear &&
  //     monthOfDay > currentMonth - shownMonths &&
  //     monthOfDay <= currentMonth
  //   );
  // });
// };
  return (
    <div name="gitHub"
     className='w-screen h-auto p-4 pt-10 bg-gradient-to-b from-[#0e0c49] via-[#0e0c49] to-[#3d3a81] text-white'>
      <div className='pb-10 ml-24 '>
                    <p className='text-4xl font-bold inline border-b-4 border-white items-start'>
                        GitHub 
                    </p>
                </div>
      <div data-aos="zoom-in"  data-aos-duration="2000">
      
      <GitHubCalendar username="sujjwal21" style={{margin:"auto"}} transformData={""}
       blockSize={19}
        fontSize={20}
        blockMargin={5}
         >
         <ReactTooltip delayShow={50} html  />
         </GitHubCalendar>
         </div>
         <Stats/>
    </div>
  );
}

export default GithubCalender;