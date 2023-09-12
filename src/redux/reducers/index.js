import { combineReducers } from "redux";
import todoReducer from "./todo";
import filtersReducer from "./filters";

const rootReducer = combineReducers({
  todoList: todoReducer,
  filters: filtersReducer,
});

export default rootReducer;
