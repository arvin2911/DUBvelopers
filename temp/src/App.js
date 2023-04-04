import React from "react";
import Widget from "./Widget.js";
import './App.css';

function App() {
  const todos = ["Clean bathroom", "Finish CSE HW", "Cook a meal for roommate", "Walk the goddamn dog"];

  return (
    <div className="App">
      <ul>
        {todos.map(todo => <Widget text={todo} />)}
      </ul>
    </div>
  );
}

export default App;
