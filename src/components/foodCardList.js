import FoodCard from "./foodCard";
import PropTypes from "prop-types";

export default function foodCardList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.title}>
          <FoodCard
            url={item.url}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

foodCardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ),
};
