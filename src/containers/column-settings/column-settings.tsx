import React, { FC } from "react";
import { useAppStateContext } from "../app-context-provider";
import { ActionTypes, WidgetType } from "../../types";
import { Icons } from "../../components/icons";
import { WidgetSettings } from "../widgets";

export const ColumnSettings: FC = () => {
  const { state, dispatch } = useAppStateContext();

  const activeWidget = state.activeWidgetId ? state.widgets[state.activeWidgetId] : null;
  const activeWidgetType = activeWidget ? activeWidget.widgetType : null;

  return !!state.activeColumnId ? (
    <>
      <div className="section">
        <div className="section-header">Column</div>
        <div className="button-group-field">
          <label>Contents</label>
          <div className="button-group">
            <button
              onClick={() => dispatch({ type: ActionTypes.SetWidget, payload: { widgetType: WidgetType.Text } })}
              className={activeWidgetType === WidgetType.Text ? "selected" : ""}
            >
              <Icons.Text />
            </button>
            <button
              onClick={() => dispatch({ type: ActionTypes.SetWidget, payload: { widgetType: WidgetType.Image } })}
              className={activeWidgetType === WidgetType.Image ? "selected" : ""}
            >
              <Icons.Image />
            </button>
          </div>
        </div>
      </div>
      <WidgetSettings type={activeWidgetType} />
    </>
  ) : null;
};
