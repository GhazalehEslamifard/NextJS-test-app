import { observer } from "mobx-react-lite";
import { useCallback } from "react";

import CloseIcon from "../../../public/close.svg";
import EditIcon from "../../../public/edit.svg";
import StarIcon from "../../../public/star.svg";
import { TaskType } from "../../../types";

import {
  Checkbox,
  ListItem,
  StarButton,
  StyledLabel,
  StyledSpan,
  Wrapper,
} from "./styles";

interface Props {
  task: TaskType;
  onToggleStarTag: (task: TaskType) => void;
  onDelete: (task: TaskType) => void;
  onEdit: (task: TaskType) => void;
  selectedTasks: TaskType[] | undefined;
  onCheckboxChange: (task: TaskType) => void;
}

function TaskItemComponent({
  task,
  onToggleStarTag,
  onDelete,
  onEdit,
  selectedTasks,
  onCheckboxChange,
}: Props): React.ReactElement {
  const handleToggleStarTag = useCallback(
    () => onToggleStarTag(task),
    [task, onToggleStarTag]
  );
  const handleDeleteTask = useCallback(() => onDelete(task), [task, onDelete]);
  const handleEditTask = useCallback(() => onEdit(task), [task, onEdit]);
  const handleCheckboxChange = useCallback(() => {
    onCheckboxChange(task);
  }, [task, onCheckboxChange]);

  return (
    <ListItem>
      <StyledLabel htmlFor="checkbox">Multi-select checkbox</StyledLabel>
      <Checkbox
        type="checkbox"
        id="checkbox"
        checked={selectedTasks ? selectedTasks.includes(task) : false}
        onChange={handleCheckboxChange}
      />
      <StyledSpan>{task.description}</StyledSpan>
      <StarButton onClick={handleToggleStarTag} isActivated={task.hasStarTag}>
        <StarIcon />
      </StarButton>
      <Wrapper>
        <button onClick={handleEditTask}>
          <EditIcon />
        </button>
        <button onClick={handleDeleteTask}>
          <CloseIcon />
        </button>
      </Wrapper>
    </ListItem>
  );
}

export const TaskItem = observer(TaskItemComponent);
