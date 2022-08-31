import { Instance } from "mobx-state-tree";

import { Store } from "../stores/store";
import { Task } from "../stores/task";

export enum Filter {
  All = "ALL",
  Important = "IMPORTANT",
}

export type TaskType = Instance<typeof Task>;

export type StoreType = Instance<typeof Store>;
