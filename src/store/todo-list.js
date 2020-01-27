import { createActions, handleActions } from "redux-actions";

export const { addTodo, completedTodo } = createActions(
  "ADD_TODO",
  "COMPLETED_TODO"
);
export const defaultState = { todos: [] };

export const todoList = handleActions(
  {
    [addTodo]: (state, { payload }) => {
      return { ...state, todos: [...state.todos, payload] };
    },
    [completedTodo]: (state, { payload: { id } }) => {
      const { todos } = state;
      const newTodos = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
      return { todos: newTodos };
    }
  },
  defaultState
);
