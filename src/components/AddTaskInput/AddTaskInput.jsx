import './addTaskInput.css';
import Button from '../Button/Button';

function AddTaskInput({valueText, handlerOnChange, handlerOnKeyDown, handlerButtonEvent}) {
    return (
        <div className='input-container'>
        <input
          className='input'
          type='text'
          placeholder='Add new task'
          value={valueText}
          onChange={handlerOnChange}
          onKeyDown={handlerOnKeyDown}
        />
        <Button type='add' handlerEvent={handlerButtonEvent}>+</Button>
      </div>
    )
}

export default AddTaskInput;