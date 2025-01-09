import React from 'react'
import { Link } from 'react-router-dom';
import personal1 from './images/personal1.png'
import busiloan from './images/busiloan.png'
import onlinebanking from './images/onlinebanking.png'
import './available.css';
const Available = () => {
  return (
    <>
    <div className='logo'>
        <img className='logos' src={personal1}></img>
        <Link className='home-link' to="/personal">SAVINGS & CDS</Link>
        <img className='logos' src={busiloan}></img>
        <Link className='home-link' to="/business">BUSINESS LOAN</Link>
        <img className='logos' src={onlinebanking}></img>
        <Link className='home-link' to="/onlineservice">ONLINE BANKING</Link>
    </div>
    </>
  )
}

export default Available;