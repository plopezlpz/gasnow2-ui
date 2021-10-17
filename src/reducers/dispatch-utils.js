export const LOADING_SUF = "_LOADING";
export const SUCCESS_SUF = "_SUCCESS";
export const ERROR_SUF = "_ERROR";
export const CLEAR_SUF = "_CLEAR";

export const withLoadingAndError = async (dispatch, actionType, fn) => {
  dispatch({ type: `${actionType}_LOADING` });
  try {
    const res = await fn();
    dispatch({
      type: `${actionType}_SUCCESS`,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: `${actionType}_ERROR`,
      payload: e.message || "Unexpected Error",
    });
  }
};

export const statusReducer = (actionType, status = { error: null, loading: false, success: null }, action) => {
  switch (action.type) {
    case actionType + LOADING_SUF:
      return {
        ...status, loading: true, error: null, success: null,
      };
    case actionType + ERROR_SUF:
      return {
        ...status, loading: false, error: action.payload, success: false,
      };
    case actionType + SUCCESS_SUF:
      return {
        ...status, loading: false, error: null, success: true,
      };
    case actionType + CLEAR_SUF:
      return { error: null, loading: false, success: null };
    default:
      return status;
  }
};
