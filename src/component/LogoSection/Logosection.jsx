import React from "react";
import "./Logosection.css";
import Label1 from "../../assests/recycled-shoe-store-featured-in-logo-1.svg";
import Label2 from "../../assests/recycled-shoe-store-featured-in-logo-2.svg";
import Label3 from "../../assests/recycled-shoe-store-featured-in-logo-3 (1).svg";
import Label4 from "../../assests/recycled-shoe-store-featured-in-logo-4.svg";
import Label5 from "../../assests/recycled-shoe-store-featured-in-logo-5.svg";

function Logosection() {
  return (
    <div className="logoslect">
      <div className="logosection">
        <h1>As seen in:</h1>
        <img src={Label1} alt="lable" />
        <img src={Label2} alt="label" />
        <img src={Label3} alt="label" />
        <img src={Label4} alt="label" />
        <img src={Label5} alt="label" />
      </div>
    </div>
  );
}

export default Logosection;
