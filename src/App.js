import './App.css';
import Header from './components/header/Header'
import InputForm from './components/input-form/InputForm';
import Tasks from './components/tasks/Tasks';
import Completed from './components/completedTasks/CompletedTasks';
import { useState, useEffect } from "react";

function App(props) {
  const [inputItem, setInputItem] = useState('')
  const [completedItem, setCompletedItem] = useState([])
  
  const addToCompleted = (items) => {
    const completedItems = [items, ...completedItem]
    setCompletedItem(completedItems)
  }
  return (
    <div className="App">
      <Header />
      <InputForm />
      {/* <Tasks /> */}
      {/* <Completed /> */}
    </div>
  );
}

export default App;
