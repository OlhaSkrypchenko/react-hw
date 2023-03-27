import { useState, useCallback } from 'react';

function useToDoList() {
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

  return [tasks, addTask, handleDone, handleRemoveTask];
}

export default useToDoList;
