import './button.css'

function Button({type, children, handlerEvent, item}) {
    return <button className={`btn btn-${type}`} onClick={()=>handlerEvent(item)}>{children}</button>
} 

export default Button;