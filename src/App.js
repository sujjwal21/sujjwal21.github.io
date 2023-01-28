import About from "./Components/About";
import Contact from "./Components/Contact";
import GithubCalender from "./Components/Github/GithubCalender";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects";
import SocialLinks from "./Components/SocialLinks";
import TechnicalSkills from "./Components/TechnicalSkills";


function App() {
  return (
    <div >
     <Navbar/>
      <Home/>
     <SocialLinks/>
     <About/>
      <TechnicalSkills/>
     <Projects/>
     <GithubCalender/>
     <Contact/> 
    </div>
  );
}

export default App;
