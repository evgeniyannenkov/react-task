import { Entity, EntityContainer, Widget } from "../types";

export interface IState {
  activeStageId: Entity["id"];
  activeColumnId?: Entity["id"];
  activeRowId?: Entity["id"];
  activeEntityId?: Entity["id"];
  activeWidgetId?: Entity["id"];
  stages: Record<Entity["id"], EntityContainer>;
  rows: Record<Entity["id"], EntityContainer>;
  columns: Record<Entity["id"], EntityContainer>;
  widgets: Record<Entity["id"], Widget>;
}

export const state: IState = {
  activeStageId: "0",
  stages: {
    "0": {
      id: "0",
      type: "stage",
      children: [],
    },
  },
  rows: {},
  columns: {},
  widgets: {},
};
