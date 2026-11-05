
import { useEffect, useState } from "react";
import TaskItem from "./components/TaskItem";
import TaskForm from "./components/TaskForm";

const initialTasks = [
  { id: 1, title: "Creează proiectul React", completed: true },
  { id: 2, title: "Învață JSX", completed: false },
  { id: 3, title: "Construiește prima componentă", completed: false }
];

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");

      return savedTasks !== null
        ? JSON.parse(savedTasks)
        : initialTasks;
    } catch {
      return initialTasks;
    }
  });

  const [newTaskTitle, setNewTaskTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleSubmit(event) {
    event.preventDefault();

    const title = newTaskTitle.trim();

    if (title === "") return;

    const newTask = {
      id: crypto.randomUUID(),
      title,
      completed: false
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
    setNewTaskTitle("");
  }

  function handleToggle(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function handleDelete(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  }

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <main className="app">
      <header className="app__header">
        <p className="app__eyebrow">ORGANIZARE PERSONALĂ</p>
        <h1>Lista mea de activități</h1>
        <p>Un pas mic, apoi încă unul.</p>
      </header>

      <TaskForm
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
        onSubmit={handleSubmit}
      />

      <section className="task-section" aria-labelledby="task-heading">
        <div className="task-section__heading">
          <h2 id="task-heading">Activități</h2>
          <p>{completedCount} din {tasks.length} finalizate</p>
        </div>

        {tasks.length === 0 ? (
          <p className="empty-message">
            Lista este goală. Adaugă prima activitate.
          </p>
        ) : (
          <ul className="task-list">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
