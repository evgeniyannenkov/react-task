import { FC } from "react";
import { useAppStateContext } from "../app-context-provider";
import { ActionTypes } from "../../types";
import { RowSettings } from "../row-settings";
import { ColumnSettings } from "../column-settings";

export const Sidebar: FC = () => {
  const { dispatch } = useAppStateContext();

  return (
    <div className="properties">
      <div className="section">
        <div className="section-header">Page</div>
        <div className="actions">
          <button onClick={() => dispatch({ type: ActionTypes.AddRow, payload: null })} className="action">
            Add row
          </button>
        </div>
      </div>

      <RowSettings />
      <ColumnSettings />
    </div>
  );
};
