import { FC, HTMLProps } from "react";
import { useEntityRenderer } from "./hooks/useEntityRenderer";
import { EntityComponentProps } from "./types";
import { Layout } from "../../domain/interfaces/layout";
import { Content } from "../../domain/interfaces/content";

interface EntityRendererProps extends HTMLProps<HTMLDivElement> {
  child: Layout | Content;
}

export const EntityRenderer: FC<EntityRendererProps> = ({ child }) => {
  const { selected, selectEntity, isLayout } = useEntityRenderer(child);

  const Component: FC<EntityComponentProps> = child.getComponent();
  return (
    <Component type={child.getType()} onSelect={selectEntity} selected={selected}>
      {isLayout(child) &&
        child.getChildren().map((nextChild) => <EntityRenderer key={nextChild.getId()} child={nextChild} />)}
    </Component>
  );
};
