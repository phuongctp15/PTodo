import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const prioritiesFilterSelector = (state) => state.filters.priorities;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusFilterSelector,
  prioritiesFilterSelector,
  (todoList, searchText, statusFilter, priorities) => {
    const todoRemaining = todoList?.filter((todo) => {
      const nametoLowerCase = todo.name
        .toLowerCase()
        .includes(searchText.toLowerCase());

      if (statusFilter === "All") {
        return priorities.length
          ? nametoLowerCase && priorities.includes(todo.priority)
          : nametoLowerCase;
      }

      return (
        nametoLowerCase &&
        (statusFilter === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
    return todoRemaining;
  }
);
