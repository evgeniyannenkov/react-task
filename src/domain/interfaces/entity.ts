import { FC } from "react";

export enum EntityTypes {
  Stage = "stage",
  Row = "row",
  Column = "column",
  Image = "image",
  Markdown = "markdown",
}

export type EntityId = string;

export type EntityRef = {
  id: EntityId;
  type: EntityTypes;
};

export interface IEntity {
  getId(): EntityId;
  getType(): EntityTypes;
  toRef(): EntityRef;
  getComponent(): FC;
  getSettingsComponent(): FC;
}

export abstract class EntityBase implements IEntity {
  static parentType: EntityTypes | null = null;
  protected id: EntityId;
  protected type: EntityTypes;
  isLeaf: boolean = false;
  parentRef: EntityRef | null = null;

  protected constructor(id: EntityId, type: EntityTypes) {
    this.id = id;
    this.type = type;
  }

  getId(): EntityId {
    return this.id;
  }

  getType(): EntityTypes {
    return this.type;
  }

  toRef(): EntityRef {
    return {
      id: this.id,
      type: this.type,
    };
  }

  getComponent(): FC {
    return () => null;
  }

  getSettingsComponent(): FC {
    return () => null;
  }
}
