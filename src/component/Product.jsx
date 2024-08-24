import React from "react";
import { Link } from "react-router-dom";

export const Product = (props) => {
  const { Img, title, amount, oldprice } = props.data;
  return (
    <div className="prod">
      <div>
        <div className="prod_img">
          <Link to="/">
            <img src={Img} alt="images" />
          </Link>
          <a href="/" className="quick">
            Quick View
          </a>
        </div>
        <div className="prod__details">
          <h3>{title}</h3>
          <div className="prod_amount_tag">
            <span className="prod_old">${oldprice}</span>
            <span className="prod_amount">${amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
