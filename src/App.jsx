import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/card/Card";

const url =
  "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4772f7f8-ae41-4825-8c75-50ecd4ebd0ef/articles.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230321T095114Z&X-Amz-Expires=86400&X-Amz-Signature=4a3b0406735de5065f054067fb798f26f45a3640ae6445249354e487609872be&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22articles.json%22&x-id=GetObject";

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
      {isLoading ? (<div className="loading">Loading ...</div>) : 
        (
          <div className="container">
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
        )
      }
      {isError.length > 0 && <p className="error">{isError}</p>}
    </>
  );
}

export default App;
