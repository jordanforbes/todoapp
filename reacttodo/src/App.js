import React, { useState } from "react";
import './App.css';

import TodoList from './components/TodoList';
import Form from './components/Form';

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Jordan's Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
