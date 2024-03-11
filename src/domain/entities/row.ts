import { FC } from "react";
import { LayoutSettings as RowSettings, LayoutComponent as RowComponent } from "../../components/layout";
import { Layout } from "../interfaces/layout";
import { EntityTypes, EntityId } from "../interfaces/entity";

export class Row extends Layout {
  static parentType = EntityTypes.Stage;

  constructor(id: EntityId) {
    super(id, EntityTypes.Row);
  }

  getComponent(): FC {
    return RowComponent as FC;
  }

  getSettingsComponent(): FC {
    return RowSettings as FC;
  }
}
