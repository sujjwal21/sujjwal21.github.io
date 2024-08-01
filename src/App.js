import { useEffect, useState } from "react";
import About from "./Components/About";
import Backend from "./Components/Backend";
import Contact from "./Components/Contact";
import GithubCalender from "./Components/Github/GithubCalender";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects";
import SocialLinks from "./Components/SocialLinks";
import useStart from "./Components/Start/Start";
import StartingIndicater from "./Components/Start/StartingIndicater";
import TechnicalSkills from "./Components/TechnicalSkills";
import ToolsSection from "./Components/Tools";
import Top from "./Components/ToTop";
import Experience from "./Components/Experience";


function App() {
  const {ready}=useStart(1500)
  const [shouldMount, setShouldMount] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition =140+ window.innerHeight + window.pageYOffset;
      const documentHeight = document.body.offsetHeight;

      if (scrollPosition >= documentHeight) {
        setShouldMount(false);
      }else{
        setShouldMount(true)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {ready!==true?<StartingIndicater/>:<div >
     <Navbar/>
      <Home/>
     {shouldMount && <SocialLinks/>}
     <About/>
     <Experience/>
      <TechnicalSkills/>
      <Backend/>
      <ToolsSection/>
      <Top/>
     <Projects/>
     <GithubCalender/>
     <Contact/> 
    
    </div>}
    </div>
  );
}

export default App;