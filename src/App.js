import React from "react";
import "./App.css";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {todoList} from "./store/todo-list";
import InputTodo from "./components/input/input";

const store = createStore(todoList);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <InputTodo />
        </Provider>
      </header>
    </div>
  );
}

export default App;
