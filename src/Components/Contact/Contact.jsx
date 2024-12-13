import React from 'react'
import './Contact.css'


const Contact = () => {
  return (
    <form className='contact' action="https://formspree.io/f/xgvebbbq"
    method="POST">
        <h1>CONTACT</h1>
        <div className="info">
            <input name='name'   type="text" placeholder='Name' required />
            <input name='email' type="text" placeholder='Email' required />
            <textarea name='message' type="text" placeholder='Message' ></textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default Contact