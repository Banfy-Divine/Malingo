import React from 'react'
import { Link } from 'react-router-dom'
import '../utils/styles/login.css'

const Login = () => {
  return (
    <div className='containerLogin'>
        <div className="image-container">
            <img src="C:\Users\MR JOSEPH\Desktop\projects\MALINGO\frontend\src\assets\images\malingo1.png" alt="" height="207px" width="326px"/>
            <h1>You've Got An Adventure You Want To Emback On, But No One With Whom You Can Go?</h1>
            <h2>Find A Companion For Your Next Adventure</h2>
        </div>
        <div className="login-section">
            <div className="loginDescription">
                <img src='C:\Users\MR JOSEPH\Desktop\projects\MALINGO\frontend\src\assets\images\malingo.png' alt='' />
                <h2>Welcome, Back <br /> <br /> Please Login To Find A Companion.</h2>
                {/* <h3>Please Login To Find A Companion</h3> */}
            </div>
            <div className="login-Form">
                <form action="" className="loginForm">
                    <label htmlFor="email">Email</label>
                    <input type="email" className='inputLogin' />
                    <label htmlFor="password">Password</label>
                    <input type="password" className='inputLogin' />
                    <div className="remember">
                        <input type="checkbox" />Remember me
                    </div>
                    <button className='btn'>Login</button>
                    <p>Don't have an account yet? {<Link to="/Signup"><font color="red">SignUp</font></Link>}</p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login