import {createActions, handleActions} from "redux-actions";

export const { addTodo } = createActions("ADD_TODO");
export const defaultState = {todos: []};

export const todoList = handleActions(
  {
    [addTodo]: (state, { payload }) => {
      return { ...state, todos: [ ...state.todos, payload ] };
    }
  },
  defaultState
);
