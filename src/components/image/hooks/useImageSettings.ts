import { useAppStateContext } from "../../../app/app-context-provider";
import { ActionTypes } from "../../../types";
import { getCollectionByType } from "../../../state/utils/getCollectionByType";
import { EntityRef } from "../../../domain/interfaces/entity";
import { IImage, Image } from "../../../domain/entities/image";

export const useImageSettings = (entityRef: EntityRef) => {
  const { state, dispatch } = useAppStateContext();

  const updateContent = (data: Partial<IImage>) => {
    const collection = getCollectionByType(state, entityRef.type);
    const entity = collection[entityRef.id] as Image;
    entity.setData(data);
    dispatch({ type: ActionTypes.UpdateContent, payload: entity });
  };

  return { updateContent };
};
