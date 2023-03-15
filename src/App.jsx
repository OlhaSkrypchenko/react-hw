import "./App.css";
import Card from "./components/card/Card";

const data = [
  {
    id: 1,
    title: "Dining Chair by esteban+moreno",
    description:
      "With a new design approach for flexible use: from a dinner for two to a big celebration.",
    price: 100,
    previousPrice: 120,
    imageSrc: "/chair.png",
    hasSale: true,
    canBuy: true,
  },
  {
    id: 2,
    title: "Underwater wearable watches",
    description:
      "An accessory for any occasion, from a nice dinner to an underwater swim.",
    price: 90,
    previousPrice: null,
    imageSrc: "/watch.png",
    hasSale: false,
    canBuy: false,
  },
  {
    id: 3,
    title: "Sac Marin Yellow",
    description:
      "Marinetmarine store backpack. The Sac Marin can be worn as a backpack or as a bag over one shoulder.",
    price: 108,
    previousPrice: null,
    imageSrc: "./bag.png",
    hasSale: false,
    canBuy: false,
  },
];

function App() {
  return (
    <div className="container">
      {data.map((el, index) => (
        <Card key={index} {...el}></Card>
      ))}
    </div>
  );
}

export default App;
