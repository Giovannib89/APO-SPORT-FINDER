export const SET_REVIEW_INPUT_VALUE = 'SET_REVIEW_INPUT_VALUE';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const CREATE_REVIEW_SUCCESS = 'CREATE_REVIEW_SUCCESS';
export const CREATE_REVIEW_ERROR = 'CREATE_REVIEW_ERROR';
export const CLICK_ON_BUTTON_ADD_REVIEW = 'CLICK_ON_BUTTON_ADD_REVIEW';
export const CLICK_ON_BUTTON_CLOSE_ADD_REVIEW = 'CLICK_ON_BUTTON_CLOSE_ADD_REVIEW';
export const GET_ALL_REVIEWS_SUCCESS = 'GET_ALL_REVIEWS_SUCCESS';
export const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS';
export const UPDATE_REVIEW_VALUE = 'UPDATE_REVIEW_VALUE';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';
export const UPDATE_REVIEW_SUCCESS = 'UPDATE_REVIEW_SUCCESS';
export const UPDATE_REVIEW_ERROR = 'UPDATE_REVIEW_ERROR';
export const CLICK_ON_BUTTON_CLOSE_UPDATE_REVIEW = 'CLICK_ON_BUTTON_CLOSE_UPDATE_REVIEW';
export const CLICK_ON_BUTTON_UPDATE_REVIEW = 'CLICK_ON_BUTTON_UPDATE_REVIEW';
export const CLICK_ON_BUTTON_CLOSE_DELETE_REVIEW = 'CLICK_ON_BUTTON_CLOSE_DELETE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const DELETE_REVIEW_SUCCESS = 'DELETE_REVIEW_SUCCESS';
export const DELETE_REVIEW_ERROR = 'DELETE_REVIEW_ERROR';
export const CLICK_ON_BUTTON_DELETE_REVIEW = 'CLICK_ON_BUTTON_DELETE_REVIEW';
export const GET_ALL_REVIEWS_ERROR = 'GET_ALL_REVIEWS_ERROR';
export const GET_ID_REVIEW_VALUE = 'GET_ID_REVIEW_VALUE';
export const GET_SINGLE_ASSOCIATION_NAME_VALUE = 'GET_SINGLE_ASSOCIATION_NAME_VALUE';
export const GET_SINGLE_ASSOCIATION_KEY_VALUE = 'GET_SINGLE_ASSOCIATION_KEY_VALUE';
export const CREATE_ASSOCIATION_SUCCESS = 'CREATE_ASSOCIATION_SUCCESS';
export const CREATE_REVIEW_AFTER_CREATE_ASSOCIATION = 'CREATE_REVIEW_AFTER_CREATE_ASSOCIATION';
export const CLICK_STAR_VALUE = 'CLICK_STAR_VALUE';
export const GET_ALL_REVIEWS_FOR_AN_ASSOCIATION = 'GET_ALL_REVIEWS_FOR_AN_ASSOCIATION';
export const GET_ALL_REVIEWS_FOR_AN_ASSOCIATION_SUCCESS = 'GET_ALL_REVIEWS_FOR_AN_ASSOCIATION_SUCCESS';

export const createReviewSetInputValueAction = (newValue, name) => ({
  type: SET_REVIEW_INPUT_VALUE,
  value: newValue,
  name: name,
});

export const createReviewAction = () => ({ type: CREATE_REVIEW });

export const createReviewSuccessAction = (data) => ({ type: CREATE_REVIEW_SUCCESS, data });

export const createReviewErrorAction = () => ({ type: CREATE_REVIEW_ERROR });

export const clickOnButtonAddReview = () => ({ type: CLICK_ON_BUTTON_ADD_REVIEW });

export const clickOnButtonCloseAddReview = () => ({ type: CLICK_ON_BUTTON_CLOSE_ADD_REVIEW });

export const getAllReviewsAction = () => ({ type: GET_ALL_REVIEWS });

export const getAllReviewsSuccessAction = (data) => ({ type: GET_ALL_REVIEWS_SUCCESS, data });

export const getAllReviewsErrorAction = () => ({ type: GET_ALL_REVIEWS_ERROR });

export const updateReviewSetInputValueAction = (newValue, name) => ({
  type: UPDATE_REVIEW_VALUE,
  value: newValue,
  name: name,
});

export const updateReviewAction = () => ({ type: UPDATE_REVIEW });

export const updateReviewSuccessAction = () => ({ type: UPDATE_REVIEW_SUCCESS });

export const updateReviewErrorAction = () => ({ type: UPDATE_REVIEW_ERROR });

export const clickOnButtonCloseUpdateReview = () => ({ type: CLICK_ON_BUTTON_CLOSE_UPDATE_REVIEW });

export const clickOnButtonUpdateReview = (value1, value2) => ({
  type: CLICK_ON_BUTTON_UPDATE_REVIEW,
  value1,
  value2,
});

export const clickOnButtonCloseDeleteReview = () => ({ type: CLICK_ON_BUTTON_CLOSE_DELETE_REVIEW });

export const deleteReviewAction = () => ({ type: DELETE_REVIEW });

export const deleteReviewSuccessAction = (data) => ({ type: DELETE_REVIEW_SUCCESS, data });

export const deleteReviewErrorAction = () => ({ type: DELETE_REVIEW_ERROR });

export const clickOnButtonDeleteReview = () => ({ type: CLICK_ON_BUTTON_DELETE_REVIEW });

export const IdReviewValue = (value) => ({
  type: GET_ID_REVIEW_VALUE,
  value: value,
});

export const singleAssociationNameValue = (value) => ({
  type: GET_SINGLE_ASSOCIATION_NAME_VALUE,
  value: value,
});

export const singleAssociationKey = (value) => ({
  type: GET_SINGLE_ASSOCIATION_KEY_VALUE,
  value: value,
});

export const createAssociationSuccessAction = (data) => ({
  type: CREATE_ASSOCIATION_SUCCESS,
  data,
});

export const createReviewAfterCreateAssociation = () => ({
  type: CREATE_REVIEW_AFTER_CREATE_ASSOCIATION,
});

export const setStarValue = (data) => ({
  type: CLICK_STAR_VALUE,
  data,
});

export const getAllReviewsForAnAssociationAction = () => ({
  type: GET_ALL_REVIEWS_FOR_AN_ASSOCIATION,
});

export const getAllReviewsForAnAssociationSuccessAction = (data) => ({
  type: GET_ALL_REVIEWS_FOR_AN_ASSOCIATION_SUCCESS,
  data,
});
