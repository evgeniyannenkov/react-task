import React, { FC } from "react";
import { Icons } from "../../components/icons";
import { useAppStateContext } from "../app-context-provider";
import { Widget, ActionTypes, AlignmentTypes } from "../../types";

export const TextWidget: FC = () => {
  const { state, dispatch } = useAppStateContext();
  const activeWidget: Widget = state.widgets[state.activeWidgetId!];
  const activeAlignment = activeWidget.state.alignment || AlignmentTypes.Left;
  return (
    <div className="section">
      <div className="section-header">Text</div>
      <div className="button-group-field">
        <label>Alignment</label>
        <div className="button-group">
          <button
            className={activeAlignment === AlignmentTypes.Left ? "selected" : ""}
            onClick={() => dispatch({ type: ActionTypes.UpdateWidget, payload: { alignment: AlignmentTypes.Left } })}
          >
            <Icons.TextAlignLeft />
          </button>
          <button
            className={activeAlignment === AlignmentTypes.Center ? "selected" : ""}
            onClick={() => dispatch({ type: ActionTypes.UpdateWidget, payload: { alignment: AlignmentTypes.Center } })}
          >
            <Icons.TextAlignCenter />
          </button>
          <button
            className={activeAlignment === AlignmentTypes.Right ? "selected" : ""}
            onClick={() => dispatch({ type: ActionTypes.UpdateWidget, payload: { alignment: AlignmentTypes.Right } })}
          >
            <Icons.TextAlignRight />
          </button>
        </div>
      </div>
      <div className="textarea-field">
        <textarea
          rows={8}
          placeholder="Enter text"
          value={activeWidget.state.text || ""}
          onChange={(e) => dispatch({ type: ActionTypes.UpdateWidget, payload: { text: e.target.value } })}
        />
      </div>
    </div>
  );
};
