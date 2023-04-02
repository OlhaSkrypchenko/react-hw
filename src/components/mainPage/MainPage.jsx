import { useState, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './mainPage.css';
import Card from '../card/Card';
import Category from '../category/Category';

const getArticles = axios.get('/db.json');
const getCategories = axios.get('/categories.json');

function MainPage() {
  const { category = 'All' } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);

  useEffect(()=> {
    setIsLoading(true);
    Promise.all([getArticles, getCategories]).then(values => {
      const [dataValues, categoriesValues] = values;
      setData(dataValues.data);
      setCategories([{ id: 0, title: 'All' }, ...categoriesValues.data]);
      setIsLoading(false);
    }).catch((error)=> {
      setIsError(error.message);
        setIsLoading(false);
    });
  }, []);

  const filteredData= useMemo(()=>{
    if (category === 'All') {
     return([...data]);
    } else {
     return(
        [...data].filter((el) => el.category.title.toLowerCase() === category)
      );
    }
  }, [category, data]);

  return (
    <>
      {isLoading ? (
        <div className='loading'>Loading ...</div>
      ) : isError.length > 0 ? (
        <p className='error'>{isError}</p>
      ) : (
        <div className='container'>
          <h1 className='main-title'>Popular topics</h1>
          <div className='categories'>
            {categories.map((el) => (
              <Category
                title={el.title}
                id={el.id}
                key={el.id}
              />
            ))}
          </div>
          <div className='cards-container'>
            {filteredData.map((el) => (
              <Link
                to={`/article/${el.id}`}
                key={el.id}
                className='link'>
                <Card
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
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default MainPage;
