import './App.css';

import { useState, useCallback } from 'react';
import ToDo from './components/ToDo/ToDo';
import AddTaskInput from './components/AddTaskInput/AddTaskInput';

function App() {
  const [tasks, setTasks] = useState([]);
  const [uniqueId, setUniqueId] = useState(0);

  const addTask = useCallback(
    (newTask) => {
      if (newTask.length > 0) {
        setUniqueId((prev) => ++prev);
        setTasks((previousTasks) => [
          { task: newTask, id: uniqueId, isDone: false },
          ...previousTasks,
        ]);
      }
    },
    [uniqueId]
  );

  const handleRemoveTask = (id) => {
    setTasks((prev) => prev.filter((el) => el.id !== id));
  };

  const handleDone = (e, id) => {
    e.stopPropagation();
    const targetTask = tasks.find((el) => el.id === id);
    const switchDoneTask = { ...targetTask, isDone: !targetTask.isDone };

    if (switchDoneTask.isDone) {
      setTasks((prev) => [
        ...prev.filter((el) => el.id !== id),
        switchDoneTask,
      ]);
    } else {
      setTasks((prev) => [
        switchDoneTask,
        ...prev.filter((el) => el.id !== id),
      ]);
    }
  };

  return (
    <div className='container'>
      <h1 className='title'>ToDo List</h1>
      <AddTaskInput onAddTask={addTask} />
      {tasks.map((el) => (
        <ToDo
          task={el.task}
          key={el.id}
          id={el.id}
          handlerDelete={handleRemoveTask}
          handlerDone={handleDone}
          isChecked={el.isDone}
        />
      ))}
    </div>
  );
}

export default App;
