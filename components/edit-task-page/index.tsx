import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

import { useStore } from "../../stores/store";
import { TaskForm } from "../task-form";

function EditTaskComponent(): React.ReactElement {
  const router = useRouter();
  const store = useStore();

  useEffect(() => {
    if (store.editingTask === undefined) {
      return void router.push("/");
    }
  }, [store.editingTask]);

  const handleSubmit = useCallback((description: string) => {
    if (store.editingTask) {
      store.editingTask.editTask(description);
    }

    void router.push("/");
  }, []);

  return (
    <TaskForm
      onSubmit={handleSubmit}
      {...(store.editingTask
        ? { defaultValue: store.editingTask.description }
        : {})}
      isEditing
    />
  );
}

export default observer(EditTaskComponent);
