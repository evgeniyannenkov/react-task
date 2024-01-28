import { IState } from "./state";
import { ActionTypes } from "../types";
import { AddColumnAction, AddRowAction, SelectEntityAction, SetWidgetAction, UpdateWidgetAction } from "./actions";
import {
  addColumnActionHandler,
  addRowActionHandler,
  selectEntityActionHandler,
  setWidgetActionHandler,
  updateWidgetActionHandler,
} from "./actionHandlers";

export type Action = SelectEntityAction | AddRowAction | AddColumnAction | SetWidgetAction | UpdateWidgetAction;

export function reducer(state: IState, action: Action) {
  switch (action.type) {
    case ActionTypes.SelectEntity:
      return selectEntityActionHandler(state, action);
    case ActionTypes.AddRow:
      return addRowActionHandler(state);
    case ActionTypes.AddColumn:
      return addColumnActionHandler(state);
    case ActionTypes.SetWidget:
      return setWidgetActionHandler(state, action);
    case ActionTypes.UpdateWidget:
      return updateWidgetActionHandler(state, action);
  }
  return state;
}
