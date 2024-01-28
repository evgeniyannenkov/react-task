import { IState } from "./state";
import { SelectEntityAction, SetWidgetAction, UpdateWidgetAction } from "./actions";
import { EntityTypes } from "../types";

export function selectEntityActionHandler(state: IState, action: SelectEntityAction) {
  const { columnId, rowId, stageId } = action.payload;
  return {
    ...state,
    activeEntityId: columnId ?? rowId ?? stageId,
    activeStageId: stageId,
    activeColumnId: columnId,
    activeRowId: rowId,
    activeWidgetId: columnId ? state.columns[columnId].children[0] : undefined,
  };
}

export function addRowActionHandler(state: IState) {
  const id = window.crypto.randomUUID();
  const newRow = {
    id,
    type: EntityTypes.Row,
    children: [],
  };
  return {
    ...state,
    activeRowId: id,
    activeColumnId: undefined,
    activeWidgetId: undefined,
    activeEntityId: id,
    stages: {
      ...state.stages,
      [state.activeStageId]: {
        ...state.stages[state.activeStageId],
        children: [...state.stages[state.activeStageId].children, id],
      },
    },
    rows: {
      ...state.rows,
      [id]: newRow,
    },
  };
}

export function addColumnActionHandler(state: IState) {
  const id = window.crypto.randomUUID();
  const newColumn = {
    id,
    type: EntityTypes.Column,
    children: [],
  };
  const activeRowId = state.activeRowId!;
  return {
    ...state,
    activeColumnId: id,
    activeEntityId: id,
    activeWidgetId: undefined,
    rows: {
      ...state.rows,
      [activeRowId]: {
        ...state.rows[activeRowId],
        children: [...state.rows[activeRowId].children, id],
      },
    },
    columns: {
      ...state.columns,
      [id]: newColumn,
    },
  };
}

export function setWidgetActionHandler(state: IState, action: SetWidgetAction) {
  const id = window.crypto.randomUUID();
  const newWidget = {
    id,
    type: EntityTypes.Widget,
    widgetType: action.payload.widgetType,
    state: {},
  };
  const activeColumnId = state.activeColumnId!;
  return {
    ...state,
    activeWidgetId: id,
    columns: {
      ...state.columns,
      [activeColumnId]: {
        ...state.columns[activeColumnId],
        // Set a new widget as the child of the column and replace the old widget.
        // I decided to use the array structure only for future possibility to use several widgets in one column
        children: [id],
      },
    },
    widgets: {
      ...state.widgets,
      [id]: newWidget,
    },
  };
}

export function updateWidgetActionHandler(state: IState, action: UpdateWidgetAction) {
  const activeWidgetId = state.activeWidgetId!;
  return {
    ...state,
    widgets: {
      ...state.widgets,
      [activeWidgetId]: {
        ...state.widgets[activeWidgetId],
        state: {
          ...state.widgets[activeWidgetId].state,
          ...action.payload,
        },
      },
    },
  };
}
