import { useState } from "react";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const cleanTitle = title.trim();

    if (!cleanTitle) {
      setErrorMessage("Introdu un titlu valid pentru activitate.");
      return;
    }

    onAdd(cleanTitle);
    setTitle("");
    setErrorMessage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-title">Activitate nouă</label>
      <input
        id="task-title"
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
          if (errorMessage) {
            setErrorMessage("");
          }
        }}
      />
      <button type="submit">Adaugă</button>

      {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
  );
}

export default TaskForm;