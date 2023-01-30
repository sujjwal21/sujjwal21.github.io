// import { FaHandPointUp } from 'react-icons/fa';
import { FaHandPointer } from 'react-icons/fa';

const Top = () => {
 const handleTop=()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 }
  return (
    <div className='w-fit fixed top-[90%]  right-6 z-30 hidden md:flex justify-center items-center p-3 hover:border-cyan-400 hover:cursor-pointer   rounded-3xl shadow-sm shadow-gray-200'  onClick={handleTop}>
        <FaHandPointer  size="22px" className="hover:animate-bounce text-white hover:text-blue-300 cursor-pointer" />
    </div>
  )
}

export default Top;