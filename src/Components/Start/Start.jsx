import { useState,useEffect } from 'react'

const useStart = (delay) => {
    const [ready,setReady] = useState(false);

    useEffect(()=>{
     
        let id = setTimeout(()=>{
            setReady(true);
     },delay)

     return ()=>{
        clearTimeout(id);
     } 
    },[delay])
  return {ready};
}

export default useStart;