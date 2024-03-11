import { FC, Fragment, memo } from "react";
import { useSidebar } from "./useSidebar";
import { EntityRef } from "../../domain/interfaces/entity";

export const Sidebar: FC = () => {
  const sections = useSidebar();
  return (
    <div className="properties">
      {sections.map((section) => {
        const SidebarSection: FC<EntityRef> = section.getSettingsComponent();
        return (
          <Fragment key={section.getId()}>
            <SidebarSection id={section.getId()} type={section.getType()} key={section.getId()} />
          </Fragment>
        );
      })}
    </div>
  );
};
