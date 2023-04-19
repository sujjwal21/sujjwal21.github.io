// import { FaHandPointUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { BsArrowUpSquareFill } from 'react-icons/bs';

const Top = () => {
  const [top, settop] = useState(false)

 const handleTop=()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 }

 useEffect(()=>{
  function handleScroll() {
    if (window.scrollY > window.innerHeight) {
      settop(true);
    }else{
      settop(false)
    }
  }

  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);

 },[])

  return (
   <>{top? <div className='w-fit fixed top-[90%]  right-6 z-30 hidden md:flex justify-center items-center p-3 '  >
   <BsArrowUpSquareFill color='white' onClick={handleTop} size="28px" className="hover:animate-none animate-bounce text-white hover:text-blue-300 cursor-pointer" />
</div>:<div></div>}
   </>
  )
}

export default Top;