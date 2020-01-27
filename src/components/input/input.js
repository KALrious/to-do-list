import React, {useState} from "react";
import {useDispatch} from "react-redux";
import uuidv4 from 'uuid/v4';
import {addTodo} from "../../store/todo-list";

const InputTodo = ({texteInput, buttonLabel}) => {
    const [input, setInput] = useState();
    const dispatch = useDispatch();
    const submitForm = (e) => {
        e.preventDefault();
        if(!input.trim()){
            return
        }else{
            dispatch(addTodo({id: uuidv4(),input,completed:false}));
        }
    };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label>{texteInput}</label>
        <input type="text" name="todo-list" onChange={(e) => setInput(e.target.value)} placeholder="input-text"/>
      </div>
      <div>
        <input type="submit" value={buttonLabel} />
      </div>
    </form>
  );
};

export default InputTodo;
