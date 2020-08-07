import axiosWithAuth from "../../components/Helpers/axiosWithAuth";

export const GET_ACCOUNT_START = "GET_ACCOUNT_START";
export const GET_ACCOUNT_SUCCESS = "GET_ACCOUNT_SUCCESS";
export const GET_ACCOUNT_FAILURE = "GET_ACCOUNT_FAILURE";
export const UPDATE_ACCOUNT_START = "UPDATE_ACCOUNT_START";
export const UPDATE_ACCOUNT_SUCCESS = "UPDATE_ACCOUNT_SUCCESS";
export const UPDATE_ACCOUNT_FAILURE = "UPDATE_ACCOUNT_FAILURE";

export const getAccount = (id) => async (dispatch) => {
  dispatch({ type: GET_ACCOUNT_START });
  try {
    const result = await axiosWithAuth().get(
      `https://disneys-shopping-list-backend.herokuapp.com/api/accounts/${id}`
    );
    dispatch({ type: GET_ACCOUNT_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_ACCOUNT_FAILURE, payload: error });
  }
};

export const updateAccount = (id) => async (dispatch) => {
  dispatch({ type: UPDATE_ACCOUNT_START });
  try {
    const result = await axiosWithAuth().put(
      `https://disneys-shopping-list-backend.herokuapp.com/api/accounts/${id}`
    );
    dispatch({ type: UPDATE_ACCOUNT_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: UPDATE_ACCOUNT_FAILURE, payload: error });
  }
};
