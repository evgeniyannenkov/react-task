import React, { FC } from "react";
import { useAppStateContext } from "../app-context-provider";
import { ActionTypes } from "../../types";

export const RowSettings: FC = () => {
  const { state, dispatch } = useAppStateContext();

  return !!state.activeRowId ? (
    <div className="section">
      <div className="section-header">Row</div>
      <div className="actions">
        <button onClick={() => dispatch({ type: ActionTypes.AddColumn, payload: null })} className="action">
          Add column
        </button>
      </div>
    </div>
  ) : null;
};
