const initialState = {
  search: "",
  status: "All",
  priorities: [],
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_FILTER":
      return {
        ...state,
        search: action.payload,
      };
    case "STATUS_FILTER":
      return {
        ...state,
        status: action.payload,
      };
    case "PRIORITIES_FILTER":
      return {
        ...state,
        priorities: action.payload,
      };

    default:
      return state;
  }
};

export default filtersReducer;
