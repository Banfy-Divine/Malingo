import React from 'react'
import '../utils/styles/signup.css'
import { Link } from 'react-router-dom'

const Signups = () => {
  return (
    <div className="container">
        <div className="desc">
        <img src="C:\Users\MR JOSEPH\Desktop\projects\MALINGO\frontend\src\assets\images\malingo1.png" alt="" height="207px" width="326px"/>
          <h1>Turn Solo Adventures into Shared <br /> Memories - Find your Companion Today!</h1>
        </div>
        <div className="signup-desc">
            <div className="sgp">
              <h2>Sign Up</h2>
              <p>Find A Companion For Your Next Adventure</p>
            </div>
            <div className="sgp-form">
                <form action="" className="form">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" className='sgpInput'/>
                  <label htmlFor="email">Email</label>
                  <input type="email" className='sgpInput'/>
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="phoneNumber" className='sgpInput'/>
                  <label htmlFor="password">Password</label>
                  <input type="password" className='sgpInput'/>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input type="password" className='sgpInput'/>
                  <div className="remember">
                    <input type="checkbox" />Remember Me
                  </div>
                  <button className='btn-signup'>SIGN UP</button>
                  <p>Already have an account? {<Link to="/"><font color="red">Login</font></Link>}</p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signups