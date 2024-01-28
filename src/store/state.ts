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
  // I decided to leave this redundant (in current approach) stage's structure and set a rootStage as initial
  // to make it easier to add new stages in the future
  activeStageId: "rootStage",
  stages: {
    rootStage: {
      id: "rootStage",
      type: "stage",
      children: [],
    },
  },
  rows: {},
  columns: {},
  widgets: {},
};
