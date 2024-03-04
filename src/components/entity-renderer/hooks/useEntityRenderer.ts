import { Layout, LayoutComponentTypes } from "../../../domain/interfaces/layout";
import { EntityBase } from "../../../domain/interfaces/entity";
import { ActionTypes } from "../../../types";
import { useAppStateContext } from "../../../app/app-context-provider";

export const useEntityRenderer = (child: EntityBase) => {
  const { state, dispatch } = useAppStateContext();

  const childRef = child.toRef();

  const selectEntity = () => {
    dispatch({ type: ActionTypes.SelectEntity, payload: childRef });
  };

  const isLayout = (entity: EntityBase): entity is Layout => {
    return Object.values(LayoutComponentTypes).includes(entity.getType() as LayoutComponentTypes);
  };

  const selected = state.activeEntity?.getId() === childRef.id;

  return {
    selectEntity,
    selected,
    isLayout,
  };
};
