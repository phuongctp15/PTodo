export const searchFilterChange = (text) => {
  return {
    type: "SEARCH_FILTER",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "STATUS_FILTER",
    payload: status,
  };
};

export const prioritiesFilterChange = (priority) => {
  return {
    type: "PRIORITIES_FILTER",
    payload: priority,
  };
};
