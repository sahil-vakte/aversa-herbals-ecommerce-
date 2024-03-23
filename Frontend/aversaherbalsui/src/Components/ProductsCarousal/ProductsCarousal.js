import React, { useState, useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import { FiArrowRightCircle } from "react-icons/fi";

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
          products.slice(0, 6).map((product) => (
            <Col sm={4} className="mt-5">
              <Card style={{width:"100%"}}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  style={{ height: "100%", width: "100%" }}
                />
                <Card.Body style={{width:"100%"}}>
                  <Card.Title className="aversa-herbals-head-tag-two">
                    <div>{product.title}</div>
                    <div>
                      ₹ 1199{" "}
                      <span style={{ color: "gray", fontSize: "13px" }}>
                        MRP (incl. of all taxes)
                      </span>
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
