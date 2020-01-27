import React from "react";

const InputTodo = ({}) => {
  return (
    <form onSubmit={() => console.log("toto")}>
      <div>
        <label for="name">Add an Item:</label>
        <input type="text" name="todo-list" />
      </div>
      <div>
        <input type="submit" value="Add Todo" />
      </div>
    </form>
  );
};

export default InputTodo;
