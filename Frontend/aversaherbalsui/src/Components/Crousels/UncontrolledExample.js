import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../Assets/aversa-products/IMG_0918.jpeg";
import Image2 from "../../Assets/aversa-products/IMG_0922.jpeg";
import Image3 from "../../Assets/aversa-products/IMG_0928.jpeg";

import "./crousels.css";

const UncontrolledExample = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className="carousel-item">
            <div className="text">
              <h3>Slide 1</h3>
              <p>This is the text for Slide 1.</p>
            </div>
            <div className="image">
              <img src="Image1" alt="Slide 1" className="img-fluid" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item">
            <div className="text">
              <h3>Slide 2</h3>
              <p>This is the text for Slide 2.</p>
            </div>
            <div className="image">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Slide 2"
                className="img-fluid"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item">
            <div className="text">
              <h3>Slide 3</h3>
              <p>This is the text for Slide 3.</p>
            </div>
            <div className="image">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Slide 3"
                className="img-fluid"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default UncontrolledExample;
