import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Todo from "../../components/todo";
import {completedTodo} from "../../store/todo-list";


const TodoList = ({}) => {
  const selectTodos = state => state.todos;
  const selectSorted = state => state.sorted;
  const todos = useSelector(selectTodos);
  const sorted = useSelector(selectSorted);

  const dispatch = useDispatch();
  const changeList = (id) => {
    if(id){
      dispatch(completedTodo({id}))
    }
  };

  useEffect(() => {
  }, [sorted]);
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo.input} completed={todo.completed} onClick={() => changeList(todo.id)}/>
      ))}
    </ul>
  );
};

export default TodoList;
