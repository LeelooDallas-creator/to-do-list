import React, { useState } from 'react';
import './App.css'

interface Task {
  text: string;
  done: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState<string>("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, done: false }]);
      setInput("");
    }
  };

  const toggleDone = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>🌸 Ma To-Do List</h1>
      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ajouter une tâche..."
        />
        <button onClick={addTask}>Ajouter</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.done ? "done" : ""}>
            <span onClick={() => toggleDone(index)}>{task.text}</span>
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
