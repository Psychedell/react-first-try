import PropTypes from "prop-types";
import defaulImg from "./placeholder_600x400.jpg";

export default function FoodCard({ url = defaulImg, title, price, quantity }) {
  return (
    <div>
      <img src={url ?? defaulImg} alt={title} width="640" />
      <h2>{title}</h2>
      <p>price: {true && price}$</p>
      <p>Available: {quantity < 10 ? "ends soon" : "more then 10 available"}</p>
      <button type="button">Add to cart</button>
    </div>
  );
}

FoodCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
