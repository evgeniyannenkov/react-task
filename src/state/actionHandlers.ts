import { IState, StateCollectionContentKeys, StateCollectionKeys, StateCollectionLayoutKeys } from "./state";
import { SelectEntityAction, AddEntityAction, UpdateContentAction } from "./actions";
import { makeEntityInstance } from "../domain/EntityComponentFactory";

export function selectEntityActionHandler(state: IState, action: SelectEntityAction) {
  const { id, type } = action.payload;
  const entity = state[`${type}s` as keyof StateCollectionLayoutKeys][id];
  return {
    ...state,
    activeEntity: entity,
  };
}

export function addEntityActionHandler(state: IState, action: AddEntityAction) {
  const { parentRef, type, data } = action.payload;
  console.log("addEntityActionHandler", action.payload);

  const parentCollectionKey = `${parentRef.type}s` as keyof StateCollectionLayoutKeys;
  const collectionKey = `${type}s` as keyof StateCollectionKeys;

  const parent = state[parentCollectionKey][parentRef.id];
  const child = makeEntityInstance(type, window.crypto.randomUUID(), data);
  child.parentRef = parentRef;
  parent.addChild(child);

  return {
    ...state,
    [collectionKey]: {
      ...state[collectionKey],
      [child.getId()]: child,
    },
    [parentCollectionKey]: {
      ...state[parentCollectionKey],
      [parent.getId()]: parent,
    },
    ...(!child.isLeaf && { activeEntity: child }),
  };
}

export function updateContentActionHandler(state: IState, action: UpdateContentAction) {
  const entity = action.payload;
  const { id, type } = entity.toRef();
  const collectionKey = `${type}s` as keyof StateCollectionContentKeys;
  return {
    ...state,
    [collectionKey]: {
      ...state[collectionKey],
      [id]: entity,
    },
  };
}
