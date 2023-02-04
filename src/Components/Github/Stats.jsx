import React from 'react';
// width:"100%" ,marginTop:"20px" ,marginLeft:"55%"
const Stats = () => {
    return (
        <div className=' w-screen flex flex-col items-center justify-between h-auto py-20 '>
            <div style={{}} data-aos="flip-right"  data-aos-duration="2500">
                <a href="https://github.com/sujjwal21">
                    <img 
                     src="https://github-readme-streak-stats.herokuapp.com?user=sujjwal21&theme=dark&border_radius=10" 
                     alt="github"
                    // className=' hover:animate-spin'
                     />
                </a>
            </div>

            <div  className='flex flex-col items-center justify-center md:flex-row gap-20 py-20'
           
            >
                <a href="https://github.com/sujjwal21" data-aos="flip-right" data-aos-duration="2500">
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=sujjwal21&langs_count=8&theme=dark"
                     alt="" 
                     width={"360px"}
                     />
                </a>
                <a href="https://github.com/sujjwal21" data-aos="flip-left" data-aos-duration="1500">
                    <img src="https://github-readme-stats.vercel.app/api?username=sujjwal21&show_icons=true&count_private=true&theme=dark"
                     alt="" 
                     width={"600px"}
                     />   
                </a>
            </div>
        </div>
    );
}

export default Stats;