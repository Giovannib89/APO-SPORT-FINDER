/* eslint-disable import/no-unresolved */
// == Import : local
import {
  SET_USER_INPUT_VALUE,
  CLICK_ON_BUTTON_SETTINGS,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  CREATE_PASSWORD_ERROR,
  SET_INPUT_VALUE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CLICK_ON_BUTTON_LOG_IN,
  CLICK_ON_BUTTON_LOG_UP,
  CLICK_ON_BUTTON_LOG_OUT,
  CLICK_ON_BUTTON_DELETE_PROFILE,
  CLICK_ON_BUTTON_EDIT_PROFILE,
  CLICK_ON_BUTTON_EDIT_PASSWORD,
  CLICK_ON_BUTTON_PRIVACY_DATA,
  CLICK_ON_BUTTON_CLOSE_SIGN_IN,
  CLICK_ON_BUTTON_CLOSE_SIGN_UP,
  CLICK_ON_BUTTON_CLOSE_SETTINGS,
  CLICK_ON_BUTTON_CLOSE_EDIT_PROFILE,
  CLICK_ON_BUTTON_CLOSE_EDIT_PASSWORD,
  CLICK_ON_BUTTON_CLOSE_DELETE_PROFILE,
  CLICK_ON_BUTTON_CLOSE_PRIVACY_DATA,
  DELETE_PROFILE_SUCCESS,
  DELETE_PROFILE_ERROR,
  DELETE_PASSWORD_CONFIRM_VALUE,
  UPDATE_PSEUDO_VALUE,
  UPDATE_PSEUDO_SUCCESS,
  UPDATE_ERROR,
  UPDATE_PASSWORD_VALUE,
  UPDATE_PASSWORD_CONFIRM_ERROR,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_ERROR,
  UPDATE_PASSWORD_LENGTH_ERROR,
  CREATE_PASSWORD_LENGTH_ERROR,
  CLOSE_MODAL_DELETE,
} from 'src/actions/user';
import {
  CLICK_ON_NEW_SEARCH,
  RESULT_API_RNA_SUCCESS,
} from 'src/actions/search';
import {
  GET_ALL_REVIEWS_SUCCESS,
  CLICK_ON_BUTTON_ADD_REVIEW,
  CLICK_ON_BUTTON_UPDATE_REVIEW,
  CLICK_ON_BUTTON_DELETE_REVIEW,
} from 'src/actions/review';

// == Initial State
export const initialState = {
  userId: '',
  pseudo: '',
  email: '',
  password: '',
  passwordConfirm: '',
  passwordError: false,
  logged: false,
  accountExists: false,
  openSettings: false,
  openLogIn: false,
  openLogUp: false,
  openEditProfile: false,
  openEditPassword: false,
  openDeleteProfile: false,
  openPrivacyData: false,
  isCreateUserSuccess: false,
  isCreateUserError: false,
  isCreatePasswordLengthError: false,
  isError: false,
  isDeleteProfileSuccess: false,
  isDeleteProfileError: false,
  isUpdatePseudoSuccess: false,
  isUpdatePseudoError: false,
  newPseudo: '',
  newPassword: '',
  newPasswordConfirm: '',
  updatePasswordError: false,
  isUpdatePasswordSuccess: false,
  isUpdatePasswordError: false,
  isUpdatePasswordLengthError: false,
  token: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CLICK_ON_BUTTON_SETTINGS:
      return {
        ...state,
        openSettings: !state.openSettings,
      };
    case CLICK_ON_BUTTON_CLOSE_SETTINGS:
      return {
        ...state,
        openSettings: false,
      };
    case CLICK_ON_BUTTON_LOG_IN: {
      if (state.openLogUp === true) {
        return {
          ...state,
          openLogIn: !state.openLogIn,
          openLogUp: !state.openLogUp,
        };
      }
      return {
        ...state,
        openLogIn: !state.openLogIn,
      };
    }
    case CLICK_ON_BUTTON_LOG_UP: {
      if (state.openLogIn === true) {
        return {
          ...state,
          openLogUp: !state.openLogUp,
          openLogIn: !state.openLogIn,
          isError: false,
          email: '',
          password: '',
          isCreatePasswordLengthError: false,
        };
      }
      return {
        ...state,
        openLogUp: !state.openLogUp,
      };
    }
    case CLICK_ON_BUTTON_LOG_OUT:
      return {
        ...state,
        logged: false,
        accountExists: false,
        openSettings: false,
        pseudo: '',
        userId: '',
        token: null,
      };
    case CLICK_ON_BUTTON_DELETE_PROFILE:
      return {
        ...state,
        openDeleteProfile: true,
      };
    case CLICK_ON_BUTTON_PRIVACY_DATA:
      return {
        ...state,
        openPrivacyData: true,
      };
    case CLICK_ON_BUTTON_CLOSE_SIGN_IN:
      return {
        ...state,
        openLogIn: !state.openLogIn,
        isError: false,
        email: '',
        password: '',
      };
    case CLICK_ON_BUTTON_CLOSE_SIGN_UP:
      return {
        ...state,
        openLogUp: !state.openLogUp,
        isCreateUserSuccess: false,
        isCreateUserError: false,
        email: '',
        password: '',
        pseudo: '',
        passwordConfirm: '',
        isCreatePasswordLengthError: false,
        passwordError: false,
      };
    case CLICK_ON_BUTTON_CLOSE_EDIT_PROFILE:
      return {
        ...state,
        openEditProfile: false,
        isUpdatePseudoSuccess: false,
        isUpdatePseudoError: false,
        password: '',
        newPseudo: '',
      };
    case CLICK_ON_BUTTON_CLOSE_EDIT_PASSWORD:
      return {
        ...state,
        openEditPassword: false,
        isUpdatePasswordSuccess: false,
        password: '',
        newPassword: '',
        newPasswordConfirm: '',
      };
    case CLICK_ON_BUTTON_CLOSE_DELETE_PROFILE:
      return {
        ...state,
        openDeleteProfile: false,
        isDeleteProfileError: false,
        isDeleteProfileSuccess: false,
        accountExists: false,
        password: '',
      };
    case CLOSE_MODAL_DELETE:
      return {
        ...state,
        openDeleteProfile: false,
        isDeleteProfileError: false,
        isDeleteProfileSuccess: false,
        password: '',
      };
    case CLICK_ON_BUTTON_CLOSE_PRIVACY_DATA:
      return {
        ...state,
        openPrivacyData: false,
      };
    case CLICK_ON_BUTTON_EDIT_PROFILE:
      return {
        ...state,
        openEditProfile: !state.openEditProfile,
      };
    case CLICK_ON_BUTTON_EDIT_PASSWORD:
      return {
        ...state,
        openEditPassword: !state.openEditPassword,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isCreateUserSuccess: action.data.isCreateUserSuccess,
        email: '',
        pseudo: '',
        password: '',
        passwordConfirm: '',
        passwordError: false,
        isCreateUserError: false,
        isCreatePasswordLengthError: false,
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        isCreateUserError: true,
        isCreatePasswordLengthError: false,
        passwordError: false,
      };
    case CREATE_PASSWORD_ERROR:
      return {
        ...state,
        passwordError: true,
        isCreatePasswordLengthError: false,
        isCreateUserError: false,
      };
    case CREATE_PASSWORD_LENGTH_ERROR:
      return {
        ...state,
        isCreatePasswordLengthError: true,
        isCreateUserError: false,
        passwordError: false,
      };
    case SET_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const { id, pseudo, accessToken } = action.data;
      return {
        ...state,
        userId: id,
        pseudo,
        token: accessToken,
        isError: false,
        logged: true,
        accountExists: true,
        openLogIn: false,
        email: '',
        password: '',
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isError: true,
      };
    case DELETE_PROFILE_SUCCESS:
      return {
        ...state,
        isDeleteProfileSuccess: action.data.OK,
        isDeleteProfileError: false,
        logged: false,
        userId: '',
        password: '',
        pseudo: '',
      };
    case DELETE_PROFILE_ERROR:
      return {
        ...state,
        isDeleteProfileError: true,
      };
    case DELETE_PASSWORD_CONFIRM_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case UPDATE_PSEUDO_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case UPDATE_PSEUDO_SUCCESS:
      return {
        ...state,
        isUpdatePseudoSuccess: true,
        isUpdatePseudoError: false,
        pseudo: state.newPseudo,
      };
    case UPDATE_ERROR:
      return {
        ...state,
        isUpdatePseudoError: true,
      };
    case UPDATE_PASSWORD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case UPDATE_PASSWORD_CONFIRM_ERROR:
      return {
        ...state,
        updatePasswordError: true,
        isUpdatePasswordError: false,
        isUpdatePasswordLengthError: false,
      };
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        isUpdatePasswordSuccess: true,
        isUpdatePasswordError: false,
        isUpdatePasswordLengthError: false,
        updatePasswordError: false,
      };
    case UPDATE_PASSWORD_ERROR:
      return {
        ...state,
        isUpdatePasswordError: true,
        updatePasswordError: false,
        isUpdatePasswordLengthError: false,
      };
    case UPDATE_PASSWORD_LENGTH_ERROR:
      return {
        ...state,
        isUpdatePasswordLengthError: true,
        isUpdatePasswordError: false,
        updatePasswordError: false,
      };
    case CLICK_ON_NEW_SEARCH:
      return {
        ...state,
        openSettings: false,
      };
    case RESULT_API_RNA_SUCCESS:
      return {
        ...state,
        openSettings: false,
      };
    case GET_ALL_REVIEWS_SUCCESS:
      return {
        ...state,
        openSettings: false,
      };
    case CLICK_ON_BUTTON_ADD_REVIEW:
      return {
        ...state,
        openSettings: false,
      };
    case CLICK_ON_BUTTON_UPDATE_REVIEW:
      return {
        ...state,
        openSettings: false,
      };
    case CLICK_ON_BUTTON_DELETE_REVIEW:
      return {
        ...state,
        openSettings: false,
      };
    default:
      return state;
  }
};

// == Export
export default reducer;
