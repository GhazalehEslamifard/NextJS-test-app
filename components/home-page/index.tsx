import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useState, useCallback, useEffect } from "react";

import { useStore } from "../../stores/store";
import { TaskType } from "../../types";

import { List } from "./styles";
import { TaskItem } from "./task-item";

function HomeComponent(): React.ReactElement {
  const store = useStore();
  const [selectedTasks, setSelectedTasks] = useState<TaskType[]>([]);
  const router = useRouter();

  useEffect(() => {
    store.setEditingTask(undefined);
  });

  const toggleStarTag = useCallback((task: TaskType) => {
    task.toggleStarTag();
  }, []);

  const setEditingTask = useCallback(
    (task: TaskType) => {
      store.setEditingTask(task);
      void router.push({
        pathname: "/edit-task/[id]",
        query: { id: task.id },
      });
    },
    [router]
  );

  const handleSetSelectedTasks = useCallback((task: TaskType) => {
    setSelectedTasks((prevState) =>
      prevState
        ? prevState.includes(task)
          ? prevState.filter((item) => item !== task)
          : [...prevState, task]
        : [task]
    );
  }, []);

  const deleteTask = useCallback((task: TaskType) => {
    store.deleteTasks([task]);
    setSelectedTasks([]);
  }, []);

  return (
    <List>
      {store.filteredTasks.map((task) => (
        <TaskItem
          task={task}
          onToggleStarTag={toggleStarTag}
          onEdit={setEditingTask}
          onDelete={deleteTask}
          selectedTasks={selectedTasks}
          onCheckboxChange={handleSetSelectedTasks}
          key={task.id}
        />
      ))}
    </List>
  );
}

export default observer(HomeComponent);
