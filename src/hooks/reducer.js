export const initialState = {
  tasks: [],
  uniqueId: 0,
};

export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK': {
      const { task } = action.payload;
      const newTask = { task, id: state.uniqueId, isDone: false };
      return {
        ...state,
        tasks: [newTask, ...state.tasks],
        uniqueId: state.uniqueId + 1,
      };
    }
    case 'REMOVE_TASK': {
      const { id } = action.payload;
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== id),
      };
    }
    case 'TOGGLE_TASK': {
      const { id } = action.payload;
      const currentTask = state.tasks.find((task) => task.id === id);
      const toggledTask = { ...currentTask, isDone: !currentTask.isDone };
      return {
        ...state,
        tasks: toggledTask.isDone
          ? [...state.tasks.filter((task) => task.id !== id), toggledTask]
          : [toggledTask, ...state.tasks.filter((task) => task.id !== id)],
      };
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
