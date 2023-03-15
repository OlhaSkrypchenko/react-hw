import './card.css';
import Button from "../button/Button";
import HeartButton from "../heartButton/HeartButton"

function Card({...props}){
    const sale = props.hasSale ? <div className="sale"></div> : '';
    const inStock = props.canBuy? <Button isLight={true}text="buy now" /> : '';
    return (
        <>
            <div className="card">
                <div className="extraInfo">
                    {sale}
                    <HeartButton></HeartButton>
                </div>
                
                <img src={props.imageSrc} alt="" />
                <h3 className="card-title">{props.title}</h3>
                <p className="card-description">{props.description}</p>
                <div className="prices-container">
                    <span className="card-price">{props.price}</span>
                    {props.hasSale ? <span className="card-previous_price">{props.previousPrice}</span> : ''}
                </div>
                
                <div className="button-container">
                    <Button isLight={false} text="learn more" />
                    {inStock}
                </div>
               
            </div>
        </>
    )
}

export default Card;