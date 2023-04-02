import { useState, useEffect, useCallback } from 'react';
import './mainPage.css';
import axios from 'axios';
import Card from '../card/Card';
import { Link } from 'react-router-dom';

const postsUrl = '/db.json';
const categoriesUrl = '/categories.json';
const defaultFilters = { title: 'All' };

function MainPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [titleIsLoading, setTitleIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    setIsLoading(true);
    axios
      .get(postsUrl)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error.message);
        setIsLoading(false);
      });

    
  }, []);

  useEffect(()=> {
    setTitleIsLoading(true);
    axios.get(categoriesUrl).then((response) => {
      setCategories([{ id: 0, title: 'All' }, ...response.data]);
      setTitleIsLoading(false);})
    .catch((error) => {
      setIsError(error.message);
      setTitleIsLoading(false);
    });
  }, [])

  const filterCards = useCallback(() => {
    if (filters.title === 'All') {
      setFilteredData([...data]);
    } else {
      setFilteredData(
        [...data].filter(
          (el) => el.category.title === filters.title
        )
      );
    }
  }, [data, filters.title]);

  useEffect(() => {
    filterCards();
  }, [filterCards]);

console.log(data);
  return (
    <>
      {isLoading || titleIsLoading ? (
        <div className='loading'>Loading ...</div>
      ) : isError.length > 0 ? (
        <p className='error'>{isError}</p>
      ) : (
        <div className='container'>
          <h1 className='main-title'>Popular topics</h1>
          <div className='categories'>
            {categories.map((el, index) => (
              <a
                href='/#'
                className={`category-title ${
                  el.title === filters.title ? 'picked' : ''
                }`}
                key={el.id}
                onClick={() => {
                  if (filters.title !== el.title) {
                    setFilters({ title: el.title });
                  }
                }}>
                {el.title}
              </a>
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
