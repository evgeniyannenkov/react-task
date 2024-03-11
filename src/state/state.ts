import { Layout } from "../domain/interfaces/layout";
import type { LayoutComponentTypes } from "../domain/interfaces/layout";
import { Content } from "../domain/interfaces/content";
import type { ContentComponentTypes } from "../domain/interfaces/content";
import { EntityId, EntityTypes, EntityBase } from "../domain/interfaces/entity";
import { makeEntityInstance } from "../domain/EntityComponentFactory";

export type StateCollectionKeys = Pick<IState, `${EntityTypes}s`>;
export type StateCollectionLayoutKeys = Pick<IState, `${LayoutComponentTypes}s`>;
export type StateCollectionContentKeys = Pick<IState, `${ContentComponentTypes}s`>;

export interface IState {
  activeEntity: EntityBase | null;
  stages: Record<EntityId, Layout>;
  rows: Record<EntityId, Layout>;
  columns: Record<EntityId, Layout>;
  images: Record<EntityId, Content>;
  markdowns: Record<EntityId, Content>;
}

export const getInitialState = (): IState => {
  const rootId = "root";
  const root = makeEntityInstance(EntityTypes.Stage, rootId);
  return {
    activeEntity: root,
    stages: {
      [rootId]: root,
    },
    rows: {},
    columns: {},
    images: {},
    markdowns: {},
  };
};

export const state: IState = getInitialState();
