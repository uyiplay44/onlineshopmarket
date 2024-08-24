import React from "react";
import "./HeroSection.css";

function Herosection() {
  return (
    <div className="Hero__section">
      <div className="Hero__container">
        <div className="hero__content">
          <h1>Love the Planet we walk on</h1>
          <p>
            Bibendum fermentum, aenean donec pretium aliquam blandit tempor
            imperdiet arcu arcu ut nunc in dictum mauris at ut.
          </p>
          <div className="hero__btn">
            <button>Shop Men</button>
            <button>Shop Women</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
