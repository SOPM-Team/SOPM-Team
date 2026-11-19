import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import "./App.css";

const DEFAULT_TASKS = [
  { id: 1, title: "Învață React", completed: false },
  { id: 2, title: "Testează componentele", completed: true },
];

function App() {
  const appTitle = import.meta.env.VITE_APP_TITLE || "Activitățile mele";
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : DEFAULT_TASKS;
    } catch {
      return DEFAULT_TASKS;
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask(title) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  }

  function handleToggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleDeleteTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  }

  return (
    <main className="app-container">
      <h1>{appTitle}</h1>
      <p>Total activități: {tasks.length}</p>

      <TaskForm onAdd={handleAddTask} />

      {tasks.length === 0 ? (
        <p>Nu există activități.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={handleToggleTask}
              onDelete={handleDeleteTask}
            />
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;