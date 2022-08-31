import item1 from "../../../assets/images/food-item-1.jpeg";
import Quantity from "./Quantity/index";
import veg from "../../../assets/images/veg.png";

const Item = (props) => {
  return (
    <>
      <div className="single-item">
        <div className="details">
          <div className="meta">
            <img src={veg} alt="Veg item" />
          </div>
          <h3 className="name">{props.name}</h3>
          <h4 className="price">₹{props.price}</h4>
          <Quantity />
        </div>
        <div className="image">
          <img src={item1} alt="Item Image" />
        </div>
      </div>
    </>
  );
};

export default Item;
