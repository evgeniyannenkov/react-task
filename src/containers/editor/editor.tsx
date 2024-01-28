import { FC, Fragment } from "react";
import { Column } from "../../components/column";
import { Image } from "../../components/image";
import { Markdown } from "../../components/markdown";
import { Row } from "../../components/row";
import { Stage } from "../../components/stage";
import { Sidebar } from "../sidebar";
import { ActionTypes, AlignmentTypes, WidgetType } from "../../types";
import { useAppStateContext } from "../app-context-provider";

export const Editor: FC = () => {
  const { state, dispatch } = useAppStateContext();

  return (
    <div className="editor">
      <Stage onSelect={() => dispatch({ type: ActionTypes.SelectEntity, payload: { stageId: state.activeStageId } })}>
        {state.stages[state.activeStageId].children.map((rowId) => (
          <Row
            key={rowId}
            selected={state.activeEntityId === rowId}
            onSelect={() =>
              dispatch({ type: ActionTypes.SelectEntity, payload: { rowId, stageId: state.activeStageId } })
            }
          >
            {state.rows[rowId].children.map((columnId) => (
              <Column
                key={columnId}
                selected={state.activeEntityId === columnId}
                onSelect={() =>
                  dispatch({
                    type: ActionTypes.SelectEntity,
                    payload: { rowId, columnId, stageId: state.activeStageId },
                  })
                }
              >
                {state.columns[columnId].children.map((widgetId) => (
                  <Fragment key={widgetId}>
                    {state.widgets[widgetId].widgetType === WidgetType.Image ? (
                      <Image src={state.widgets[widgetId].state.url} alt="" />
                    ) : (
                      <Markdown className={state.widgets[widgetId].state.alignment || AlignmentTypes.Left}>
                        {state.widgets[widgetId].state.text ?? ""}
                      </Markdown>
                    )}
                  </Fragment>
                ))}
              </Column>
            ))}
          </Row>
        ))}
      </Stage>

      <Sidebar />
    </div>
  );
};
