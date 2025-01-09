import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './footer.css';
const Footer = () => {
  return (
   <>
    <div className='container'>
        <div className='footer-content'>

            <h3 className='header.link'>Contact Us</h3>
            <pf className='foot-link'>Email:goldenbank@gmail.com</pf>
            <pf className='foot-link'>Phone:#91 417-667-4550.</pf>
            <pf className='foot-link'>No.13A,West street,Chennai.</pf>
        </div>
         <div className='footer-content'>
            <h3 className='header.link'>Quick Links</h3>
            <ul className='list'>
        <Link className='foot-link' to="/">Home</Link>
         <Link className='foot-link' to="/about">About</Link>
          <Link className='foot-link' to="/personal">Personal Banking</Link>
          <Link className='foot-link' to="/business">Business Banking</Link>
          
            </ul>
         </div>
         <div className='footer-content'>
            <h3 className='header.link'>Follow Us</h3>
            <Link className='foots-link' to="http://www.facebook.com"><i className='fa fa-facebook'></i></Link>
            <Link className='foots-link' to="http://www.twitter.com"><i className='fa fa-twitter'></i></Link>
            <Link className='foots-link' to="http://www.instagram.com"><i className='fa fa-instagram'></i></Link>
            <Link className='foots-link' to="http://www.linkedin.com"><i className='fa fa-linkedin'></i></Link>
         </div>
         </div>
            <div>
            <pf className='bottom-bar'>@copy;2024 your company.All rights reserved.</pf>
            </div>
            </>
         
         
           
            
  )
}

export default Footer;