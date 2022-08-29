import { observer } from "mobx-react-lite";

import { StoreContext } from "../stores/store";
import { StoreType } from "../types";

interface Props {
  store: StoreType;
  children: React.ReactNode;
}
function ProviderComponent({ store, children }: Props) {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export const Provider = observer(ProviderComponent);
