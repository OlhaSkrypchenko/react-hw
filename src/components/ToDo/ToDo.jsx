import './toDo.css';
import Button from '../Button/Button';

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
      <Button type='remove' handlerEvent={handlerDelete} item={id}>&#8722;</Button>
    </div>
  );
}

export default ToDo;
