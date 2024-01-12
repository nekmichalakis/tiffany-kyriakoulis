import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className='footerContainer'>
        <div className="footerTitle">Your Name & Credentials</div>
        <p>email@example.com</p>
        <p>(555) 555-5555</p>
    </div>
    <p className="credits">
        © 2023 Your Business Name, LLC. All rights reserved.
    </p>
    </>
  )
}

export default Footer