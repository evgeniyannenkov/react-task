import { IState } from "./state";
import { ActionTypes } from "../types";
import { AddEntityAction, SelectEntityAction, UpdateContentAction } from "./actions";
import { addEntityActionHandler, selectEntityActionHandler, updateContentActionHandler } from "./actionHandlers";

export type Action = SelectEntityAction | AddEntityAction | UpdateContentAction;

export function reducer(state: IState, action: Action) {
  switch (action.type) {
    case ActionTypes.SelectEntity:
      return selectEntityActionHandler(state, action);
    case ActionTypes.AddEntity:
      return addEntityActionHandler(state, action);
    case ActionTypes.UpdateContent:
      return updateContentActionHandler(state, action);
  }
  return state;
}
