import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useCallback, useEffect } from "react";

import { useStore } from "../../stores/store";
import { TaskType, Filter } from "../../types";

import { List, ActionsWrapper, FilterButton, DeleteButton } from "./styles";
import { TaskItem } from "./task-item";

function HomeComponent(): React.ReactElement {
  const store = useStore();
  const [selectedTasks, setSelectedTasks] = useState<TaskType[]>([]);
  const router = useRouter();

  useEffect(() => {
    store.setEditingTask(undefined);
  });

  const filterTasks = useCallback(() => {
    if (store.filter === Filter.All) {
      store.setFilter(Filter.Important);
    } else {
      store.setFilter(Filter.All);
    }
  }, []);

  const toggleStarTag = useCallback((task: TaskType) => {
    task.toggleStarTag();
  }, []);

  const setEditingTask = useCallback((task: TaskType) => {
    store.setEditingTask(task);
    void router.push({
      pathname: "/edit-task/[id]",
      query: { id: task.id },
    });
  }, []);

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

  const deleteSelectedTask = useCallback(() => {
    if (selectedTasks) {
      store.deleteTasks(selectedTasks);
    }

    setSelectedTasks([]);
  }, [selectedTasks]);

  return (
    <>
      <ActionsWrapper>
        <Link href="/create-task">create a task</Link>
        <FilterButton onClick={filterTasks} filter={store.filter}>
          {store.filter === Filter.All ? "Important tasks" : "All tasks"}
        </FilterButton>
        {store.tasks.length === 0 ? null : (
          <DeleteButton
            onClick={deleteSelectedTask}
            disabled={selectedTasks.length === 0}
          >
            Delete
          </DeleteButton>
        )}
      </ActionsWrapper>
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
    </>
  );
}

export default observer(HomeComponent);
