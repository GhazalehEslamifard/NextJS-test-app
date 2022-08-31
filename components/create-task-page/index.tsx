import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useCallback } from "react";

import { useStore } from "../../stores/store";
import { TaskForm } from "../task-form";

function CreateTaskComponent(): React.ReactElement {
  const store = useStore();
  const router = useRouter();

  const handleSubmit = useCallback((description: string) => {
    store.createTask(description);
    void router.push("/");
  }, []);

  return <TaskForm onSubmit={handleSubmit} isEditing={false} />;
}

export default observer(CreateTaskComponent);
