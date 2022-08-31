import { observer } from "mobx-react-lite";

import EditTaskComponent from "../../components/edit-task-page";

import type { NextPage } from "next";

const EditTaskPage: NextPage = function (): React.ReactElement {
  return <EditTaskComponent />;
};

export default observer(EditTaskPage);
