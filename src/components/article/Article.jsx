import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function getDateFormat(str) {
  const date = new Date(str).toLocaleDateString();
  const arr = date.split('/').map((el) => {
    if (el.length === 1) {
      el = `0${el}`;
    }

    return el;
  });

  const [month, day, year] = arr;

  return `${day}.${month}.${year}`;
}

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/db.json')
      .then((response) =>{
        setIsLoading(false);
        setArticle(response.data.find(el => el.id === +id));
      });
  }, [id]);

  console.log(article);
  console.log(id);

  if(isLoading){
    return null;
  }


  return (
    <div className='container'>
      <section>
        <h1 className='article-title'>{article.title}</h1>
        <p className='article-description'>{article.description}</p>
        <span className='article-author'>{`By ${article.author.name}`}</span>
      </section>
      <section>
        <div className='date-container'>
          <span className='article-date'>
            {getDateFormat(article.published_at)}
          </span>
          <span className='reading-time'>{article.reading_time}</span>
        </div>
        <div className="article-container">
            <article>{article.text}</article>
            <span className="article-category">{article.category.title.toUpperCase()}</span>
            <div className="author">
        <img src={article.author.avatar} alt="avatar" className="avatar" />
        <div className="author-info">
          <span className="author-name">
            <span>By </span>
            {article.author.name}
          </span>
          <span className="author-position">{article.author.position}</span>
        </div>
      </div>
        </div>
      </section>
    </div>
  );
}

export default Article;
