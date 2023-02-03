// import { FaHandPointUp } from 'react-icons/fa';
import { BsArrowUpSquareFill } from 'react-icons/bs';

const Top = () => {
 const handleTop=()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 }
  return (
    <div className='w-fit fixed top-[90%]  right-6 z-30 hidden md:flex justify-center items-center p-3 '  >
        <BsArrowUpSquareFill color='white' onClick={handleTop} size="28px" className="hover:animate-none animate-bounce text-white hover:text-blue-300 cursor-pointer" />
    </div>
  )
}

export default Top;