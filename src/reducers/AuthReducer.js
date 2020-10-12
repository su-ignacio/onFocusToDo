import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  email: 'test@onFocus.com',
  password: 'pass',
  user: null,
  errorMessage: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload, errorMessage:'' };
    case LOGIN_USER_FAIL:
      return { ...state, errorMessage: 'Authentication Failed' };
    default:
      return state;
  }
};