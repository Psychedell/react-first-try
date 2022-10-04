import defaulImg from "./placeholder_600x400.jpg";

export default function FoodCard({ url = defaulImg, title, price }) {
  return (
    <div>
      <img src={url} alt={title} width="640" />
      <h2>{title}</h2>
      <p>price: {price}</p>
      <button type="button">Add to cart</button>
    </div>
  );
}
