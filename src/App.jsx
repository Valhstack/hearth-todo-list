import Sidebar from "./components/Sidebar.jsx";
import { Main } from "./components/Main.jsx";
import { useEffect, useState } from "react";
import { saveTasks, createTask, loadTasks } from "./data/tasks.js";

function App() {
  const [tasks, setTasks] = useState(() => loadTasks())              // start from saved data
  const addTask = (title, due, priority) => setTasks([...tasks, createTask(title, due, priority)]) // new array each time
  useEffect(() => { saveTasks(tasks) }, [tasks])                     // save whenever it changes

  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
}

export default App;