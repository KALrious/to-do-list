import React from "react";
import { useSelector } from "react-redux";
import Todo from "../../components/todo";

const TodoList = ({}) => {
  const selectTodos = state => state.todos;
  const todos = useSelector(selectTodos);

  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo.input} />
      ))}
    </ul>
  );
};

export default TodoList;
