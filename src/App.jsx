import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/card/Card";

const url = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4772f7f8-ae41-4825-8c75-50ecd4ebd0ef/articles.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230322T131530Z&X-Amz-Expires=86400&X-Amz-Signature=ae786caf0f9bf766f967a91f7edae6c19561eaa9689cbe0cb9b232ede7d58f15&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22articles.json%22&x-id=GetObject';

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
