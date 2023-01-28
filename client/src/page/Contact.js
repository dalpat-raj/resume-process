import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import contact from "../assets/contact.jpg"
import Footer from "../components/Footer"
import Navbar from '../components/Navbar';

const Contact = () => {

  const form = useRef();
  const [clientMsg, setClientMsg] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5967k0s', 'template_9z7c2la', form.current, 'zW2qo1R1M7dda8MmW')
      .then((result) => {
          console.log(result.text);
          setClientMsg('Massege Successfully Send')
      }, (error) => {
          console.log(error.text);
      });
  };

  
  return (
    <>
    <Navbar/>
    <div className="container__fluid">
      <div className="contact__row">
        <div className="contact__col">
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <h2>{ clientMsg ? clientMsg : 'Contact' }</h2>
              <div className="box">
                <label>Name</label>
                <input ttype="text" name="user_name" placeholder='name'/>
              </div>
              <div className="box">
                <label>Email</label>
                <input  type="email" name="user_email"/>
              </div>
              <div className="box">
                <label>Message</label>
                <textarea  name="message" rows="8" placeholder='type your message...'/>
              </div>
              <div className="box">
                <button type="submit" value="Send" className='main_red_button' >Send</button>
              </div>
          </form>
        </div>

        <div className="contact__col">
          <div className="contact__img">
          <img src={contact} alt="resumebuildin.com" />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact