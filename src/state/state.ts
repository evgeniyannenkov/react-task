import { Layout } from "../domain/interfaces/layout";
import type { LayoutComponentTypes } from "../domain/interfaces/layout";
import { Content } from "../domain/interfaces/content";
import type { ContentComponentTypes } from "../domain/interfaces/content";
import { EntityId, EntityTypes, EntityBase } from "../domain/interfaces/entity";
import { makeEntityInstance } from "../domain/EntityComponentFactory";
import { TextAlignmentTypes } from "../types";

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

const root = makeEntityInstance(EntityTypes.Stage, "rootStage");
const row = makeEntityInstance(EntityTypes.Row, "first-row");
const column = makeEntityInstance(EntityTypes.Column, "first-column");
const markdown = makeEntityInstance(EntityTypes.Markdown, "first-markdown", {
  alignment: TextAlignmentTypes.Center,
  text: "Hello world!",
});

root.addChild(row);
row.addChild(column);
column.addChild(markdown);

export const state: IState = {
  activeEntity: root,
  stages: {
    [root.getId()]: root,
  },
  rows: {
    [row.getId()]: row,
  },
  columns: {
    [column.getId()]: column,
  },
  images: {},
  markdowns: {
    [markdown.getId()]: markdown,
  },
};
// export const state: IState = {
//   activeEntity: {
//     id: "rootStage",
//     type: EntityTypes.Stage,
//   },
//   stages: {
//     rootStage: {
//       id: "rootStage",
//       type: EntityTypes.Stage,
//       children: [
//         {
//           type: EntityTypes.Row,
//           id: "first-row",
//         },
//       ],
//     },
//   },
//   rows: {
//     "first-row": {
//       id: "first-row",
//       type: EntityTypes.Row,
//       children: [
//         {
//           type: EntityTypes.Column,
//           id: "first-column",
//         },
//       ],
//     },
//   },
//   columns: {
//     "first-column": {
//       id: "first-column",
//       type: EntityTypes.Column,
//       children: [
//         {
//           type: EntityTypes.Markdown,
//           id: "first-markdown",
//         },
//       ],
//     },
//   },
//   images: {},
//   markdowns: {
//     "first-markdown": {
//       id: "first-markdown",
//       type: EntityTypes.Markdown,
//       data: {
//         text: "Hello world!",
//         alignment: TextAlignmentTypes.Center,
//       },
//     },
//   },
// };
