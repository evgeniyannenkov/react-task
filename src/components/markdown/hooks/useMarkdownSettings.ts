import { useAppStateContext } from "../../../app/app-context-provider";
import { Icons } from "../../icons";
import { TextAlignmentTypes, ActionTypes } from "../../../types";
import { IMarkdown, Markdown } from "../../../domain/entities/markdown";
import { EntityRef } from "../../../domain/interfaces/entity";
import { getCollectionByType } from "../../../state/utils/getCollectionByType";

const textAlignmentIconMapper = {
  [TextAlignmentTypes.Left]: Icons.TextAlignLeft,
  [TextAlignmentTypes.Center]: Icons.TextAlignCenter,
  [TextAlignmentTypes.Right]: Icons.TextAlignRight,
};
export const useMarkdownSettings = (entityRef: EntityRef) => {
  const { state, dispatch } = useAppStateContext();

  const collection = getCollectionByType(state, entityRef.type);
  const entity = collection[entityRef.id] as Markdown;
  const data = entity.getData();

  const updateContent = (data: Partial<IMarkdown>) => {
    entity.setData(data);
    dispatch({ type: ActionTypes.UpdateContent, payload: entity });
  };

  const getIcon = (alignment: TextAlignmentTypes) => textAlignmentIconMapper[alignment];

  return { getIcon, updateContent, data };
};
