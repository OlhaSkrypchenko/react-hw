function ToDo({ task, id, handlerDelete, handlerDone, isChecked }) {
  return (
    <div className="container">
        <label className={`task ${isChecked? 'checked':''}`} id={id} onClick={()=> handlerDone(id)}>
            <input type="checkbox" />
            <span>{task}</span>
        </label>
        <button onClick={()=> handlerDelete(id)}>-</button>
    </div>
    
  );
}

export default ToDo;
