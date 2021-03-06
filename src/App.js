import React from "react";
import "./App.css";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {todoList} from "./store/todo-list";
import InputTodo from "./components/input";
import TodoList from "./containers/todo-list/todo-list";
import SortByNotCompleted from "./containers/sort-by-not-completed";

const store = createStore(todoList);

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <InputTodo buttonLabel="Submit todo" texteInput="Add an Item : "/>
          <TodoList/>
          <SortByNotCompleted/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
