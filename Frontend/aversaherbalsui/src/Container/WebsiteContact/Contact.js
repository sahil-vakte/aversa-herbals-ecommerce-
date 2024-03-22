import React, { useState } from "react";
import "./Contact.css";
import { RiFontSize } from "react-icons/ri";

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
    <div>
      {
        <div className="gettouch">
          <h1>Get In Touch</h1>
        </div>
      }
      <div className="footer">
        <div className="card" style={{ backgroundColor: "#166233" }}>
          <h3>Contact</h3>

          <p>
            T: + (406) 555-0120 <br />
            E: support@example.com
          </p>
        </div>
        <div className="card" style={{ backgroundColor: "#166233" }}>
          <h3>Hours</h3>
          <p>
            Mon – Sat: 7.00 am – 8.00 pm <br />
            Sunday: 8.00 am – 6.00 pm
          </p>
        </div>
        <div className="card" style={{ backgroundColor: "#166233", color: "white" }}>
          <h3>Location</h3>
          <h2>AVERSA HERBALS</h2>
          <p>
            Plot No. -368, Niti Khand -1, Indira Puram, Ghaziabad,Uttar
            Pradesh,Pincode - 201014
          </p>
        </div>
      </div>

      <div className="form-container">
        {" "}
        {/* Apply a class to center the form */}
        <div>
          <h2 className="contactusbt">Contact Us</h2>
          <p className="contactusbt">
            Fill all information details to consult with us to get sevices from
            us :
          </p>
        </div>
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
      </div>

      {/* Footer */}
    </div>
  );
};

export default Contact;
