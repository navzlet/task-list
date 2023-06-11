import React from "react";
import "./App.css";
import { List } from "../src/components/list/list";
import { TaskContent } from "./components/taskContent/taskContent";

function App() {
  return (
    <div className="App">
      <List />
      <TaskContent />
    </div>
  );
}

export default App;
