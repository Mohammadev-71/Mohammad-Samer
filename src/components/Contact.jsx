
import { useRef,useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import "../cssFiles/contact.css"


export default function Contact(){


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
   const formRef = useRef(); 

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(
         import.meta.env.VITE_EMAILJS_SERVICE_ID,
         import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
         formRef.current,
         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ).then((result) => {
         alert("Sent successfully!");
      }, (error) => {
         alert("An error occurred. Please try again.");
      });
   };
   return(
      <section ref={sectionRef} style={{opacity:isVisible?1:0, transition:"all 1s ease"}} id="contact-section">
         <div className="title">
            <h2>Let's Build Something Amazing Together</h2>
            <p className='paragraph'>Feel free to reach out if you're looking to build a project, kickstart a business, or even just want to chat . I'm always happy to help!</p>
         </div>
         <form ref={formRef} onSubmit={sendEmail} className="email-form">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" required />
            <button type="submit">Send Message</button>
         </form>
      </section>
   )
}
