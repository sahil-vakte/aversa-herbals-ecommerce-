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
          <h1>Welcome to the Aversa Herbals Product Collection</h1>
          {/* <p>Explore our wide range of products</p> */}
        </div>
      </div>
      <div className="shop-categories-product-container">
        {/* <div className="categories">categoreis</div> */}
        <div className="products">
          <p>
            Discover a world of natural wellness with our curated selection of
            premium herbal remedies. From time-tested traditional formulas to
            innovative blends backed by modern science, each Aversa Herbals
            product is crafted with care to support your journey towards optimal
            health and vitality.
          </p>

          <div className="products-crousel">
            <TempProducts />
          </div>
          <div className="hero-image-1">
            <div className="hero-text-1">
              <h1>Exciting News: Aversa Herbals Launches with a Bang!</h1>
              <p>
                Get ready to elevate your wellness journey with Aversa Herbals –
                and enjoy an irresistible 50% LAUNCHING DISCOUNT on our entire
                range of premium herbal products!
              </p>
            </div>
          </div>
          <div className="product-page">
            <div className="section">
              <h2>Why Choose Aversa Herbals?</h2>
              <p>
                Premium Quality: We're committed to sourcing the finest herbs
                and botanicals from trusted suppliers worldwide to ensure
                purity, potency, and effectiveness in every product.
              </p>
            </div>
            <div className="section">
              <h2>Scientifically Formulated</h2>
              <p>
                Backed by a team of experts in herbal medicine and nutritional
                science, our formulas are carefully crafted to deliver optimal
                results without compromising on safety or efficacy.
              </p>
            </div>
            <div className="section">
              <h2>Ethical and Sustainable</h2>
              <p>
                We prioritize ethical sourcing practices and sustainable
                manufacturing processes to minimize our environmental footprint
                and support the communities we serve.
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
