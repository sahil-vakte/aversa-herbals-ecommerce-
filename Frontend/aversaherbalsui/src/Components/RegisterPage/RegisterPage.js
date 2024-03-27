import React from 'react';
import './RegisterPage.css'; // Import your CSS file for styling if needed

const RegisterPage = () => {
  return (
    <div className="register-container">
      <div className="content">
        <h2>Register</h2>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input className='intext' type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input className='intext' type="text" id="lastName" name="lastName" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className='intext' type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input className='intext' type="tel" id="contactNumber" name="contactNumber" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className='intext' type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
              <label htmlFor="street">Street</label>
              <input className='intext' type="text" id="street" name="street" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input className='intext' type="text" id="city" name="city" required />
            </div>
            <div className="form-group">
              <label htmlFor="district">District</label>
              <input className='intext' type="text" id="district" name="district" required />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input className='intext' type="text" id="state" name="state" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input className='intext' type="text" id="country" name="country" required />
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode</label>
              <input className='intext' type="text" id="pincode" name="pincode" required />
            </div>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
      <div className="aside">
        <h3>Content Aside</h3>
        <p>This is some additional content you want to display aside from the registration form.</p>
      </div>
    </div>
  );
}

export default RegisterPage;
