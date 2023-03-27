import { useCallback, useReducer } from 'react';
import { initialState, reducer } from './reducer';

function useToDoList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = useCallback((newTask) => {
    if (newTask.length > 0) {
      dispatch({
        type: 'ADD_TASK',
        payload: { task: newTask },
      });
    }
  }, []);

  const handleRemoveTask = useCallback((id) => {
    dispatch({
      type: 'REMOVE_TASK',
      payload: { id },
    });
  }, []);

  const handleDone = useCallback((e, id) => {
    e.stopPropagation();
    dispatch({
      type: 'TOGGLE_TASK',
      payload: { id },
    });
  }, []);

  return { state, addTask, handleDone, handleRemoveTask };
}

export default useToDoList;
