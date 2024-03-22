import React from "react";
import productsData from "../../API/images.json";
import { Button, Card, Col, Row } from "react-bootstrap";
import "../../Components/ProductPage/ProductPage.css";

const TempProducts = () => {
  return (
    //     <div>
    //       <div>
    //         <h1>Products</h1>
    //         {productsData.map((product) => (
    //           <div key={product.id}>
    //             <h2>{product.name}</h2>
    //             <p>Price: ${product.price}</p>
    //             <p>{product.description}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    // --------------------------------------------------------------------------------------
    <Row>
      {productsData.map((product) => (
        <Col sm={4} className="mt-5" key={product.id}>
          <Card>
            <Card.Img
              variant="top"
              src={product.url} // Corrected to access image URL from each product
              alt={product.title} // Corrected to access title from each product
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
  );
};

export default TempProducts;
