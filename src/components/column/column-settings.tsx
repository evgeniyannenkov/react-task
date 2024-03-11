import { FC } from "react";
import { ContentSelector } from "../content";
import { useColumnSettings } from "./hooks/useColumnSettings";
import { EntityRef } from "../../domain/interfaces/entity";

export const ColumnSettings: FC<EntityRef> = ({ id, type }) => {
  const { component: ContentSettingsComponent, childRef } = useColumnSettings({ id, type });
  return (
    <>
      <div className="section">
        <div className="section-header">{type}</div>
        <ContentSelector />
      </div>
      {childRef && <ContentSettingsComponent {...childRef} />}
    </>
  );
};
