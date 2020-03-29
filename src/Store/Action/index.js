import { get } from "../../Service";
import { FETCH_DATA } from "../Types";

export const fetchData = query => async dispatch => {
  const data = await get(`${query}`);

  dispatch({
    type: FETCH_DATA,
    payload: data.data
  });
};
