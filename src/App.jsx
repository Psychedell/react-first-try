import FoodCard from "./components/foodCard"

const food = {
  url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/28/1/FNM_040112-Copy-That-002_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541346030.jpeg",
  title: "Pizza Barbecue",
  price: "12.98",
};

const food2 = {
  url: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
  title: "Tacos With Lime",
  price: "10.99",
};

const food3 = {
  url: "https://grandkulinar.ru/uploads/posts/2019-07/1563632148_burger-kak-v-zakusochnoj-smehshburger.jpg",
  title: "Big Juicy Beef Burger",
  price: "5.45",
};


export default function App() {
    return <div>
        <FoodCard
            url={food.url}
            title={food.title}
            price={food.price}
        />

        <FoodCard
            url={food2.url}
            title={food2.title}
            price={food2.price}
        />

        <FoodCard
            url={food3.url}
            title={food3.title}
            price={food3.price}
        />
    </div>
}