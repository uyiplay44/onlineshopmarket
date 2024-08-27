import React from "react";
import "./NewProductItem.css";
import { Link } from "react-router-dom";
import { Arrival } from "../../arrival";
import NewProduct from "../NewProduct";

function NewProductItem() {
  return (
    <div className="arrival__container">
      <div className="arrival__header">
        <div className="arrival___title__head">
          <h2>New Arrivals</h2>
        </div>
        <Link className="arrival__link">View All Best Sellers</Link>
      </div>
      <div className="arrival_main">
        {Arrival.map((item, i) => (
          <div key={i} className="arrival_title">
            <NewProduct data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewProductItem;
