import React, { useState } from "react";
import "./CompanyInfoCarousal.css";
import WellnessGirls from "../../Assets/wellnessgirls.jpg";
import { Button, Card, Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { FiArrowRightCircle } from "react-icons/fi";
import { FiArrowLeftCircle } from "react-icons/fi";


function CompanyInfoCarousal() {
  const [index, setIndex] = useState(0);
  const totalSlides = 3;

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleCustomPrev = () => {
    // setIndex(index - 1);
    setIndex(index === 0 ? totalSlides - 1 : index - 1);
  };

  const handleCustomNext = () => {
    // setIndex(index + 1);
    setIndex(index === totalSlides - 1 ? 0 : index + 1);
  };
  return (
    <div>
      <Carousel
        data-bs-theme="light"
        controls={false}
        activeIndex={index}
        wrap={true}
        onSelect={handleSelect}
        indicators={false}
        indicatorClassName="carousel-indicator-black"
      >
        <Carousel.Item>
          <div>
            <Row>
              <Col sm={6} className="p-0">
                <img
                  alt=""
                  src={WellnessGirls}
                  className="company-info-carousal-images"
                />
              </Col>
              <Col sm={6} className="p-0">
                <Card
                  className="custom-card-classname"
                >
                  <Card.Body>
                    <h1 className="aversa-herbals-head-tag">
                      Wellness approach
                    </h1>
                    <p className="aversa-herbals-para-tag-one">
                      When you care for all aspects of your life – body, mind
                      and future – you're on your way to living your best life.
                      At Aversa Herbal, we want to help you get there.
                      <br />
                      <br />
                      Our science-backed products help you nourish a healthy
                      active life.
                      <br />
                      <br />
                      Our Aversa Herbal Independent Associates support and motivate
                      you to realise your full potential.
                      <br />
                      <br />
                      Our business model provides you with the opportunity to
                      earn extra income or build a business of your own.*
                    </p>
                    <br />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <Row>
              <Col sm={6} className="p-0">
                <img
                  alt=""
                  src={WellnessGirls}
                  className="company-info-carousal-images"
                />
              </Col>
              <Col sm={6} className="p-0">
                <Card
                  //   style={{ marginTop: "180px",marginLeft:"-95px" }}
                  className="custom-card-classname"
                >
                  <Card.Body>
                    <h1 className="aversa-herbals-head-tag">
                      Wellness approach
                    </h1>
                    <p className="aversa-herbals-para-tag-one">
                      When you care for all aspects of your life – body, mind
                      and future – you're on your way to living your best life.
                      At Aversa Herbal, we want to help you get there.
                      <br />
                      <br />
                      Our science-backed products help you nourish a healthy
                      active life.
                      <br />
                      <br />
                      Our Aversa Herbal Independent Associates support and motivate
                      you to realise your full potential.
                      <br />
                      <br />
                      Our business model provides you with the opportunity to
                      earn extra income or build a business of your own.*
                    </p>
                    <br />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <Row>
              <Col sm={6} className="p-0">
                <img
                  alt=""
                  src={WellnessGirls}
                  className="company-info-carousal-images"
                />
              </Col>
              <Col sm={6} className="p-0">
                <Card
                  //   style={{ marginTop: "180px",marginLeft:"-95px" }}
                  className="custom-card-classname"
                >
                  <Card.Body>
                    <h1 className="aversa-herbals-head-tag">
                      Wellness approach
                    </h1>
                    <p className="aversa-herbals-para-tag-one">
                      When you care for all aspects of your life – body, mind
                      and future – you're on your way to living your best life.
                      At Aversa Herbal, we want to help you get there.
                      <br />
                      <br />
                      Our science-backed products help you nourish a healthy
                      active life.
                      <br />
                      <br />
                      Our Aversa Herbal Independent Associates support and motivate
                      you to realise your full potential.
                      <br />
                      <br />
                      Our business model provides you with the opportunity to
                      earn extra income or build a business of your own.*
                    </p>
                    <br />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Carousel.Item>
      </Carousel>
      <div style={{display:"flex",gap:"20px",justifyContent:"end"}} className="button-of-carousal-flex">
      {/* <Button variant="secondary" onClick={handleCustomPrev}>
        Custom Prev
      </Button> */}
      
      {/* <button className="see-all-buttone" > */}
          <FiArrowLeftCircle onClick={handleCustomPrev} style={{height:"35px",width:"35px"}}/>
          <FiArrowRightCircle onClick={handleCustomNext} style={{height:"35px",width:"35px"}}/>
        {/* </button> */}
      </div>
    </div>
  );
}

export default CompanyInfoCarousal;
