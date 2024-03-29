import React from "react";
import "./TempProducts.css";
// import { LinkButton } from "@babel/core";
// import productsData from "../../API/images.json";
import { Button, Card, Col, Row } from "react-bootstrap";
import "../../Components/ProductPage/ProductPage.css";
import img1 from "../../Assets/aversa-products/IMG_0915.jpeg";
import img2 from "../../Assets/aversa-products/IMG_0918.jpeg";
import img3 from "../../Assets/aversa-products/IMG_0919.jpeg";
import img4 from "../../Assets/aversa-products/IMG_0920.jpeg";
import img5 from "../../Assets/aversa-products/IMG_0922.jpeg";
import img6 from "../../Assets/aversa-products/IMG_0928.jpeg";
import img7 from "../../Assets/aversa-products/IMG_0929.jpeg";
import img8 from "../../Assets/aversa-products/IMG_0932.jpeg";
import img9 from "../../Assets/aversa-products/IMG_0933.jpeg";
import img10 from "../../Assets/aversa-products/IMG_0934.jpeg";
import img11 from "../../Assets/aversa-products/IMG_0937.jpeg";
import img12 from "../../Assets/aversa-products/IMG_0942.jpeg";
import img13 from "../../Assets/aversa-products/IMG_0943.jpeg";
import img14 from "../../Assets/aversa-products/IMG_0949.jpeg";
import img15 from "../../Assets/aversa-products/IMG_0956.jpeg";
import img16 from "../../Assets/aversa-products/IMG_0959.jpeg";
import img17 from "../../Assets/aversa-products/IMG_0960.jpeg";
import img18 from "../../Assets/aversa-products/IMG_0961.jpeg";
import img19 from "../../Assets/aversa-products/IMG_0962.jpeg";
import img20 from "../../Assets/aversa-products/IMG_0964.jpeg";
import img21 from "../../Assets/aversa-products/IMG_0928.jpeg";

const TempProducts = () => {
  const productsData = [
    {
      id: 1,
      title: "Red Aloe Vera Juice",
      url: img1,
    },
    {
      id: 2,
      title: "Natural Hair Oil",
      url: img2,
    },
    {
      id: 3,
      title: "Platelet Care Syrup",
      url: img3,
    },
    {
      id: 4,
      title: "Anti Addiction",
      url: img4,
    },
    {
      id: 5,
      title: "Kids Energy Powder",
      url: img5,
    },
    {
      id: 6,
      title: "Anti Pain Oil",
      url: img6,
    },
    {
      id: 7,
      title: "Paralysis Oil",
      url: img7,
    },
    {
      id: 8,
      title: "Omega-369",
      url: img8,
    },
    {
      id: 9,
      title: "Ortho Care",
      url: img9,
    },
    {
      id: 10,
      title: "Stone Crush Tablet",
      url: img10,
    },
    {
      id: 11,
      title: "Uric Acid",
      url: img11,
    },
    {
      id: 12,
      title: "Anti Diabetic Dietry Supplement",
      url: img12,
    },
    {
      id: 13,
      title: "PCOD Care Tablet",
      url: img13,
    },
    {
      id: 14,
      title: "Anti Diabetic Juice",
      url: img14,
    },
    {
      id: 15,
      title: "Men Charge Capsule",
      url: img15,
    },
    {
      id: 16,
      title: "Paralysis Tablet",
      url: img16,
    },
    {
      id: 17,
      title: "Renzova Capsule",
      url: img17,
    },
    {
      id: 18,
      title: "Thyroid Care",
      url: img18,
    },
    {
      id: 19,
      title: "Heart Care Tablet",
      url: img19,
    },
    {
      id: 20,
      title: "BP Care Tablet",
      url: img20,
    },
    {
      id: 21,
      title: "NONI Juice",
      url: img21,
    },
  ];
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
    <div className="contain">
      <div className="prdct-container">
        <Row>
          {productsData.slice(0, 6).map((product) => (
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
                    <div className="price-cart">
                      <p>
                        58$ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; - &nbsp; 0 &nbsp; +
                      </p>
                    </div>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="button-prdcts">
        <button className="join-now-button">See All Products ></button>
      </div>
    </div>
  );
};

export default TempProducts;
