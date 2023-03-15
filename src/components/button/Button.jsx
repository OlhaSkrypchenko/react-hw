import "./button.css";

function Button({ isLight, text }) {
  const buttonClassNames = isLight ? "light" : "dark";
  return <button className={buttonClassNames}>{text}</button>;
}

export default Button;
