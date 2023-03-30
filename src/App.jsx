import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/card/Card";

const url = '/db.json';

const topics = [
  { category: "all", id: 0, isPicked: true },
  { category: "adventure", id: 1, isPicked: false  },
  { category: "travel", id: 2, isPicked: false },
  { category: "fashion", id: 3, isPicked: false },
  { category: "technology", id: 4, isPicked: false  },
  { category: "branding", id: 5, isPicked: false },
];

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error.message);
        setIsLoading(false);
      });
  }, [setData, setIsError]);

  return (
    <>
      {isLoading ? (
        <div className="loading">Loading ...</div>
      ) : isError.length > 0 ? <p className="error">{isError}</p> : (
        <div className="container">
          <h1 className="main-title">Popular topics</h1>
          <div className="categories">
            {topics.map((el, index) => (
              <span className={`category-title ${el.isPicked ? 'picked': ''}`} key={index} name={el.id}>
                {el.category}
              </span>
            ))}
          </div>
          <div className="cards-container">
            {data.map((el) => (
              <Card
                key={el.id}
                categoryId={el.category_id}
                category={el.category.title}
                image={el.image}
                date={el.published_at}
                title={el.title}
                description={el.description}
                avatar={el.author.avatar}
                name={el.author.name}
                position={el.author.position}
              />
            ))}
          </div>
        </div>
      )}
      
    </>
  );
}

export default App;