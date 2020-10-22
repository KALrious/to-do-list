import React, {useEffect, useState} from 'react';
import Button from "../../components/button";
import {sortByNotCompleted} from "../../store/todo-list";
import {useDispatch, useSelector} from "react-redux";

const SortByNotCompleted = ({}) => {
    const [disable,setDisable] = useState(true);
    const selectTodos = state => state.todos;
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();
    const clickNotCOmpleted = () => {
        //service
        dispatch(sortByNotCompleted());
    };
    useEffect(() => {
        if(todos.length){
            setDisable(false);
        }
    },[todos]);
    return(
        <Button onClick={clickNotCOmpleted} active={disable} color="Chocolate">
            <label>
                sort by not completed
            </label>
        </Button>
    )
};

export default SortByNotCompleted