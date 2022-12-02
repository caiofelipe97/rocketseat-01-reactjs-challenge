import styles from "./TodoList.module.css";
import { Trash, Notepad } from "phosphor-react";
import { Task } from "../App";

interface TodoListProps {
  tasks: Task[];
  onDeleteTask: (taskTitle: string) => void;
  onMarkTask: (taskTitle: string) => void;
}

export function TodoList({ tasks, onDeleteTask, onMarkTask }: TodoListProps) {
  function handleDeleteTask(taskTitle: string) {
    onDeleteTask(taskTitle);
  }

  function handleMarkTask(taskTitle: string) {
    onMarkTask(taskTitle);
  }

  const completedTasks = tasks.filter((task) => task.done);

  return (
    <div className={styles.todoList}>
      <header className={styles.header}>
        <div>
          <p className={styles.createdTasksLabel}>Tarefas criadas</p>
          <div className={styles.numberOfTasksContainer}>
            <span>{tasks.length}</span>
          </div>
        </div>
        <div>
          <p className={styles.concludedTasksLabel}>Concluídas</p>
          <div className={styles.numberOfTasksContainer}>
            <span>
              {completedTasks.length} de {tasks.length}
            </span>
          </div>
        </div>
      </header>
      <div>
        {tasks.length === 0 ? (
          <div className={styles.emptyTodoList}>
            <Notepad size={56} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          tasks.map((task) => (
            <div className={styles.task}>
              <div className={styles.round}>
                <input
                  id={task.title}
                  type="checkbox"
                  checked={task.done}
                  onClick={() => handleMarkTask(task.title)}
                />
                <label htmlFor={task.title}></label>
              </div>
              {task.done ? (
                <p className={styles.completedTaskTitle}>{task.title}</p>
              ) : (
                <p className={styles.taskTitle}>{task.title}</p>
              )}
              <button
                type="button"
                onClick={() => handleDeleteTask(task.title)}
              >
                <Trash />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
