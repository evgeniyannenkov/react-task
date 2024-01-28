import { ActionTypes, AlignmentTypes, Entity, WidgetType } from "../types";

export type SelectEntityAction = {
  type: ActionTypes.SelectEntity;
  payload: { stageId: Entity["id"]; rowId?: Entity["id"]; columnId?: Entity["id"] };
};

export type AddRowAction = { type: ActionTypes.AddRow; payload: null };

export type AddColumnAction = { type: ActionTypes.AddColumn; payload: null };

export type SetWidgetAction = { type: ActionTypes.SetWidget; payload: { widgetType: WidgetType } };

export type UpdateWidgetAction = {
  type: ActionTypes.UpdateWidget;
  payload: { text?: string; url?: string; alignment?: AlignmentTypes };
};
