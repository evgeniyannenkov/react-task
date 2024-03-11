import { FC } from "react";
import { Content } from "../../../domain/interfaces/content";
import { EntityRef } from "../../../domain/interfaces/entity";
import { useAppStateContext } from "../../../app/app-context-provider";
import { Column } from "../../../domain/entities/column";

export const useColumnSettings = (entityRef: EntityRef) => {
  const { state } = useAppStateContext();
  const entity = state.activeEntity as Column;

  const activeChild = entity.getChildren().at(0) as Content | undefined;
  const component: FC<EntityRef> = activeChild ? activeChild?.getSettingsComponent() : () => null;
  return { component, childRef: activeChild?.toRef() };
};
