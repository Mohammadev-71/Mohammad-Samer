import { useEffect, useState, useRef } from "react";
import "../cssFiles/about-me.css"

export default function AboutMe(){
   const sectionRef = useRef(null)
   const [isVisible, setIsVisible] = useState(false)
   const [text, setText] = useState("");
      const codeText = `const developer = {
      \n\tname: "Mohammad Samer",
      \n\trole: "Full-Stack Developer",
      \n\tskills: ["React", "Express.js", "MongoDB"],
      \n\temail:mohammadev71@gmail.com
   \n}`
      useEffect(()=>{

         const observer = new IntersectionObserver(
            ([entry])=>{
               if(entry.isIntersecting){
                  setIsVisible(true)
                  let index = 0;
   
                  const interval = setInterval(() => {
                     setText(codeText.slice(0, index));
                     index++
                     if(index>  codeText.length){
                        clearInterval(interval)
                     }
                  }, 100);
                  observer.unobserve(entry.target)
               }
            },
            {threshold:0.3}
         );
         if(sectionRef.current) observer.observe(sectionRef.current)
         

         return()=>observer.disconnect()
         
      },[])
   
   return(
      <section id="About-me-section">
         <div  className="about-me-info" >
            <h2 className="section-title">About Me</h2>
            <p className="about-me-p1">
               I'm Mohammad Samer, a passionate Full-Stack Web Developer focused on building
               modern and scalable web applications. I enjoy transforming ideas into structured
               and maintainable digital solutions.
            </p>
            <p className="about-me-p2">
               I am continuously improving my backend knowledge and system design skills,
               aiming to grow into a well-rounded software engineer who builds reliable
               and impactful products.
            </p>
         </div>
         <div ref={sectionRef} style={{ opacity: isVisible ? 1 : 0, transition: 'all 1.5s'}} className="code-area">
            <p>
               <span className="keyword">{text.slice(0,5)}</span>{text.slice(5)}
            </p>
         </div>
      </section>
   )
}