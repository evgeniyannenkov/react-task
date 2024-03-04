import { useAppStateContext } from "../../../app/app-context-provider";
import { ActionTypes } from "../../../types";
import { EntitiesTree } from "../../../domain/EntitiesTree";
import { EntityTypes } from "../../../domain/interfaces/entity";

export const useLayoutSettings = (type: EntityTypes) => {
  const { state, dispatch } = useAppStateContext();

  const entityTree = EntitiesTree.getInstance();
  const actions = entityTree.getChildren(type);

  function handleAdd(targetType: EntityTypes) {
    console.log("handleAdd", targetType);
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
