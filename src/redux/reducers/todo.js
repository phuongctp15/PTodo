const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = [...state, action.payload];
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return newTodo;

    case "SET_TODO_STATUS":
      const todosAfterUpdate = state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(todosAfterUpdate));
      return todosAfterUpdate;

    case "REMOVE_TODO":
      const todosAfterRemove = state.filter(
        (todo) => todo.id !== action.payload
      );
      localStorage.setItem("todos", JSON.stringify(todosAfterRemove));
      return todosAfterRemove;
    default:
      return state;
  }
};

export default todoReducer;
