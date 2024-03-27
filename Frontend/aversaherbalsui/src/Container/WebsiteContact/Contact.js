import React, { useState } from "react";
import "./Contact.css";
import { RiFontSize } from "react-icons/ri";
import { Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Container>
      <div>
        {
          <div className="gettouch">
            <h1>Get In Touch</h1>
          </div>
        }
        <Row>
          <Col sm={4} className="mb-2">
            <Card
              style={{
                backgroundColor: "#166233",
                width: "100%",
                color: "white",
                marginLeft: "0",
                marginRight: "0",
                height: "100%",
              }}
            >
              <Card.Body>
                <h3>Contact</h3>

                <p>
                  T: + (406) 555-0120 <br />
                  E: support@example.com
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} className="mb-2">
            <Card
              style={{
                backgroundColor: "#166233",
                width: "100%",
                color: "white",
                marginLeft: "0",
                marginRight: "0",
                height: "100%",
              }}
            >
              <Card.Body>
                <h3>Hours</h3>
                <p>
                  Mon – Sat: 7.00 am – 8.00 pm <br />
                  Sunday: 8.00 am – 6.00 pm
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} className="mb-2">
            <Card
              style={{
                backgroundColor: "#166233",
                color: "white",
                width: "100%",
                marginLeft: "0",
                marginRight: "0",
                height: "100%",
              }}
            >
              <Card.Body>
                <h3>Location</h3>
                <h2>AVERSA HERBALS</h2>
                <p>
                  Plot No. -368, Niti Khand -1, Indira Puram, Ghaziabad,Uttar
                  Pradesh,Pincode - 201014
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="form-container mt-5">
          <Row className="align-items-center">
            <Col sm={6} className="mb-2">
              <h2 className="contactusbt">Contact Us</h2>
              <p className="contactusbt">
                Fill all information details to consult with us to get sevices
                from us :
              </p>
            </Col>
            <Col sm={6}>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Message:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </Col>
          </Row>
        </div>
        <div>
          <Footer />
        </div>
        {/* Footer */}
      </div>
    </Container>
  );
};

export default Contact;
