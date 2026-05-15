import React from 'react';
import './Contact.css'; // Assuming you'll add styles later
import { FaEnvelope, FaPhone, FaLocationPin } from "react-icons/fa6";
import logoBlack from '../assets/logo-black.png';


const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className='contact-header'><img src={logoBlack} alt="Logo" className="contact-logo" width= '100' height='100' />
        <h1>Get In Touch</h1></div>
        <p>Ready to bring your vision to life? Let's start a conversation</p>

        <div className="contact-content">

          
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" name="email" required />
              </div>
             
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell me about your project..." rows="9" required></textarea>
              </div >
              <div className='button-container'>
                <button type="submit" className="submit-btn">Send Message</button>

              </div>
              
            </form>
          </div>



          <div className="contact-info">
            <h2>Contact <br></br>Information</h2>
            <div className="info-item">
              <div className="icon-badge"><FaEnvelope style={{ color: 'black', width: '30px', height: '30px' }} /></div> 
              <div>
                <h3>Email</h3>
                <p>michael-eme@hotmail.de</p>
                <p>ieshawshank1@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon-badge"><FaPhone style={{ color: 'black', width: '30px', height: '30px' }} /></div>
              <div>
                <h3>Phone</h3>
                <p>+447760775089</p>
                <p>+2349094822090</p>
                <p>+2348129286231</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon-badge"><FaLocationPin style={{ color: 'black', width: '30px', height: '30px' }} /></div>
              <div>
                <h3>Address</h3>
                <p>Berliner Allee 8<br/> 30175 Hannover, Germany</p>
                <p>Plot 245 Liberty Boulevard<br/> Jos, Nigeria</p>
              </div>
            </div>
            
          </div>




        </div>
      </div>
    </div>
  );
};

export default Contact;