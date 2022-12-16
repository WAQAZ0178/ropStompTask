import {SET_PROFILE_INFO, SET_USERS, SET_CARS} from './actionType';

const setProfileInfo = payload => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_PROFILE_INFO,
      payload,
    });
  };
};
const setUsers = payload => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_USERS,
      payload,
    });
  };
};
const setCars = payload => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_CARS,
      payload,
    });
  };
};

export const ACTIONS = {
  setUsers,
  setProfileInfo,
  setCars,
};
