import React from "react";
import "./About.css";
import { Card, Col, Container, Row } from "react-bootstrap";
<<<<<<< HEAD
import Footer from "../../Components/Footer/Footer"
const About = () => {
  return (
    <div className="about-container">
       <Row className="align-items-center">
        
      <div className="about-section">
        <h2 className="aboutcon">About Us</h2>
        <p className="aboutcon">
          Welcome to Our Ayurvedic Company. We specialize in providing natural
          and holistic healthcare solutions inspired by ancient Ayurvedic
          practices Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis consequuntur quas delectus! Animi quam magnam accusantium
          deserunt odio et sint. Quibusdam quae unde, debitis accusantium fuga
          veritatis consectetur esse quos, commodi veniam, dignissimos iure
          inventore! Magnam consectetur a modi. Nulla non repellendus unde iure
          ducimus at porro inventore rerum sed?.
        </p>
      </div>
     
      <div className="mission-section">
        <h2 className="aboutcon">Our Mission</h2>
        <p className="aboutcon">
          Our mission is to promote health and wellness through Ayurveda by
          offering high-quality products and personalized wellness solutions
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quaerat
          accusantium dolorum fuga laudantium explicabo repellat blanditiis.
          Distinctio odit excepturi modi harum quam soluta quibusdam, nemo sunt
          perspiciatis molestiae dignissimos incidunt magnam vitae deserunt
          nulla laboriosam, quia adipisci praesentium perferendis ad eaque
          pariatur itaque asperiores iste? Libero similique laborum
          dignissimos!.
        </p>
      </div>
      <div className="values-section">
        <h2 className="aboutcon">Our Values</h2>
        <ul className="aboutcon">
          <li>Commitment to quality</li>
          <li>Respect for nature</li>
          <li>Empowering individuals to take control of their health</li>
          <li>Continuous innovation and improvement</li>
        </ul>
      </div>
      </Row >
      <div className="team-section" style={{display:"block", justifyItems:"center", alignItems:"center"}}>
        <div >
         
          <h2 style={{fontWeight:"bolder", fontStyle:"italic"}}> Our Team:</h2>
=======
import Footer from "../../Components/Footer/Footer";

const About = () => {
  return (
    <div className="about-container">
      <Row className="align-items-center">
        <div className="about-section">
          <h2 className="aboutcon">About Us</h2>
          <p className="aboutcon">
            Welcome to Our Ayurvedic Company. We specialize in providing natural
            and holistic healthcare solutions inspired by ancient Ayurvedic
            practices Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis consequuntur quas delectus! Animi quam magnam accusantium
            deserunt odio et sint. Quibusdam quae unde, debitis accusantium fuga
            veritatis consectetur esse quos, commodi veniam, dignissimos iure
            inventore! Magnam consectetur a modi. Nulla non repellendus unde
            iure ducimus at porro inventore rerum sed?.
          </p>
        </div>

        <div className="mission-section">
          <h2 className="aboutcon">Our Mission</h2>
          <p className="aboutcon">
            Our mission is to promote health and wellness through Ayurveda by
            offering high-quality products and personalized wellness solutions
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            quaerat accusantium dolorum fuga laudantium explicabo repellat
            blanditiis. Distinctio odit excepturi modi harum quam soluta
            quibusdam, nemo sunt perspiciatis molestiae dignissimos incidunt
            magnam vitae deserunt nulla laboriosam, quia adipisci praesentium
            perferendis ad eaque pariatur itaque asperiores iste? Libero
            similique laborum dignissimos!.
          </p>
        </div>
        <div className="values-section">
          <h2 className="aboutcon">Our Values</h2>
          <ul className="aboutcon">
            <li>Commitment to quality</li>
            <li>Respect for nature</li>
            <li>Empowering individuals to take control of their health</li>
            <li>Continuous innovation and improvement</li>
          </ul>
        </div>
      </Row>
      <div className="team-section">
        <div>
          <h2>Our Team</h2>
>>>>>>> c8718559b1603d041a2ae0ae37431b3f923f7ea2
        </div>

        <Row>
          <Col sm={4} className="mb-2">
            <div className="team-member">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQY9OL38FHPKucWTlkXqHdwd4__RhbYgEOIw&usqp=CAU"
                alt="Team Member 1"
              />
              <h3>John Doe</h3>
              <p>Founder & Ayurvedic Practitioner</p>
            </div>
          </Col>
          <Col sm={4} className="mb-2">
            <div className="team-member">
              <img
                src="data:image/jpeg;base64,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"
                alt="Team Member 2"
              />
              <h3>Jane Smith</h3>
              <p>Product Development Manager</p>
            </div>
          </Col>
          <Col sm={4} className="mb-2">
            <div className="team-member">
              <img
                src="data:image/jpeg;base64,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"
                alt="Team Member 3"
              />
              <h3 className="honarao">Michael Johnson</h3>
              <p>Customer Support Executive</p>
            </div>
          </Col>
        </Row>
      </div>
<<<<<<< HEAD
      <Footer/>
=======
      <div>
        <Footer />
      </div>
>>>>>>> c8718559b1603d041a2ae0ae37431b3f923f7ea2
    </div>
  );
};

export default About;
