import './addTaskInput.css';
import Button from '../Button/Button';
import { useState } from 'react';

function AddTaskInput({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => setNewTask(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className='input-container'>
      <input
        className='input'
        type='text'
        placeholder='Add new task'
        value={newTask}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button
        type='add'
        handlerEvent={() => {
          onAddTask(newTask);
          setNewTask('');
        }}>
        +
      </Button>
    </div>
  );
}

export default AddTaskInput;
