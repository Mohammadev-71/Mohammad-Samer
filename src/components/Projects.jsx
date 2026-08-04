import "../cssFiles/projects.css"
import { useState, useEffect, useRef } from "react"

export default function Projects(){
   const sectionRef = useRef(null)
   const [isVisible, setIsVisible] = useState(false)
   useEffect(()=>{
      const observer = new IntersectionObserver(
         ([entry])=>{
            if(entry.isIntersecting){
            setIsVisible(true)
            observer.unobserve(entry.target)
         }
         },
         {threshold:0.3}
      );

      if(sectionRef.current) observer.observe(sectionRef.current)

      return()=>observer.disconnect()
   },[])
   return (
      <section className="flex flex-row wrap" ref={sectionRef} style={{opacity:isVisible?1:0, transition:"all 1s ease"}} id="Project-Section">
         <h2 className="section-title">My Projects</h2>


         <div className="cards-container">
            <div className="project-card">
               <div className="title">
                  <p>Badil-platform</p>
               </div>
               <div className="description">
                  <p>"Badil" is an innovative digital bartering platform designed to modernize the traditional concept of exchange and promote sustainable consumption. The platform enables users to list, discover, and trade goods and services seamlessly, fostering a sharing economy and reducing waste.</p>
               </div>
               <ul className="technologies">
                  <li className="technology">React.js</li>
                  <li className="technology">Express.js</li>
                  <li className="technology">Mongodb</li>
                  <li className="technology">I18n</li>
                  <li className="technology">Tailwind</li>
               </ul>
               <a target="_blank" href="https://badil.best" className="demo-btn">
                  <span>Visit Side</span>
               </a>  
            </div>



            <div className="project-card">
               <div className="title">
                  <p>Invoice System</p>
               </div>
               <div className="description">
                  <p>I developed an invoicing system for a carpentry and decoration company that allows for issuing, viewing, editing, and deleting invoices and quotations, as well as sorting them by client name. It includes an automatic numbering system, file number search, and the ability to share a link to view the file only.</p>
               </div>
               <ul className="technologies">
                  <li className="technology">React.js</li>
                  <li className="technology">Express.js</li>
                  <li className="technology">Mongodb</li>
               </ul>
               <a href="https://drive.google.com/file/d/1iI_9WWcCkxZdwQ11vQFjtJ55AYFAMcgX/view?usp=drive_link" className="demo-btn">
                  <span>📺 Watch Project Demo</span>
               </a>  
            </div>
         </div>

         



      </section>
   )
}