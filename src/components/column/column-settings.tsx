import React, { FC } from "react";
import { Column } from "../../domain/entities/column";
import { ContentSelector } from "../content";
import { Content } from "../../domain/interfaces/content";

export const ColumnSettings: FC<Column> = (entity) => {
  const activeChild = entity.getChildren().at(0) as Content | undefined;
  const ContentSettingsComponent = activeChild ? activeChild?.getSettingsComponent() : () => null;

  return (
    <>
      <div className="section">
        <div className="section-header">{entity.getType()}</div>
        <ContentSelector />
      </div>
      <ContentSettingsComponent key={activeChild?.getId()} />
    </>
  );
};
