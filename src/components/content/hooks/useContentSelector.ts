import { useAppStateContext } from "../../../app/app-context-provider";
import { EntityTypes } from "../../../domain/interfaces/entity";
import { ContentComponentTypes } from "../../../domain/interfaces/content";
import { Icons } from "../../icons";
import { ActionTypes } from "../../../types";
import { Column } from "../../../domain/entities/column";

const contentComponentIconMapper = {
  [EntityTypes.Markdown]: Icons.Text,
  [EntityTypes.Image]: Icons.Image,
};
export const useContentSelector = () => {
  const { state, dispatch } = useAppStateContext();

  const activeEntity = state.activeEntity as Column;
  const children = activeEntity?.getChildren();

  const activeContent = children && children[0];

  const select = (type: ContentComponentTypes) => {
    console.log("select", type);
    dispatch({
      type: ActionTypes.AddEntity,
      payload: {
        type,
        parentRef: activeEntity.toRef(),
        data: {},
      },
    });
  };
  const getSelected = (type: ContentComponentTypes) => type === activeContent?.getType();
  const getIcon = (type: ContentComponentTypes) => contentComponentIconMapper[type];

  return { select, getSelected, getIcon };
};
