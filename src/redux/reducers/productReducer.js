const initState = {
  listData: [],
  isLoading: false,
  isError: null,
};

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_LOAD":
      return {
        ...state,
        isLoading: action.loadStat,
      };

    case "GET_PRODUCT_SUCCEED":
      return {
        ...state,
        listData: action.payload,
        isLoading: action.loadStat,
      };

    case "GET_PRODUCT_FAILED":
      return {
        ...state,
        isLoading: action.loadStat,
        isError: action.payload,
      };

    default:
      return state;
  }
};
