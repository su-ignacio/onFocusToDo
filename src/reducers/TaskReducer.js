import {
  DELETE_TASK, 
  EDIT_TASK, 
  GET_TASK, 
  ADD_TASK
} from '../actions/types';

const INITIAL_CONDITION = {
  tasks: []
}

export default TaskReducer = (state = INITIAL_CONDITION, action) => { 
  switch (action.type) {
    case GET_TASK:
      return { ...state, tasks: action.payload };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    case EDIT_TASK:
      return { ... state, tasks: state.tasks.map((task) => {
        return task.id === action.payload.id ? action.payload : task })}
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, {...action.payload, id: state.tasks.length++ }]}
    default:
      return state;
  }
}

