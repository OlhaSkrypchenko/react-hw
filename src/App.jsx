import "./App.css";

import ToDo from "./components/ToDo/ToDo";
import { useState } from "react";
import { useCallback } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [uniqueId, setUniqueId] = useState(0);


  const addNewTask = useCallback( ()=> {
    if(newTask.length > 0) {
      setUniqueId((prev=> ++prev));
      setTasks((previousTasks) => [{task: newTask, id: uniqueId, isDone: false}, ...previousTasks]);
    }

    setNewTask('');
  }
  , [newTask, uniqueId])

  const handleChange = (e) => setNewTask(e.target.value);
  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      addNewTask();
   }
  }

  const handleRemoveTask= (id)=> {
    setTasks((prev) => prev.filter(el => el.id !== id));
  }
   
  const handleDone = (id)=> {
    const doneTask = tasks.filter(el => el.id === id);
    doneTask[0].isDone = !doneTask[0].isDone;
    if (doneTask[0].isDone) {
      setTasks((prev)=> [...prev.filter(el => el.id !== id), ...doneTask]);
    } else {
      setTasks((prev)=> [...doneTask, ...prev.filter(el => el.id !== id)]);
    }
    
    
  }

  
  console.log(tasks);

  return (
    <div className="container">
      <h1 className="title">ToDo List</h1>
      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="Add new task"
            value={newTask}
          onChange={handleChange} 
          onKeyDown={handleKeyDown}
          />
        <button className='btn-add' onClick={addNewTask}>+</button>
        
      </div>
      {tasks.map((el) => <ToDo task={el.task} key={el.id} id={el.id} handlerDelete={handleRemoveTask} handlerDone={handleDone} isChecked={el.isDone}/>)}
    </div>
  );
}

export default App;