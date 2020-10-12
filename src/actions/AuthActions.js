import {navigate} from '../navigationRef';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({ email, password }) => {
  //Ajax request generally

  if(email === 'test@onFocus.com' && password === 'pass') {
    return (dispatch) => {
      dispatch({type: LOGIN_USER_SUCCESS, payload: 'onFocusUser'});
      
      navigate('Tasks');
    }

  }else {
    return {type: LOGIN_USER_FAIL};
  }
}
