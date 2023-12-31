import React from 'react'

import './Contact.css'

const Contact = () => {
  return (
    <div>
      <section className="contactTop">
        Get in touch
      </section>

      <section className="contactInfo">
        <div className="contactTitle">Contact Info</div>
        <div className="contactUnder">I do my best to respond within two business days.</div>
        <div className="mailPhone">email@example.com</div>
        <div className="mailPhone">(555) 555-5555</div>
      </section>

      <section className="contactMap">
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.6875344983223!2d23.908277212193497!3d37.750474113441285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1edabef3bee31%3A0x6cd642474798b825!2sPosidonos%2021%2C%20Saronida%20190%2013!5e0!3m2!1sen!2sgr!4v1703782897050!5m2!1sen!2sgr" width="900" height="500" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="mapInfo">
          <div className="myOffice">My office</div>
          <div className="mailPhone">Posidonos 21</div>
          <div className="mailPhone">Saronida, GR 19013</div>
          <div className="hours">Hours</div>
          <div className="mailPhone">Monday-Friday</div>
          <div className="mailPhone">10am-6pm</div>
        </div>
      </section>
    </div>
  )
}

export default Contact