import React, { useState } from "react";
import "./App.css";
import { List } from "../src/components/list/list";
import { TaskContent } from "./components/taskContent/taskContent";
import { Modal } from "./components/modal/modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const CloseModal = () => setIsModalOpen(false);
  const OpenModal = () => setIsModalOpen(true);

  return (
    <div className="App">
      <List openModal={OpenModal} />
      <TaskContent openModal={OpenModal} />
      <Modal closeModal={CloseModal} isModalOpen={isModalOpen} />
    </div>
  );
}

export default App;
