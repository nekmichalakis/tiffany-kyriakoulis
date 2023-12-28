import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className='footerContainer'>
        <div className="footerTitle">Your Name & Credentials</div>
        <div className="mailPhone">email@example.com</div>
        <div className="mailPhone">(555) 555-5555</div>
    </div>
    <div className="credits">
        © 2023 Your Business Name, LLC. All rights reserved.
    </div>
    </>
  )
}

export default Footer