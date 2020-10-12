import toDoApi from '../api/toDo';
import {
  GET_TASK, 
  DELETE_TASK, 
  EDIT_TASK, 
  ADD_TASK
} from './types';

export const getTask = () => (
  async (dispatch) => {
    await toDoApi
      .get('/todos')
      .then((response) => {
        dispatch({type: GET_TASK, payload: response.data});
      })
      .catch((e) => console.log(e))}
);

export const deleteTask = (id) => (
  dispatch => {  
    dispatch({type: DELETE_TASK, payload: id})
  }
);

export const editTask = (id, title, completed, userId, callback) => (
   dispatch => {
    dispatch({type: EDIT_TASK, payload: {id, title, completed, userId}});
    if (callback) {
      callback();
    }
  }
);

export const addTask = (title, completed, userId, callback) => (
  dispatch => {
    dispatch({ type: ADD_TASK, payload: { title, completed, userId }});
    if(callback) {
      callback();
    }
  }
);