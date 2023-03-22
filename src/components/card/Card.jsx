import "./card.css";

function getDateFormat(str) {
  const date = new Date(str).toLocaleDateString();
  const arr = date.split("/").map((el) => {
    if (el.length === 1) {
      el = `0${el}`;
    }

    return el;
  });

  const [month, day, year] = arr;

  return `${day}.${month}.${year}`;
}

function Card({
  categoryId,
  image,
  category,
  title,
  date,
  description,
  avatar,
  name,
  position,
}) {
  return (
    <div className="card" id={categoryId}>
      <span className="category">{category.toUpperCase()}</span>
      <img src={image} alt="img" />
      <div className="info">
        <span className="date">{getDateFormat(date)}</span>
        <h4 className="title">{title}</h4>
        <p className="description">{description}</p>
      </div>
      <div className="author">
        <img src={avatar} alt="avatar" className="avatar" />
        <div className="author-info">
          <span className="author-name">
            <span>By </span>
            {name}
          </span>
          <span className="author-position">{position}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
