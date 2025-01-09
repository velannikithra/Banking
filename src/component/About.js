import React from 'react'
import about from './images/about.jpg'
import { Link } from 'react-router-dom';
import personal1 from './images/personal1.png'
import busiloan from './images/busiloan.png'
import onlinebanking from './images/onlinebanking.png'
import Available from './available';
import './about.css'

const About = () => {
  return (
    <>
    <div>
      <img className='abouts' src={about}></img>
    </div>
    <h1 className='about'>About Our Banking Company</h1>
    <h2 className='tittles'>Our Mission</h2>
    <p className='para'>Our Banking company is an independent community bank that was chartered in Metz, Missouri in 1906 and has been in business continuously since that time. Metz Banking Company Staff pride themselves on fast, friendly and personal service . A new building was built on the corner of Walnut and Osage Blvd. in Nevada, Missouri in 2001 to better serve our customers. Our Metz location is still operating and continues to serve our customers who live in and around the Metz area.  Metz Banking Company is a full service community bank which offers a full line of banking services including but not limited to: checking accounts, certificates of deposits, savings, IRA accounts, consumer loans, commercial loans and all types of real estate loans.
    The mission of Metz Banking Company is to meet the financial needs of our customers.  We will meet this mission by offering products of the highest quality and services of a caliber that exceeds our customers expectations. Its Simply our Commitment to you.</p>
   <p className='paras'>Here to help you with all your banking needs!</p>
   
    <div className='logo'>
        <img className='logos' src={personal1}></img>
        <Link className='home-link' to="/personal">SAVINGS & CDS</Link>
        <img className='logos' src={busiloan}></img>
        <Link className='home-link' to="/business">BUSINESS LOAN</Link>
       
    </div>
    </>
  )
}

export default About