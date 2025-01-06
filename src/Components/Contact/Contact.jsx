import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const sendEmail = () => {
    let params = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    }

    emailjs.send('service_bqaq3j6', 'template_hmf47rj', params).then(alert('Email sent successfully!'))
  }

  return (
    <form className='contact'>
        <h1>CONTACT</h1>
        <div className="info">
            <input name='name' id="name"   type="text" placeholder='Name' required />
            <input name='email' id="email" type="text" placeholder='Email' required />
            <textarea name='message' id="message" type="text" placeholder='Message' ></textarea>
        </div>
        <button onClick={sendEmail} type="submit">Submit</button>
    </form>
  )
}

export default Contact