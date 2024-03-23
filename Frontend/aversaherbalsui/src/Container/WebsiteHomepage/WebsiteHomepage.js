import React from "react";
import "./WebsiteHomepage.css";
import { Container, Col, Row, Card } from "react-bootstrap";
import landingImage from "../../Assets/herbalmarketinproduct.jpg";
import happyguyimage from "../../Assets/joinbusiness.jpg";
import ProductsCarousal from "../../Components/ProductsCarousal/ProductsCarousal";
import { FiArrowRightCircle } from "react-icons/fi";
import CompanyInfoCarousal from "../../Components/CompanyInfoCarousal/CompanyInfoCarousal";

const WebsiteHomepage = () => {
  return (
    <div className="background-color-of-application">
      <Container>
        <div>
          <Row className="align-items-center">
            <Col sm={6}>
              <h1 className="aversa-herbals-head-tag">
                Welcome to Aversa Herbals: Where Nature Meets Wellness
              </h1>
              <p className="aversa-herbals-para-tag-one">
                Discover a world of well-being at Aversa Herbals, your trusted
                destination for premium herbal products. Immerse yourself in the
                healing power of nature and embark on a journey towards a
                healthier, more natural lifestyle.
                <br />
                At Aversa Herbals, we are passionate about bringing you the
                purest herbal remedies that Mother Nature has to offer. Our
                products are meticulously crafted to elevate your well-being,
                providing a harmonious blend of traditional wisdom and modern
                science.
              </p>
            </Col>
            <Col sm={6}>
              <img alt="" src={landingImage} className="landing-page-image" />
            </Col>
          </Row>
        </div>

        {/* <div className="mt-5">
            <CompanyInfoCarousal/>
        </div> */}

        <div className="mt-5">
          <h1
            className="aversa-herbals-head-tag"
            style={{ textAlign: "center" }}
          >
            Why Choose Aversa Herbals?
          </h1>
          <div className="mt-5">
          <CompanyInfoCarousal/>
          </div>

          <Card className="mt-3" style={{width:"100%"}}>
            <Card.Body style={{width:"100%"}}>
              <div>
                <h1 className="aversa-herbals-head-tag-two">
                  🌿 Natural Wellness :
                </h1>
                <p className="aversa-herbals-para-tag-two">
                  Elevate your health with our thoughtfully curated herbal
                  products, carefully formulated for a holistic approach to
                  well-being.
                </p>
              </div>
              <div>
                <h1 className="aversa-herbals-head-tag-two">
                  🌱 Premium Quality :
                </h1>
                <p className="aversa-herbals-para-tag-two">
                  Experience the purity of nature with our products, each held
                  to the highest standards of quality and authenticity.
                </p>
              </div>
              <div>
                <h1 className="aversa-herbals-head-tag-two">
                  🌏 Sustainable Living :
                </h1>
                <p className="aversa-herbals-para-tag-two">
                  Aversa Herbals is committed to sustainability. Our
                  eco-friendly practices ensure that you contribute to a
                  healthier planet while nurturing your own health.
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="mt-5">
          <h1
            className="aversa-herbals-head-tag"
            style={{ textAlign: "center" }}
          >
            Explore Our Products
          </h1>
          <p
            className="aversa-herbals-para-tag-two"
            style={{ textAlign: "center", margin: "0" }}
          >
            Dive into a world of herbal wonders. From soothing teas to
            revitalizing supplements, our collection is designed to cater to
            your unique wellness needs.
          </p>
          <div>
            <ProductsCarousal />
          </div>
        </div>

        <div className="mt-5">
          <h1
            className="aversa-herbals-head-tag"
            style={{ textAlign: "center" }}
          >
            Unlock the Secrets of Herbal Living with Aversa Herbals
          </h1>
          <p
            className="aversa-herbals-para-tag-two"
            style={{ textAlign: "center", margin: "0px" }}
          >
            Discover the boundless wonders of herbal wisdom and embrace a
            holistic approach to well-being with Aversa Herbals. Our curated
            collection of herbal products is more than just a range; it's a
            journey into the heart of nature's healing power.
          </p>
          <Row>
            <Col sm={4} className="mt-5">
              <Card style={{ height: "100%",width:"100%" }}>
                <Card.Body style={{ height: "100%",width:"100%" }}>
                  <div>
                    <h1 className="aversa-info-text-logo">🌿</h1>
                    <h1 className="aversa-herbals-head-tag-two">
                      {" "}
                      Nourish Your Body, Naturally
                    </h1>
                    <p
                      className="aversa-herbals-para-tag-two"
                      style={{ padding: "0px", textAlign: "justify" }}
                    >
                      Explore the countless benefits of herbal living as we
                      delve into the rejuvenating properties of our herbal
                      products. From supporting immune health to promoting
                      radiant skin, each Aversa Herbals remedy is crafted with
                      care to nourish your body from within.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} className="mt-5">
              <Card style={{ height: "100%",width:"100%" }}>
                <Card.Body style={{ height: "100%" ,width:"100%"}}>
                  <div>
                    <h1 className="aversa-info-text-logo">🌺</h1>
                    <h1 className="aversa-herbals-head-tag-two">
                      {" "}
                      Holistic Wellness
                    </h1>
                    <p
                      className="aversa-herbals-para-tag-two"
                      style={{ padding: "0px", textAlign: "justify" }}
                    >
                      Immerse yourself in the holistic approach of herbal
                      living. Aversa Herbals embraces the concept that true
                      wellness encompasses the mind, body, and spirit. Discover
                      herbal remedies that promote balance and vitality,
                      supporting your overall well-being.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} className="mt-5">
              <Card style={{ height: "100%",width:"100%" }}>
                <Card.Body style={{ height: "100%",width:"100%" }}>
                  <div>
                    <h1 className="aversa-info-text-logo">🌼</h1>
                    <h1 className="aversa-herbals-head-tag-two">
                      {" "}
                      Harmony for Mind and Soul
                    </h1>
                    <p
                      className="aversa-herbals-para-tag-two"
                      style={{ padding: "0px", textAlign: "justify" }}
                    >
                      Experience the soothing tranquility that herbal living
                      brings to your mind and soul. Aversa Herbals believes in
                      the holistic balance between nature and wellness. Dive
                      into the world of herbal teas, calming infusions, and
                      stress-relief elixirs that will elevate your mental
                      well-being.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} className="mt-5">
              <Card style={{ height: "100%",width:"100%" }}>
                <Card.Body style={{ height: "100%",width:"100%" }}>
                  <div>
                    <h1 className="aversa-info-text-logo">🍃</h1>
                    <h1 className="aversa-herbals-head-tag-two">
                      {" "}
                      Nature's Pharmacy at Your Fingertips
                    </h1>
                    <p
                      className="aversa-herbals-para-tag-two"
                      style={{ padding: "0px", textAlign: "justify" }}
                    >
                      Unlock the secrets of our herbal pharmacy, where each
                      product is a testament to the potency of nature's
                      remedies. Our herbal formulations are meticulously crafted
                      to harness the therapeutic benefits of botanical wonders,
                      ensuring you get the best of what nature has to offer.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} className="mt-5">
              <Card style={{ height: "100%" ,width:"100%"}}>
                <Card.Body style={{ height: "100%",width:"100%" }}>
                  <div>
                    <h1 className="aversa-info-text-logo">📚</h1>
                    <h1 className="aversa-herbals-head-tag-two">
                      Read Our Herbal Blog
                    </h1>
                    <p
                      className="aversa-herbals-para-tag-two"
                      style={{ padding: "0px", textAlign: "justify" }}
                    >
                      Delve deeper into the world of herbal living through our
                      insightful blog posts and articles. Learn about the
                      science behind herbal remedies, discover tips for
                      incorporating herbs into your daily routine, and stay
                      updated on the latest trends in natural wellness.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} className="mt-5">
              <Card style={{ height: "100%",width:"100%" }}>
                <Card.Body style={{ height: "100%",width:"100%" }}>
                  <div>
                    <h1 className="aversa-info-text-logo">🌱</h1>
                    <h1 className="aversa-herbals-head-tag-two">
                      {" "}
                      Embrace a Herbal Lifestyle
                    </h1>
                    <p
                      className="aversa-herbals-para-tag-two"
                      style={{ padding: "0px", textAlign: "justify" }}
                    >
                      Ready to embark on a herbal journey? Aversa Herbals
                      invites you to embrace a lifestyle that aligns with the
                      wisdom of nature. Let our herbal products be your
                      companions on the path to a healthier, happier you.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        <div className="mt-5">
          <h1
            className="aversa-herbals-head-tag"
            style={{ textAlign: "center" }}
          >
            Aversa Herbal Network - Your Gateway to Wellness and Wealth
          </h1>
          <Row className="align-items-center mt-5">
            <Col sm={6}>
              <img alt="" src={happyguyimage} className="happy-guy-image" />
            </Col>
            <Col sm={6}>
              <Card style={{width:"100%"}}>
                <Card.Body style={{height:"100%",width:"100%"}}>
                  <p className="aversa-herbals-para-tag-one">
                    There are a lot of reasons to become a Aversa Herbal
                    Independent Associate. Maybe you want a part-time business
                    that gives you the flexibility to spend time with friends
                    and family. Or maybe you’re interested in starting, growing
                    and running your business from anywhere in the world. And
                    along the way, you’ll experience the positive impact you’ll
                    be making to help people live their best lives.
                    <br />
                    <br />
                    Building a Aversa Herbal business as an Independent
                    Associate gives you an opportunity to grow on your terms*.
                    We offer you to help develop skills to serve, inspire,
                    empower your customers and, if you like, offer help to other
                    Aversa Herbal Associates who share your commitment. As you
                    grow in your Aversa Herbal journey, you can unlock new ways
                    to earn income**.
                    <br />
                    <br />
                    Join Aversa Herbal today, and embrace a future where
                    creativity knows no bounds. Let your goals become your
                    reality.
                  </p>
                  <br/>
                  <p className="aversa-herbals-para-tag-three" style={{textAlign:"left",color:"#1c324a",fontSize:"1.5rem"}}>
                  Ready to transform lives and your future? Join the Aversa Herbal Network today! 🌿✨
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div style={{ textAlign: "right" }} className="mt-3">
        <button className="see-all-buttone">
          <FiArrowRightCircle /> Join Now
        </button>
      </div>
        </div>
      </Container>
    </div>
  );
};

export default WebsiteHomepage;
