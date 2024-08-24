import React from "react";
import "./Aboutsection.css";
import { Link } from "react-router-dom";
import Img1 from "../../assests/img1.jpg";

function Aboutsecition() {
  return (
    <div className="AboutContainer">
      <div className="AboutMain">
        <div className="AboutImg">
          <img src={Img1} alt="" />
        </div>
        <div className="About__Tag">
          <div className="About__head">
            <h2>About Us</h2>
          </div>
          <div className="About__head__title">
            <h3>Selected materials designed for comfort and sustainability</h3>
          </div>
          <div className="About__page___title">
            <p>
              Nullam auctor faucibus ridiculus dignissim sed et auctor sed eget
              auctor nec sed elit nunc, magna non urna amet ac neque ut quam
              enim pretium risus gravida ullamcorper adipiscing at ut magna.
            </p>
            <div className="About___link">
              <Link>Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutsecition;
