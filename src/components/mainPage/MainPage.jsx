import { useState, useEffect, useCallback } from 'react';
import './mainPage.css';
import axios from 'axios';
import Card from '../card/Card';
import { Link } from 'react-router-dom';

const url = '/db.json';

const defaultFilters = { category: 'all' };

function MainPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);
  const [filteredData, setFilteredData] = useState([]);

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

  const topics = [
    { category: 'all', id: 0 },
    { category: 'adventure', id: 1 },
    { category: 'travel', id: 2 },
    { category: 'fashion', id: 3 },
    { category: 'technology', id: 4 },
    { category: 'branding', id: 5 },
  ];

  const filterCards = useCallback(() => {
    if (filters.category === 'all') {
      setFilteredData([...data]);
    } else {
      setFilteredData(
        [...data].filter(
          (el) => el.category.title.toLowerCase() === filters.category
        )
      );
    }
  }, [data, filters.category]);

  useEffect(() => {
    filterCards();
  }, [filterCards]);

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
            {topics.map((el, index) => (
              <a
                href='#/'
                className={`category-title ${
                  el.category === filters.category ? 'picked' : ''
                }`}
                key={index}
                data-category-id={el.id}
                onClick={() => {
                  if (filters.category !== el.category) {
                    setFilters({ category: el.category });
                  }
                }}>
                {el.category}
              </a>
            ))}
          </div>
          <div className='cards-container'>
            {filteredData.map((el) => (
              <Link to={`/article/${el.id}`} key={el.id} className="link">
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
