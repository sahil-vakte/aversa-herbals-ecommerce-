import React from "react";
import "./WebsiteHomepage.css";
import { Container, Col, Row, Card } from "react-bootstrap";
import landingImage from "../../Assets/hero1.png";
import happyguyimage from "../../Assets/joinbusiness.jpg";
import ProductsCarousal from "../../Components/ProductsCarousal/ProductsCarousal";
import { FiArrowRightCircle } from "react-icons/fi";
import CompanyInfoCarousal from "../../Components/CompanyInfoCarousal/CompanyInfoCarousal";
import Button from "react-bootstrap/Button";
import card1Img from "../../Assets/card1.png";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";

const WebsiteHomepage = () => {
  return (
    <div className="background-color-of-application">
      <Container>
        <div>
          <Row className="align-items-center">
            <Col sm={6}>
              <div className="herbals-head-tag">OUR SPECIALITY</div>
              <div className="aversa-herbals-para-tag-one">
                <div>GREEK</div> <div>MOUNTAIN TEA</div>
              </div>
              <div className="pricing-off-gift-cards-hero">
                Enjoy 20% OFF gift cards<br></br> no code needed
              </div>
              <div>
                <Button variant="success" className="hero-button">
                  Shop out teas >{" "}
                </Button>
              </div>
            </Col>

            <Col sm={6}>
              <img alt="" src={landingImage} className="landing-page-image" />
            </Col>
          </Row>
        </div>
        {/* Below div is for the cards below hero image */}
        <div className="card-container">
          <Card className="cardd">
            <Card.Body>
              <Card.Title>CAFFEINE FREE</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Herbal Teas
              </Card.Subtitle>

              <Card.Link href="#">Shop Now</Card.Link>
            </Card.Body>
          </Card>
          <Card className="cardd">
            <Card.Body>
              <Card.Title>METABOLIC BOOSTER</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Oolong Teas
              </Card.Subtitle>

              <Card.Link href="#">Shop Now</Card.Link>
            </Card.Body>
          </Card>
          <Card className="cardd">
            <Card.Body>
              <Card.Title>MALABAR COAST</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Masala Chai
              </Card.Subtitle>

              <Card.Link href="#">Shop Now</Card.Link>
            </Card.Body>
          </Card>
          <Card className="cardd">
            <Card.Body>
              <Card.Title>ANTIOXIDANT RICH</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Grean Teas
              </Card.Subtitle>

              <Card.Link href="#">Shop Now</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="card2-container">
          <div className="card2">
            <div className="herbals-head-tag">SINCE 1983</div>
            <div className="common-heding-green-tag">Heritage & Tradition</div>
            <div className="para-card2">
              Established in 1983, our Tea has been sourcing, manufacturing and
              distributing quality and affordable tea.
            </div>
            <div style={{ fontWeight: "bold" }}>Our Story > </div>
          </div>
          <div className="card2">
            <div className="herbals-head-tag">SINCE 1983</div>
            <div className="common-heding-green-tag">Heritage & Tradition</div>
            <div className="para-card2">
              Established in 1983, our Tea has been sourcing, manufacturing and
              distributing quality and affordable tea.
            </div>
            <div style={{ fontWeight: "bold" }}>Our Story > </div>
          </div>
          <div className="card2">
            <div className="herbals-head-tag">SINCE 1983</div>
            <div className="common-heding-green-tag">Heritage & Tradition</div>
            <div className="para-card2">
              Established in 1983, our Tea has been sourcing, manufacturing and
              distributing quality and affordable tea.
            </div>
            <div style={{ fontWeight: "bold" }}>Our Story > </div>
          </div>
        </div>
        <div className="middle-section-after-cards">
          <div className="featured-product">Featured Products</div>
          <div className="featured-product-para">
            Our range of gift boxes are elegantly packed, gorgeous to look at,
            and packed with the freshest indian teas.
          </div>
        </div>

        {/* <div className="mt-5">
            <CompanyInfoCarousal/>
        </div> */}
        <div className="mt-5">
          <div>
            <ProductsCarousal />
          </div>
        </div>
        <div className="mt-5">
          <h4>Why Choose our Teas</h4>
          <h1
            className="aversa-herbals-head-tag"
            style={{ textAlign: "center" }}
          >
            Aversa Herbal Network - Your Gateway to Wellness and Wealth
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
          {/* <Row>
            <Col sm={4} className="mt-5">
              <Card style={{ height: "100%" }}>
                <Card.Body style={{ height: "100%" }}>
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
              <Card style={{ height: "100%" }}>
                <Card.Body style={{ height: "100%" }}>
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
              <Card style={{ height: "100%" }}>
                <Card.Body style={{ height: "100%" }}>
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
              <Card style={{ height: "100%" }}>
                <Card.Body style={{ height: "100%" }}>
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
              <Card style={{ height: "100%" }}>
                <Card.Body style={{ height: "100%" }}>
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
              <Card style={{ height: "100%" }}>
                <Card.Body style={{ height: "100%" }}>
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
          </Row> */}
        </div>
        <div className="mt-5">
          {/* <Row className="align-items-center mt-5">
            <Col sm={6}>
              <img alt="" src={happyguyimage} className="happy-guy-image" />
            </Col>
            <Col sm={6}>
              <Card>
                <Card.Body style={{ height: "100%" }}>
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
                  <br />
                  <p
                    className="aversa-herbals-para-tag-three"
                    style={{
                      textAlign: "left",
                      color: "#1c324a",
                      fontSize: "1.5rem",
                    }}
                  >
                    Ready to transform lives and your future? Join the Aversa
                    Herbal Network today! 🌿✨
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row> */}
          <div style={{ textAlign: "right" }} className="mt-3">
            <button className="see-all-buttone">
              <FiArrowRightCircle /> Join Now
            </button>
          </div>
        </div>
        <div className="footer-container">
          <MDBFooter
            bgColor="light"
            className="text-center text-lg-start text-muted"
          >
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
              <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
              </div>

              <div>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="google" />
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="instagram" />
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="linkedin" />
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="github" />
                </a>
              </div>
            </section>

            <section className="">
              <MDBContainer className="text-center text-md-start mt-5">
                <MDBRow className="mt-3">
                  <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      <MDBIcon icon="gem" className="me-3" />
                      Company name
                    </h6>
                    <p>
                      Here you can use rows and columns to organize your footer
                      content. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit.
                    </p>
                  </MDBCol>

                  <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                    <p>
                      <a href="#!" className="text-reset">
                        Angular
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        React
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Vue
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Laravel
                      </a>
                    </p>
                  </MDBCol>

                  <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      Useful links
                    </h6>
                    <p>
                      <a href="#!" className="text-reset">
                        Pricing
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Settings
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Orders
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Help
                      </a>
                    </p>
                  </MDBCol>

                  <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <p>
                      <MDBIcon icon="home" className="me-2" />
                      New York, NY 10012, US
                    </p>
                    <p>
                      <MDBIcon icon="envelope" className="me-3" />
                      info@example.com
                    </p>
                    <p>
                      <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                    </p>
                    <p>
                      <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

            <div
              className="text-center p-4"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
              © 2021 Copyright:
              <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
                MDBootstrap.com
              </a>
            </div>
          </MDBFooter>
        </div>
      </Container>
    </div>
  );
};

export default WebsiteHomepage;
