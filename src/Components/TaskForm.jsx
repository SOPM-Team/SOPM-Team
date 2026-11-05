
function TaskForm({ newTaskTitle, setNewTaskTitle, onSubmit }) {
  return (
    <form className="task-form" onSubmit={onSubmit}>
      <label htmlFor="task-title">Activitate nouă</label>

      <div className="task-form__controls">
        <input
          id="task-title"
          type="text"
          value={newTaskTitle}
          onChange={(event) => setNewTaskTitle(event.target.value)}
          placeholder="De exemplu: repetă JSX"
        />

        <button type="submit">Adaugă</button>
      </div>
    </form>
  );
}

export default TaskForm;
