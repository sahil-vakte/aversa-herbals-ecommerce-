import React from "react";
import "./Business.css";
import heroImg1 from "../../Assets/heroimg2.png";

const Business = () => {
  return (
    <div className="container">
      <div className="main-container">
        <div className="left-div">
          <h1 className="herbals-head-tag">
            Unlock Your Potential with Aversa Herbals
          </h1>
          <p className="aversa-herbals-para-tag-four">
            Are you ready to take control of your financial future while
            promoting wellness and vitality? At Aversa Herbals, we offer an
            exciting business opportunity that empowers individuals to build
            their own successful ventures through multi-level marketing (MLM).
          </p>
        </div>
        <div className="right-div">
          <img src={heroImg1} alt="Your Image" />
        </div>
      </div>
      <div className="main-container1">
        <div className="left-div1">
          <h1 className="herbals-head-tag">Why Aversa Herbals?</h1>
          <p className="aversa-herbals-para-tag-four">
            Exceptional Products: Partner with a company that is committed to
            delivering premium-quality herbal products crafted with care and
            backed by science. Our diverse range of herbal remedies caters to a
            wide range of wellness needs, ensuring that you have something for
            everyone in your network.
          </p>
        </div>
        {/* <div className="right-div1">
          <img src={heroImg1} alt="Your Image" />
        </div> */}

        <div className="info-section">
          <h2 className="aboutcon">Proven Success</h2>
          <p className="aboutcon">
            Join a company with a track record of success in the health and
            wellness industry. With Aversa Herbals, you'll have access to a
            proven business model that has helped countless individuals achieve
            financial independence and personal fulfillment.
          </p>
        </div>
        <div className="info-section">
          <h2 className="aboutcon">Lucrative Compensation Plan</h2>
          <p className="aboutcon">
            Earn generous commissions and bonuses through our lucrative
            compensation plan. As you grow your business and expand your
            network, you'll unlock new opportunities for earning potential and
            advancement.
          </p>
        </div>
        <div className="info-section">
          <h2 className="aboutcon">Training and Support</h2>
          <p className="aboutcon">
            Receive comprehensive training and ongoing support from our
            experienced team of industry professionals. Whether you're new to
            entrepreneurship or a seasoned business owner, we're here to provide
            you with the guidance and resources you need to thrive.
          </p>
        </div>
        <div className="business-opportunity-page">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <h3>Join</h3>
              <p>
                Sign up as an independent distributor and become a part of our
                growing community of entrepreneurs.
              </p>
            </div>
            <div className="step">
              <h3>Share</h3>
              <p>
                Share our high-quality products and business opportunity with
                others through word-of-mouth marketing and networking.
              </p>
            </div>
            <div className="step">
              <h3>Earn</h3>
              <p>
                Earn commissions on product sales and bonuses based on the
                growth and performance of your team.
              </p>
            </div>
            <div className="step">
              <h3>Grow</h3>
              <p>
                Expand your business by building a strong network of
                distributors and customers. As you help others succeed, you'll
                also reap the rewards of their success.
              </p>
            </div>
          </div>
        </div>
        <div className="business-opportunity-page2">
          <div className="benefits-section">
            <h2>Who Can Benefit?</h2>
            <ul>
              <li>
                <strong>Health Enthusiasts:</strong> Individuals passionate
                about natural wellness and holistic living who want to share
                their knowledge and promote healthier lifestyles.
              </li>
              <li>
                <strong>Entrepreneurs:</strong> Aspiring entrepreneurs looking
                for a low-risk, high-reward business opportunity with flexible
                working hours and unlimited earning potential.
              </li>
              <li>
                <strong>Community Builders:</strong> Leaders who thrive on
                building connections, fostering relationships, and making a
                positive impact in their communities.
              </li>
            </ul>
          </div>
          <div className="join-section">
            <h2>Join the Aversa Herbals Family Today</h2>
            <p>
              Ready to embark on a journey towards financial freedom and
              personal fulfillment? Join the Aversa Herbals family today and
              discover the rewards of entrepreneurship with a purpose. Take the
              first step towards a brighter future for yourself and those you
              care about.
            </p>
            <button className="join-now-button">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
