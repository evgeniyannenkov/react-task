import { ActionTypes } from "../types";
import { EntityId, EntityRef, EntityTypes } from "../domain/interfaces/entity";
import { Content } from "../domain/interfaces/content";
import { IMarkdown } from "../domain/entities/markdown";
import { IImage } from "../domain/entities/image";

export type SelectEntityAction = {
  type: ActionTypes.SelectEntity;
  payload: { id: EntityId; type: EntityTypes };
};

export type AddEntityAction = {
  type: ActionTypes.AddEntity;
  payload: {
    type: EntityTypes;
    parentRef: EntityRef;
    data?: Partial<IImage | IMarkdown>;
  };
};

export type UpdateContentAction = {
  type: ActionTypes.UpdateContent;
  payload: Content;
};
