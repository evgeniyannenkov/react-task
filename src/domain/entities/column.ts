import { FC } from "react";
import { LayoutComponent as ColumnComponent } from "../../components/layout";
import { ColumnSettings } from "../../components/column";
import { Layout } from "../interfaces/layout";
import { EntityId, EntityTypes } from "../interfaces/entity";
import { Content } from "../interfaces/content";

export class Column extends Layout {
  static parentType = EntityTypes.Row;

  constructor(id: EntityId) {
    super(id, EntityTypes.Column);
  }

  addChild(entity: Content) {
    this.children[0] = entity;
  }

  getComponent(): FC {
    return ColumnComponent as FC;
  }

  getSettingsComponent(): FC {
    return ColumnSettings as FC;
  }
}
