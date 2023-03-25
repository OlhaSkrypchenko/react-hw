import './toDo.css';

function ToDo({ task, id, handlerDelete, handlerDone, isChecked }) {
  return (
    <div className='task-container'>
      <label
        className={`task ${isChecked ? 'checked' : ''}`}
        id={id}>
        <input
          className='checkbox'
          type='checkbox'
          onClick={(e) => {
            handlerDone(e, id);
          }}
        />
        <span className='task-description'>{task}</span>
      </label>
      <button
        className='btn-remove'
        onClick={() => handlerDelete(id)}>
        &#8722;
      </button>
    </div>
  );
}

export default ToDo;
