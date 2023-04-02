import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './article.css';
import { getDateFormat } from '../../reusableFunctions/reusableFunctions';

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/db.json')
      .then((response) => {
        setIsLoading(false);
        const article = response.data.find((el) => el.id === +id);
        if (article) {
          setArticle(response.data.find((el) => el.id === +id));
        } else {
          throw new Error();
        }
        
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div className='loading'>Loading ...</div>
      ) : isError ? (
        <Navigate to='/'/>
      ) : (
        <div className='article-container'>
          <section className='title-section'>
            <h1 className='article-title'>{article.title}</h1>
            <p className='article-description'>{article.description}</p>
            <span className='article-author'>{`By ${article.author.name}`}</span>
          </section>
          <section className='article-content'>
            <div className='date-container'>
              <span className='article-date'>
                {getDateFormat(article.published_at)}
              </span>
              <span className='reading-time'>{`${article.reading_time} minutes`}</span>
            </div>
            <div className='article'>
              <article>{article.text}</article>
              <div className='article-category'>{article.category.title}</div>
              <div className='author article-author-content'>
                <img
                  src={article.author.avatar}
                  alt='avatar'
                  className='avatar'
                />
                <div className='author-info'>
                  <span className='author-name'>
                    <span>By </span>
                    {article.author.name}
                  </span>
                  <span className='author-position'>
                    {article.author.position}
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default Article;
