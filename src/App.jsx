import './App.css'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { FaArrowUpLong } from "react-icons/fa6";
import { useEffect, useState } from 'react'
function App() {
  const [isReached, setIsReached] = useState(false);
  const scrollEffect = ()=>{
    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsReached(true);
      } else {
        setIsReached(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  }
  scrollEffect()
  return (
    <div className='my-app'>
      <Header/>
      <HeroSection/>
      <AboutMe/>
      <SkillsSection/>
      <Projects/>
      <Contact/>
      <Footer/>
      <a 
      className='arrow' 
      style={{
        animation:isReached?"none":"arrow-animation 2s linear infinite", 
        transform:isReached?"rotate(0deg)":"rotate(180deg)", 
        right:isReached?"10px":"20px"
      }} 
      href={isReached?"#hero-section":"#About-me-section"}><FaArrowUpLong/></a>
    </div>
  )
}

export default App
