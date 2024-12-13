import React from 'react'
import './Contact.css'


const Contact = () => {
  return (
    <div className='contact'>
        <h1>CONTACT</h1>
        <div className="info">
            <input name='name'   type="text" placeholder='Name' required />
            <input name='email' type="text" placeholder='Email' required />
            <textarea name='message' type="text" placeholder='Message' ></textarea>
        </div>
        <button>Submit</button>
    </div>
  )
}

export default Contact