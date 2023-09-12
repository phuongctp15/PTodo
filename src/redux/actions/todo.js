export const addTodoAction = (data) => {
  return {
    type: "ADD_TODO",
    payload: data,
  };
};

export const setTodoStatusAction = (todoId) => {
  return {
    type: "SET_TODO_STATUS",
    payload: todoId,
  };
};

export const removeTodoAction = (todoId) => {
  return {
    type: "REMOVE_TODO",
    payload: todoId,
  };
};
