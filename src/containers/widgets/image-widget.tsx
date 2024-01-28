import React, { FC } from "react";
import { useAppStateContext } from "../app-context-provider";
import { ActionTypes, Widget } from "../../types";

export const ImageWidget: FC = () => {
  const { state, dispatch } = useAppStateContext();
  const activeWidget: Widget = state.widgets[state.activeWidgetId!];
  return (
    <div className="section">
      <div className="section-header">Image</div>
      <div className="text-field">
        <label htmlFor="image-url">URL</label>
        <input
          value={activeWidget.state.url || ""}
          id="image-url"
          type="text"
          onChange={(e) => dispatch({ type: ActionTypes.UpdateWidget, payload: { url: e.target.value } })}
        />
      </div>
    </div>
  );
};
