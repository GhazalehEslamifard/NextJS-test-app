import { observer } from "mobx-react-lite";

import CreateTaskComponent from "../../components/create-task-page";

import type { NextPage } from "next";

const CreateTaskPage: NextPage = function (): React.ReactElement {
  return <CreateTaskComponent />;
};

export default observer(CreateTaskPage);
