import React from "react";

const InputTodo = ({texteInput, buttonLabel}) => {
  return (
    <form onSubmit={() => console.log("toto")}>
      <div>
        <label>{texteInput}</label>
        <input type="text" name="todo-list" />
      </div>
      <div>
        <input type="submit" value={buttonLabel} />
      </div>
    </form>
  );
};

export default InputTodo;
