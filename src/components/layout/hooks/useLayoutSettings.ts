import { useAppStateContext } from "../../../app/app-context-provider";
import { ActionTypes } from "../../../types";
import { EntitiesTree } from "../../../domain/EntitiesTree";
import { EntityTypes, EntityRef } from "../../../domain/interfaces/entity";

export const useLayoutSettings = (entityRef: EntityRef) => {
  const { state, dispatch } = useAppStateContext();

  const entityTree = EntitiesTree.getInstance();
  const actions = entityTree.getChildren(entityRef.type);

  function handleAdd(targetType: EntityTypes) {
    dispatch({
      type: ActionTypes.AddEntity,
      payload: {
        type: targetType,
        parentRef: state.activeEntity!.toRef(),
      },
    });
  }

  const isActive = (type: EntityTypes) => state.activeEntity?.getType() === entityTree.findNode(type)?.parentType;
  return { handleAdd, isActive, actions };
};
