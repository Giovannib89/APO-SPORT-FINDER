export const SET_USER_INPUT_VALUE = 'SET_USER_INPUT_VALUE';
export const CREATE_USER = 'CREATE_USER';
export const CLICK_ON_BUTTON_SETTINGS = 'CLICK_ON_BUTTON_SETTINGS';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const CLICK_ON_BUTTON_LOG_IN = 'CLICK_ON_BUTTON_LOG_IN';

export const createUserSetInputValueAction = (newValue, name) => ({
  type: SET_USER_INPUT_VALUE,
  value: newValue,
  name: name,
});

export const createUserAction = () => ({ type: CREATE_USER });

export const clickOnButtonSettings = () => ({
  type: CLICK_ON_BUTTON_SETTINGS,
});

export const clickOnButtonLogIn = () => ({
  type: CLICK_ON_BUTTON_LOG_IN,
});


export const createUserSuccessAction = (data) => ({ type: CREATE_USER_SUCCESS, data });

export const createUserErrorAction = () => ({ type: CREATE_USER_ERROR });

export const createSetInputValueAction = (newValue, name) => ({
  type: SET_INPUT_VALUE,
  value: newValue,
  name: name,
});

export const createSubmitAction = () => ({ type: SUBMIT_LOGIN });

export const createLoginSuccessAction = (data) => ({ type: LOGIN_SUCCESS, data });

export const createLoginErrorAction = () => ({ type: LOGIN_ERROR });