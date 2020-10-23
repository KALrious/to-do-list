import { createActions, handleActions } from "redux-actions";

export const { addTodo, completedTodo, sortByNotCompleted } = createActions(
  "ADD_TODO",
  "COMPLETED_TODO","SORT_BY_NOT_COMPLETED"
);
export const defaultState = { todos: [], sorted: false };

export const todoList = handleActions(
  {
    [addTodo]: (state, { payload }) => {
      return { todos: [...state.todos, payload], sorted: false };
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
    },
      [sortByNotCompleted]: (state, {payload}) => {
        const {todos} = state;
       todos.sort(todo => {
            if(!todo.completed){
                return 1
            }else{
                return -1
            }
        });
        return {todos, sorted:true};
      }
  },
  defaultState
);
