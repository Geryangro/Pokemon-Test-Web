import { FETCH_DATA } from "../Types";

export const articleReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
