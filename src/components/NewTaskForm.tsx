import styles from "./NewTaskForm.module.css";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface NewTaskFormProps {
  onCreateTask: (taskTitle: string) => void;
}
export function NewTaskForm({ onCreateTask }: NewTaskFormProps) {
  const [taskTitle, setTaskTitle] = useState("");

  function handleChangeTaskTitle(event: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value);
  }

  function handleCreateTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onCreateTask(taskTitle);
    setTaskTitle("");
  }

  return (
    <form className={styles.newTask} onSubmit={handleCreateTask}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleChangeTaskTitle}
        value={taskTitle}
      />
      <button className={styles.createButton} type="submit">
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
