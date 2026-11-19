function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <button type="button" onClick={() => onToggle(task.id)}>
        {task.completed ? "✓" : "o"} {task.title}
      </button>
      <button type="button" onClick={() => onDelete(task.id)}>
        Șterge
      </button>
    </li>
  );
}

export default TaskItem;