import "./global.css";
import { Header } from "./components/Header";
import { NewTaskForm } from "./components/NewTaskForm";
import styles from "./App.module.css";
import { TodoList } from "./components/TodoList";
import { useState } from "react";

export interface Task {
  title: string;
  done: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function onCreateTask(title: string) {
    setTasks((prev) => [...prev, { title, done: false }]);
  }

  function onDeleteTask(title: string) {
    setTasks(tasks.filter((t) => t.title !== title));
  }

  function onMarkTask(title: string) {
    setTasks(
      tasks.map((t) =>
        t.title === title
          ? {
              ...t,
              done: !t.done,
            }
          : t
      )
    );
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <NewTaskForm onCreateTask={onCreateTask} />
        <TodoList
          tasks={tasks}
          onDeleteTask={onDeleteTask}
          onMarkTask={onMarkTask}
        />
      </div>
    </div>
  );
}

export default App;
