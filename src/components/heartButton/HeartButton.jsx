import "./heartButton.css"
import { useState } from "react";

function HeartButton() {
    const [isChoose, setIsChoose] = useState(false);
    const readHeart = isChoose ? "heart-clicked" : "";

    return (
        <button className={`heart ${readHeart}`} onClick={()=>setIsChoose(!isChoose)}>
            <img src="/heart.png" alt="" />
        </button>
    )
}

export default HeartButton;