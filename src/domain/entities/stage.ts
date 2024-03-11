import { FC } from "react";
import { LayoutSettings as StageSettings, LayoutComponent as StageComponent } from "../../components/layout";
import { Layout } from "../interfaces/layout";
import { EntityTypes, EntityId } from "../interfaces/entity";

export class Stage extends Layout {
  constructor(id: EntityId) {
    super(id, EntityTypes.Stage);
  }

  getComponent(): FC {
    return StageComponent as FC;
  }

  getSettingsComponent(): FC {
    return StageSettings as FC;
  }
}
