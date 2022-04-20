import './App.css';
import Header from './components/header/Header'
import InputForm from './components/input-form/InputForm';
import Tasks from './components/tasks/Tasks';
import Completed from './components/completedTasks/CompletedTasks';
import { useState, useEffect } from "react";

function App(props) {
  const [inputItems, setInputItems] = useState([])
  const [completedItems, setCompletedItems] = useState([])

  const addToCompleted = (items) => {
    const newCompletedItems = [items, ...completedItems]
    setCompletedItems(newCompletedItems)
  }

  const handleSubmit = (item) => {
    setInputItems([{ entry: item, status:"To-Do" }, ...inputItems])
  }
  return (
    <div className="App">
      <Header />
      <InputForm handleSubmit={handleSubmit} />
      <Tasks inputItems={inputItems} addToCompleted={addToCompleted} />
      <Completed completedItems={completedItems} />
    </div>
  );
}

export default App;
