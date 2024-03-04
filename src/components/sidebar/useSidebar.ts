import { useAppStateContext } from "../../app/app-context-provider";
import { EntityBase, EntityRef } from "../../domain/interfaces/entity";
import { IState } from "../../state";
import { getCollectionByType } from "../../state/utils/getCollectionByType";
export const useSidebar = () => {
  const { state } = useAppStateContext();
  const { activeEntity } = state;

  if (!activeEntity) {
    return [];
  }

  return buildHierarchy(state, activeEntity);
};

function buildHierarchy(state: IState, activeEntity: IState["activeEntity"]): EntityBase[] {
  const path: EntityBase[] = [];
  let currentEntityRef: EntityRef | undefined = activeEntity?.toRef();

  while (currentEntityRef) {
    const currentCollection = getCollectionByType(state, currentEntityRef.type);
    const currentEntity = currentCollection[currentEntityRef.id];

    if (!currentEntity) {
      throw new Error(`Entity with id "${currentEntityRef.id}" not found in "${currentEntityRef.type}s" collection`);
    }

    if (currentEntity) {
      path.unshift(currentEntity);

      if (currentEntity.parentRef) {
        currentEntityRef = currentEntity.parentRef;
      } else {
        currentEntityRef = undefined;
      }
    }
  }

  return path;
}
