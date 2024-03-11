import { FC } from "react";
import { Sidebar } from "../sidebar";
import { EntityRenderer } from "../entity-renderer";
import { useAppStateContext } from "../../app/app-context-provider";

export const Editor: FC = () => {
  const { state } = useAppStateContext();
  const root = state.stages["root"];

  return (
    <div className="editor">
      <EntityRenderer child={root} />
      <Sidebar />
    </div>
  );
};
