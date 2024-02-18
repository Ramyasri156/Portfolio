import React, { useRef } from "react";
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/Adobe-logo.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook-icon.png';
import FacebookIcon from '../../assets/facebook.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_o2e8snz', 'template_roodn8b', form.current,  'p3I3QMn5gxP6J-oydppJZ')
          .then(
            (result) => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
    };
    return(
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    I have had the oppurtunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with includes
                </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="Walmart" className="clientImg" />
                    <img src={Adobe} alt="Adobe" className="clientImg" />
                    <img src={Microsoft} alt="Microsoft" className="clientImg" />
                    <img src={Facebook} alt="Facebook" className="clientImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work oppurtunities.</span>
                <form className="contactForm" ref={form}  onSubmit={sendEmail}> 
                    <input type="text" className="name" placeholder="Your Name" name="your_name"/>
                    <input type="email" className="email" placeholder="Your Email" name="your_email"/>
                    <textarea className= "msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="FacebookIcon" className="link" height={100} width={100}/>
                        <img src={TwitterIcon} alt="TwitterIcon" className="link" height={100} width={100}/>
                        <img src={YouTubeIcon} alt="YouTubeIcon" className="link" height={100} width={100}/>
                        <img src={InstagramIcon} alt="InstagramIcon" className="link" height={100} width={100}/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;