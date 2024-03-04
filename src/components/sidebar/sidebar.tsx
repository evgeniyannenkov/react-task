import { FC, Fragment, memo } from "react";
import { useSidebar } from "./useSidebar";

export const Sidebar: FC = memo(
  () => {
    const sections = useSidebar();
    console.log("sections", sections);
    return (
      <div className="properties">
        {sections.map((section) => {
          const SidebarSection = section.getSettingsComponent();
          return (
            <Fragment key={section.getId()}>
              <SidebarSection key={section.getId()} />
            </Fragment>
          );
        })}
      </div>
    );
  },
  () => true
);
