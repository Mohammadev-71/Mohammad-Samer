import "../cssFiles/skills-section.css"
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
import { useRef,useEffect, useState } from "react";
import { RiTailwindCssFill } from "react-icons/ri";

export default function SkillsSection(){
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
   return(
      <section ref={sectionRef} style={{opacity:isVisible?1:0, transition:"all 1s ease"}} id="skills-section">
         <h2 className="section-title">My Skills</h2>
         <div className="card-container">
            <div className="skill-card frontend-card">
               <div className="title">
                  <p className="skill-name">React.js</p>
                  <FaReact className="skill-icon" id="react"/>
               </div>
               <p className="description">Building dynamic and interactive user interfaces with reusable components.</p>
            </div>

            <div className="skill-card frontend-card">
               <div className="title">
                  <p className="skill-name">Tailwind CSS</p>
                  <RiTailwindCssFill id="tailwind"/>
               </div>
               <p className="description">Efficiently creating responsive and complex UI designs with highly customizable utility classes.</p>
            </div>

            <div className="skill-card backend-card">
               <div className="title">
                  <p className="skill-name">Node&Express</p>
                  < FaNode id="node" className="skill-icon" />
               </div>
               <p className="description">Developing scalable server-side applications and robust RESTful APIs.</p>
            </div>
            <div className="skill-card">
               <div className="title">
                  <p className="skill-name database-card">Mongodb</p>
                  < SiMongodb id="mongodb" className="skill-icon" />
               </div>
               <p className="description">Managing NoSQL databases for flexible and high-performance data storage.</p>
            </div>
            <div className="skill-card tools-card">
               <div className="title">
                  <p className="skill-name">Git&Github</p>
                  <FaGithub id="github" className="skill-icon" />
               </div>
               <p className="description">Version control for tracking code changes and collaborating on projects.</p>
            </div>


            <div className="skill-card tools-card">
               <div className="title">
                  <p className="skill-name">Responsive</p>
                  <AiOutlineMobile id="responsive" className="skill-icon" />
               </div>
               <p className="description">Ensuring seamless user experiences across mobile, tablet, and desktop screens.</p>
            </div>
            
         </div>
         
      </section>
   )
}