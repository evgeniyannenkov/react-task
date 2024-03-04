import { EntityBase, EntityTypes, IEntity } from "./entity";
import { Content } from "./content";

export const LayoutComponentTypes = {
  Stage: EntityTypes.Stage,
  Row: EntityTypes.Row,
  Column: EntityTypes.Column,
} as const;

export type LayoutComponentTypes = (typeof LayoutComponentTypes)[keyof typeof LayoutComponentTypes];

export interface ILayout extends IEntity {
  addChild(entity: Layout | Content): void;
  getChildren(): (Layout | Content)[];
}

export abstract class Layout extends EntityBase implements ILayout {
  protected children: (Layout | Content)[] = [];
  isLeaf: boolean = true;

  public addChild(entity: Layout | Content): void {
    entity.parentRef = this.toRef();
    this.children.push(entity);
  }

  public getChildren(): (Layout | Content)[] {
    return this.children;
  }
}
