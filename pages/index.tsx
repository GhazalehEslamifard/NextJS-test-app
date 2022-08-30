import { observer } from "mobx-react-lite";

import HomeComponent from "../components/home-page";

import type { NextPage } from "next";

const HomePage: NextPage = function (): React.ReactElement {
  return <HomeComponent />;
};

export default observer(HomePage);
