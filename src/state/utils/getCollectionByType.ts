import { IState, StateCollectionKeys } from "../state";
import { EntityId, EntityTypes } from "../../domain/interfaces/entity";
import { Stage } from "../../domain/entities/stage";
import { Row } from "../../domain/entities/row";
import { Column } from "../../domain/entities/column";
import { Image } from "../../domain/entities/image";
import { Markdown } from "../../domain/entities/markdown";

type CollectionTypeMap = {
  [EntityTypes.Stage]: Record<EntityId, Stage>;
  [EntityTypes.Row]: Record<EntityId, Row>;
  [EntityTypes.Column]: Record<EntityId, Column>;
  [EntityTypes.Image]: Record<EntityId, Image>;
  [EntityTypes.Markdown]: Record<EntityId, Markdown>;
};

export function getCollectionByType<T extends EntityTypes>(state: IState, type: T): CollectionTypeMap[T] {
  const collectionKey = `${type}s` as keyof StateCollectionKeys;

  const collection = state[collectionKey];
  if (!collection) {
    throw new Error(`Collection for type "${type}" not found`);
  }
  return collection as CollectionTypeMap[T];
}
