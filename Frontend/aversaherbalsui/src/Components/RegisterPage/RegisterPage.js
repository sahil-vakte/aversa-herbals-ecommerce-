import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './RegisterPage.css'; // Import your CSS file for styling if needed
import footer from "../../Components/Footer/Footer"
import Footer from '../../Components/Footer/Footer';
const RegisterPage = () => {
  return (
    <div>
    <Container className="register-container">
      <Row>
        <Col>
          <div className="content">
            <h2>Register</h2>
            <form>
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
              <div className="form-group">
                <label htmlFor="contactNumber">Contact Number</label>
                <input className='intext' type="tel" id="contactNumber" name="contactNumber" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="street">Sponsor ID</label>
                <input className='intext' type="text" id="street" name="sponsor" required />
              </div>
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
             
              <div className="form-group">
                <label htmlFor="pincode">Pincode</label>
                <input className='intext' type="text" id="pincode" name="pincode" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className='intext' type="password" id="password" name="password" required />
              </div>
              <button type="submit">Register</button>
            </form>
          </div>
        </Col>
        <Col>
          <div className="aside">
            <h3>New to Aversa Herbals? Join Us Today!

</h3>
            <p>Become a part of our thriving community and embark on a journey towards wellness and prosperity. Join as a member to enjoy discounts on products, exclusive offers, and the chance to build your own business through our multi-level marketing (MLM) program.
</p>
          </div>
        </Col>
      </Row>
     
    </Container>
     <Footer/>
     </div>
  );
}

export default RegisterPage;
