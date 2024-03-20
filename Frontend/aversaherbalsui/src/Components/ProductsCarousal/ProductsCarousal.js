import React, { useState, useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import { FiArrowRightCircle } from "react-icons/fi";
import "../../Container/WebsiteHomepage/WebsiteHomepage.css";

const ProductsCarousal = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://cosmosapi.medispacosmos.com/api/services/")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <div>
      <Row>
        {products &&
          products.slice(0, 9).map((product) => (
            <Col sm={4} className="mt-5">
              <Card>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  style={{ height: "100%", width: "100%" }}
                />
                <Card.Body>
                  <Card.Title className="aversa-herbals-head-tag-two">
                    <div className="aversa-herbals-head-tag-two">
                      {product.title}
                    </div>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <div style={{ textAlign: "right" }} className="mt-3">
        <button className="see-all-buttone">
          <FiArrowRightCircle /> See All Products
        </button>
      </div>
    </div>
  );
};

export default ProductsCarousal;
