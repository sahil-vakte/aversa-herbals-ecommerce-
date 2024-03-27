import React from 'react'
import "./LoginPage.css"
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

import Footer from "../../Components/Footer/Footer"
const loginPage = () => {
  return (
    <div>
    <div className='wrapper'>
        <div>
        <div className="additional-content">
        <h2>Welcome back!</h2>
        <p>  Please sign in to access your account and explore our exclusive range of herbal products and exciting business opportunities.</p>
      </div>
    </div>
  <form action="">
    <h1>Login</h1>
    <div className="input-box">
      <input type="text" placeholder='Username' required /> <FaUser />

    </div>
    
    <div className="input-box">
      <input type="password" placeholder='Password' required /><FaLock/>
    </div>
    <div className="remember-forgot">
      <label><input type="checkbox" />Remember me</label>
      <a href="#">Forgot password?</a>
    </div>
    <button type="submit">Login</button>
    <div className="register-link">
      Don't have an account? <Link to="/register" className="nav-link">
              Register
            </Link>
    </div>
  </form>
      

</div>


<div>
  <Footer/>
</div>
    </div>
  )
}

export default loginPage
