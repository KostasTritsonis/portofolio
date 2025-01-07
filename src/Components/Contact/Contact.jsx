import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bqaq3j6', 'template_hmf47rj', form.current, {
        publicKey: '4jBmxUEuIvfN354jq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          document.getElementById('name').value = '';
          document.getElementById('email').value = '';
          document.getElementById('subject').value = '';
          document.getElementById('message').value = '';

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  

  return (
    <form ref={form} onSubmit={sendEmail} className='contact'>
        <h1>CONTACT</h1>
        <div className="info">
            <input name='name' id="name"   type="text" placeholder='Name' required />
            <input name='email' id="email" type="text" placeholder='Email' required />
            <input name='subject' id="subject"   type="text" placeholder='Subject' required />
            <textarea name='message' id="message" type="text" placeholder='Message' ></textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default Contact