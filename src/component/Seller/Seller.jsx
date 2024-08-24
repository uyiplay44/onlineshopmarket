import React from "react";
import "./Seller.css";
import { SALES } from "../../Item";
import { Product } from "../Product";
import { Link } from "react-router-dom";

export const Seller = () => {
  return (
    <div className="sell__container">
      <div className="sell__header">
        <div className="sell___title__head">
          <h2>Our Best Seller</h2>
        </div>
        <Link className="sell__link">View All Best Sellers</Link>
      </div>
      <div className="sell_main">
        {SALES.map((product, i) => (
          <div key={i} className="sell_title">
            <Product data={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
