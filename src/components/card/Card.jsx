import './card.css';
import Button from "../button/Button";
import HeartButton from "../heartButton/HeartButton"

function Card({hasSale, canBuy, imageSrc, title, description, previousPrice, price, id}){
    return (
            <div className="card">
                <div className="extraInfo">
                    { hasSale ? <div className="sale"></div> : null}
                    <HeartButton id={id}/>
                </div>
                
                <img src={imageSrc} alt="goods-item" />
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <div className="prices-container">
                    <span className="card-price">${price}</span>
                    {hasSale && previousPrice ? <span className="card-previous_price">${previousPrice}</span> : null}
                </div>
                
                <div className="button-container">
                    <Button text="learn more" />
                    {canBuy? <Button isLight text="buy now" /> : null}
                </div>
          </div>
    )
}

export default Card;