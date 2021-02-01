import { actionTypes } from "../actionTypes";

export const status = (
  state = { isLoading: true, isError: false, count: 0 },
  action
) => {
  switch (action.type) {
    case actionTypes.IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload.loadingStatus,
      };
    }
    case actionTypes.IS_ERROR: {
      return {
        ...state,
        isError: action.payload.errorStatus,
      };
    }
    case actionTypes.LOADING_COUNT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    default:
      return state;
  }
};
