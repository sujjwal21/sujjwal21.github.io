import React from 'react'

const About = () => {
    return (
        <div name="about"
            className='w-screen h-auto bg-gradient-to-b from-gray-800 to-black text-white max-[800px]:w-[100%]'>
            <div className='p-4 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full' 
            data-aos="fade-right" data-aos-duration="2000"  >
                <div className='pb-20 '>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>
                <p className=' text-xl text-gray-400cd  '>
                Hi, 𝑴𝒚𝒔𝒆𝒍𝒇 𝑼𝒋𝒋𝒘𝒂𝒍 𝑺𝒊𝒏𝒈𝒉 and I am a passionate Full Stack web developer. I live in Lucknow, India. I am constantly learning and striving to improve my skills to deliver the best solutions for my clients, with a strong foundation in front-end development.
                 
                </p>
                
                <br />
                
                <p className='text-xl text-gray-300'>
                Apart from coding, I'm also a movie enthusiast who watches to all genres of movies and a passionate traveler who loves to explore new places and learn about the people and culture of that places. Excited and eagerly looking forward to kickstarting my career and continue refining my skills with the proper organization.<br/>
                I am comfortable working on projects of all sizes and complexities. Whether you need a new website or want to update your existing online presence, I am here to help bring your vision to life.
                </p>
            </div>
        </div>
    )
}

export default About
