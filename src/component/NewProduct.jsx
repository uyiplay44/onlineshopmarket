import React from "react";
import { Link } from "react-router-dom";

function NewProduct(props) {
  const { Photo, title, amount } = props.data;
  return (
    <div className="newprod">
      <div>
        <div className="newprod_img">
          <Link to="/">
            <img src={Photo} alt="images" />
          </Link>
          <a href="/" className="new__quick">
            Quick View
          </a>
        </div>
        <div className="newprod__details">
          <h3>{title}</h3>
          <div className="newprod_amount_tag">
            <span className="newprod_amount">${amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
