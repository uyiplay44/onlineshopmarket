import React from "react";
import "./ItemCollect.css";
import Img2 from "../../assests/img2.png";

function ItemCollect() {
  return (
    <div className="ItemContainer">
      <div className="Item__main">
        <div className="Item__head">
          <h1>See how your shoes are made</h1>
          <div className="Item___title">
            <p>
              Urna, felis enim orci accumsan urna blandit egestas mattis egestas
              feugiat viverra ornare donec adipiscing semper aliquet integer
              risus leo volutpat nulla enim ultrices
            </p>
          </div>
        </div>
        <div className="Itemshow">
          <div className="Itemside">
            <div className="Item__title">
              <span>01.</span>
              <h1>Pet Canvas</h1>
              <p>
                Morbi eget bibendum sit adipiscing morbi ac nisl vitae maecenas
                nulla cursus.
              </p>
            </div>
            <div className="Item__title">
              <span>02.</span>
              <h1>Algae foam + vegan glue </h1>
              <p>Enim tincidunt donec vulputate magna pharetra mattis in</p>
            </div>
          </div>
          <div className="Item__img">
            <img src={Img2} alt="Item" />
          </div>
          <div className="Itemside1">
            <div className="Item__title1">
              <span>03.</span>
              <h1>Organic cotton</h1>
              <p>A vel ipsum, sed dignissim elementum ultrices amet</p>
            </div>
            <div className="Item__title1">
              <span>04.</span>
              <h1>Upcycled plastic bottles</h1>
              <p>
                Pellentesque viverra amet netus facilisis amet felis odio tortor
                orci cursus est
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCollect;
