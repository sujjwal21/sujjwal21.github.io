import About from "./Components/About";
import Contact from "./Components/Contact";
import GithubCalender from "./Components/Github/GithubCalender";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects";
import SocialLinks from "./Components/SocialLinks";
import useStart from "./Components/Start/Start";
import StartingIndicater from "./Components/Start/StartingIndicater";
import TechnicalSkills from "./Components/TechnicalSkills";
import Top from "./Components/ToTop";


function App() {
  const {ready}=useStart(1500)
  return (
    <div>
      {ready!==true?<StartingIndicater/>:<div >
     <Navbar/>
      <Home/>
     <SocialLinks/>
     <About/>
      <TechnicalSkills/>
      <Top/>
     <Projects/>
     <GithubCalender/>
     <Contact/> 
    
    </div>}
    </div>
  );
}

export default App;