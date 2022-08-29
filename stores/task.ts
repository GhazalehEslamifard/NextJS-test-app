import { Instance, types } from "mobx-state-tree";
import * as uuid from "uuid";

export const Task = types
  .model("Task", {
    hasStarTag: types.optional(types.boolean, false),
    description: types.string,
    id: types.optional(types.identifier, () => uuid.v4()),
  })
  .actions((self) => ({
    toggleStarTag() {
      self.hasStarTag = !self.hasStarTag;
    },
    editTask(description: string) {
      self.description = description;
    },
  }));

export type TaskType = Instance<typeof Task>;
