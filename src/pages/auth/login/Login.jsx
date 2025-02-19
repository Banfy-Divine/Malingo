import React from 'react'

const Login = () => {
  return (
    <div className='container'>
        <div className="image-container">
            <img src="https://img.freepik.com/free-vector/friend-walking-with-pets-meeting-waving-hello-women-with-dog-cat-outside-flat-illustration_74855-10668.jpg?t=st=1739972760~exp=1739976360~hmac=8a291ace0d4dc61afc0c823d338596c94e9e110064eeab305dcfac5453d0adea&w=740" alt="" height="207px" width="326px"/>
            <h3>Find a companion</h3>
            <p>find a companion for your next adventure</p>
        </div>
        <div className="login-section">
            <div className="loginDescription">
                <img src='' alt='logo'/>
                <h3>Hello, again</h3>
                <p>please login to find a companion</p>
            </div>
            <div className="login-Form">
                <form action="" className="loginForm">
                    <label htmlFor="email">email</label>
                    <input type="email" />
                    <label htmlFor="password">password</label>
                    <input type="password" />
                    <p>Forgot password</p>
                    <button type='button' >Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login