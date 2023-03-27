import './App.css';

import ToDo from './components/ToDo/ToDo';
import AddTaskInput from './components/AddTaskInput/AddTaskInput';
import useToDoList from './hooks/useToDoList';

function App() {
  
  const [tasks, addTask, handleDone, handleRemoveTask] = useToDoList();

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
