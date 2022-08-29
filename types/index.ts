import { Instance } from "mobx-state-tree";

import { Store } from "../stores/store";
import { Task } from "../stores/task";

export type TaskType = Instance<typeof Task>;

export type StoreType = Instance<typeof Store>;
