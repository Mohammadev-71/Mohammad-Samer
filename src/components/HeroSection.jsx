import "../cssFiles/heroSection.css"
import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa"
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

export default function HeroSection(){

   return (
      <section id="hero-section">
         <div className="hero-section-info">
            <h2>I'm Mohammad Samer</h2>
            <h3>Full-Stack Web Developer</h3>
            <p>I am a full-stack web developer passionate about building modern web applications.</p>
            <div className="hero-section-buttons">
               <a href="https://www.linkedin.com/in/mohammad-samer-dev/" target="_blank" rel="noreferrer"><FaLinkedin className="contact-icons"/>Linkedin</a>
               <a href="https://github.com/Mohammadev-71/" target="_blank" rel="noreferrer" ><FaGithub className="contact-icons"/>GitHub</a>
               <a href="https://wa.me/971562650112" target="_blank" rel="noreferrer"><IoLogoWhatsapp className="contact-icons"/>Whatsapp</a>
            </div>
            <div className="cta-buttons">
               <a className="contact-button" href="#contact-section">Contact Me <FaEnvelope/></a> 
               <a className="view-projects-button" href="#Project-Section">View Projects<MdOutlineWorkOutline/></a>
            </div>
         </div>
         <div className="img">
            <img src="/Developer activity-bro.svg" alt="" />
         </div>
         
      </section>
   )
}  
