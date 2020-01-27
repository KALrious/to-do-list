import React from "react";
import styled from 'styled-components'

const Li = styled.li`
    color: ${props => (props.completed ? "red" : "green")};
    text-decoration: ${props => (props.completed ? "line-through" : "none")}
`;

const Todo = ({ todo, completed, onClick }) => {
  return <Li completed={completed} onClick={onClick}>{todo}</Li>;
};

export default Todo;
