import { FaGithub, FaLinkedin} from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io";
import "../cssFiles/footer.css"

export default function Footer(){
   return(
      <section id="footer-section">
         <p className="property-rights">© 2026 Mohammad Samer. All rights reserved</p>
         <ul className="links">
            <li><a href="https://github.com/Mohammadev-71/" target="_blank" rel="noreferrer" ><FaGithub/>GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/mohammad-samer-dev/" target="_blank" rel="noreferrer" ><FaLinkedin/>Linkedin</a></li>
            <li><a href="https://wa.me/971562650112" target="_blank" rel="noreferrer"><IoLogoWhatsapp/>Whatsapp</a></li>
         </ul>
         <p className="built-with">Built with React.js & CSS by Mohammad Samer</p>
      </section>
   )
}
