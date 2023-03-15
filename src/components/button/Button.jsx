import "./button.css"

function Button({isLight, text}) {
    const buttonStyle = isLight ? 'light' : 'dark';
    return <button className={buttonStyle}>{text}</button>
}

export default Button;