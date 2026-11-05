
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={task.completed ? "task task--completed" : "task"}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          aria-label={`Marchează activitatea ${task.title} ca ${
            task.completed ? "nefinalizată" : "finalizată"
          }`}
        />

        <span>{task.title}</span>
      </label>

      <button
        type="button"
        onClick={() => onDelete(task.id)}
        aria-label={`Șterge activitatea ${task.title}`}
      >
        Șterge
      </button>
    </li>
  );
}

export default TaskItem;

