import { EntityBase, EntityTypes, IEntity } from "./entity";
import { IImage } from "../entities/image";
import { IMarkdown } from "../entities/markdown";

export const ContentComponentTypes = {
  Image: EntityTypes.Image,
  Markdown: EntityTypes.Markdown,
} as const;

export type ContentComponentTypes = (typeof ContentComponentTypes)[keyof typeof ContentComponentTypes];

export interface IContent extends IEntity {
  getData(): IImage | IMarkdown;
  setData(data: Partial<IImage | IMarkdown>): void;
}

export abstract class Content extends EntityBase {
  isLeaf: boolean = true;

  getData(): IImage | IMarkdown {
    return {} as IImage | IMarkdown;
  }
}
