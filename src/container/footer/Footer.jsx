import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='gpt3__footer section_padding'>
      <div className='gpt3__footer-heading'>
        <h1 className="gradient__text">
        Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Acess</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
          
        </div>
      
        <div className="gpt3__footer-links_div">
          <h4>Contact</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Counters</p>
          <p>Contact</p>
          
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>K2 mountains nanga parbat</p>
          <p>03117781369</p>
          <p>aqibyameen644@gmail.com</p>
          
          
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    
    </div>
  )
}

export default Footer
