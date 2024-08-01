import React from 'react'
import Indicater from "../../assets/portfolio/loading.gif"

const StartingIndicater = () => {
  return (
    <div className='w-full mx-auto min-h-screen bg-[#083142] '>
      <div className='w-screen flex flex-col items-center justify-center pt-10 '>
        <img src={Indicater}
         alt="Gif"  
        //  className='w-2/4 h-4/6' 
         data-aos="zoom-in-up" />
        <div className='m-auto mt-5'>
        <h1 className="text-7xl text-black font-signature p-1 capitalize ">Ujjwal Singh</h1>
        </div>
      </div>
    </div>
  )
}

export default StartingIndicater;