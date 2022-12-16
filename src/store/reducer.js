import * as Actions from './actionType';

const INITIAL_STATE = {
  profileInfo: {},
  users: [],
  cars: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Actions.SET_PROFILE_INFO:
      return {
        ...state,
        profileInfo: action.payload,
      };
    case Actions.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case Actions.SET_CARS:
      return {
        ...state,
        cars: action.payload,
      };
    default:
      return state;
  }
};
