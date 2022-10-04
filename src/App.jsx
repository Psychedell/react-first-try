import FoodCardList from "./components/foodCardList"
import Section from "./components/section"

const food = [{
  url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/28/1/FNM_040112-Copy-That-002_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541346030.jpeg",
  title: "Pizza Barbecue",
  price: 12.98,
  quantity: 5,
},
{
  url: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
  title: "Tacos With Lime",
  price: 10.99,
  quantity: 25,
    },
    {
  url: "https://grandkulinar.ru/uploads/posts/2019-07/1563632148_burger-kak-v-zakusochnoj-smehshburger.jpg",
  title: "Big Juicy Beef Burger",
  price: 5.45,
  quantity: 14,
}
]


export default function App() {
    return <div>
        <Section title="Top of the week">
            <FoodCardList items={food} />
        </Section>
        <Section />
    </div>
}