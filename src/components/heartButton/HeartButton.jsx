import "./heartButton.css"
import { useState } from "react";

function HeartButton({id}) {
    const [isChoose, setIsChoose] = useState(() => Boolean(localStorage.getItem(`id${id}`)));
    const readHeart = isChoose ? "heart-clicked" : "";

    return (
        <button className={`heart ${readHeart}`} onClick={()=>setIsChoose((previousIsChoose) => {
            localStorage.setItem(`id${id}`, id);
            if (previousIsChoose) {
                localStorage.removeItem(`id${id}`);
            }
            return  !previousIsChoose;
            
        })}>
            <img src="/heart.png" alt="" />
        </button>
    )
}

export default HeartButton;