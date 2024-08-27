import "./DisplaySection.css";
import Men from "../../assests/shop-men-image-thumbnail.jpg";
import Women from "../../assests/shop-women-image-tumbnail.jpg";
import { useNavigate } from "react-router";

function DisplaySection() {
  let navigate = useNavigate();

  function handleClickMen() {
    navigate("/men");
  }

  function handleClickWomen() {
    navigate("/women");
  }

  return (
    <div className="display">
      <div className="display___section">
        <div className="displaymain">
          <img src={Men} alt="Men" />
          <div className="displaytitle">
            <h2>Men</h2>
            <button className="btn" onClick={handleClickMen}>
              shop men
            </button>
          </div>
        </div>
        <div className="displaymain">
          <img src={Women} alt="Women" />
          <div className="displaytitle">
            <h2>Women</h2>
            <button className="btn" onClick={handleClickWomen}>
              shop women
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplaySection;
