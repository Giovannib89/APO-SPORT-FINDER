export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SEARCH_SPORT = 'SEARCH_SPORT';
export const RESULT_API_RNA_SUCCESS = 'RESULT_API_RNA_SUCCESS';
export const RESULT_API_RNA_ERROR = 'RESULT_API_RNA_ERROR';
export const SET_SEARCH_SPORT = 'SET_SEARCH_SPORT';
export const SET_SEARCH_SELECT_SPORT = 'SET_SEARCH_SELECT_SPORT';
export const GET_GPS_COORDINATES = 'GET_GPS_COORDINATES';
export const GET_CITY_CENTER_COORDINATES = 'GET_CITY_CENTER_COORDINATES';
export const BUILD_MAP = 'BUILD_MAP';
export const GET_DATA_FOR_MARKERS = 'GET_DATA_FOR_MARKERS';
export const CLICK_ON_NEW_SEARCH = 'CLICK_ON_NEW_SEARCH';
export const SET_SEARCH_CITY = 'SET_SEARCH_CITY';
export const CLICK_ERROR_FIELD_NOT_FULL = 'CLICK_ERROR_FIELD_NOT_FULL';

export const createSetSearchSportAction = (newValue) => ({
  type: SET_SEARCH_SPORT,
  value: newValue,
});

export const createSetSearchSportSelectAction = (newValue) => ({
  type: SET_SEARCH_SELECT_SPORT,
  value: newValue,
});

export const createSearchAction = () => ({ type: SEARCH_SPORT });

export const getResultsFromApiSuccess = (data) => ({
  type: RESULT_API_RNA_SUCCESS,
  data,
});

export const getResultsFromApiError = () => ({ type: RESULT_API_RNA_ERROR });

export const createSearchCityAction = (newValue) => ({
  type: SET_SEARCH_CITY,
  value: newValue,
});

export const getGPSCoordinates = () => ({
  type: GET_GPS_COORDINATES,
});

export const getCityCenterCoordinates = (data) => ({
  type: GET_CITY_CENTER_COORDINATES,
  data,
});

export const buildMapAction = () => ({
  type: BUILD_MAP,
});

export const getDataForMarkers = (data) => ({
  type: GET_DATA_FOR_MARKERS,
  data,
});

export const clickOnNewSearch = () => ({ type: CLICK_ON_NEW_SEARCH });

export const getErrorFieldNotFull = () => ({ type: CLICK_ERROR_FIELD_NOT_FULL });
