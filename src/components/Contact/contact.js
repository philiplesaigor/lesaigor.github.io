// import React from "react";
import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import Mawingu from '../../assets/cow.jpg';
import NRT from '../../assets/twitter.png';
import linkedln from '../../assets/linkedln.jpg';
import Twitter from '../../assets/twitter.png';
import WhatsApp from '../../assets/whatsapp.jpg';
const Contact = () =>{
    const form = useRef();
    const sendEmail =(e) =>{
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
       .then((result)=>{
        console.log(result.text);
       }, (error)=>{
        console.log(error.text);
       })
    }
    return (
        <section id="contactPage">
            <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
                <span className="clientDesc">
                    I have opportunity to work with a diverse group of users.
                </span>

            </div>
            <div className="clientImgs"></div>
            <img src={Mawingu} alt="Client" className="clientImg" />
            <img src={NRT} alt="Client"  className="clientImg" />

            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">
                Please fill the form below and I will respond quickly.
                </span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name"/>
                    <input type="email" className="email" placeholder="Your Email"/>
                    <textarea className="msg" name="Message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={linkedln} alt="Client" className="link"/>
                        <img src={Twitter} alt="Client" className="link"/>
                        <img src={WhatsApp} alt="Client" className="link"/>
                    </div>

                </form>

            </div>
           
        </section>
    )
}
export default Contact;