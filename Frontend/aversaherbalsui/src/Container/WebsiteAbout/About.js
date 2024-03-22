import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <h2 className='aboutcon'>About Us</h2>
        <p className='aboutcon'>Welcome to Our Ayurvedic Company. We specialize in providing natural and holistic healthcare solutions inspired by ancient Ayurvedic practices Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur quas delectus! Animi quam magnam accusantium deserunt odio et sint. Quibusdam quae unde, debitis accusantium fuga veritatis consectetur esse quos, commodi veniam, dignissimos iure inventore! Magnam consectetur a modi. Nulla non repellendus unde iure ducimus at porro inventore rerum sed?.</p>
      </div>
      <div className="mission-section">
        <h2 className='aboutcon'>Our Mission</h2>
        <p className='aboutcon'>Our mission is to promote health and wellness through Ayurveda by offering high-quality products and personalized wellness solutions Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quaerat accusantium dolorum fuga laudantium explicabo repellat blanditiis. Distinctio odit excepturi modi harum quam soluta quibusdam, nemo sunt perspiciatis molestiae dignissimos incidunt magnam vitae deserunt nulla laboriosam, quia adipisci praesentium perferendis ad eaque pariatur itaque asperiores iste? Libero similique laborum dignissimos!.</p>
      </div>
      <div className="values-section">
        <h2 className='aboutcon'>Our Values</h2>
        <ul className='aboutcon'>
          <li>Commitment to quality</li>
          <li>Respect for nature</li>
          <li>Empowering individuals to take control of their health</li>
          <li>Continuous innovation and improvement</li>
        </ul>
      </div>
      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-member">
          <img src="team-member1.jpg" alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>Founder & Ayurvedic Practitioner</p>
        </div>
        <div className="team-member">
          <img src="team-member2.jpg" alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>Product Development Manager</p>
        </div>
        <div className="team-member">
          <img src="team-member3.jpg" alt="Team Member 3" />
          <h3 className='honarao'>Michael Johnson</h3>
          <p>Customer Support Executive</p>
        </div>
      </div>
    </div>
  );
};

export default About;
