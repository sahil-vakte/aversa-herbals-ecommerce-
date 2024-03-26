import React from "react";
import "./ProductPage.css";

import Footer from "../Footer/Footer";
import TempProducts from "../ProductsCrouselTemp/TempProducts";
import UncontrolledExample from "../Crousels/UncontrolledExample";

const ProductPage = () => {
  return (
    <div className="shop-container">
      <div className="hero-image">
        <div className="hero-text">
          <h1>Welcome to Our Shop</h1>
          <p>Explore our wide range of products</p>
        </div>
      </div>
      <div className="shop-categories-product-container">
        {/* <div className="categories">categoreis</div> */}
        <div className="products">
          <p>
            Choose from over 75 tea blends – from the classic Earl Grey to the
            award-winning Blueberry Merlot – our whole leaf teas are available
            in a variety of package types. We hope our teas provide you with
            some well-deserved comfort during your day.
          </p>

          <div className="products-crousel">
            <TempProducts />
          </div>
          <div className="hero-image-1">
            <div className="hero-text-1">
              <h1>Flat 50% Discount </h1>
              <p>
                hkslvowocnls lfnflF DEDN ldn DL DEK qckeclcc cQKC CQC QC cskncl
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;
