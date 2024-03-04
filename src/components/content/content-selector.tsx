import React, { FC } from "react";
import classNames from "classnames";
import { useContentSelector } from "./hooks/useContentSelector";
import { ContentComponentTypes } from "../../domain/interfaces/content";

export const ContentSelector: FC = () => {
  const { select, getSelected, getIcon } = useContentSelector();
  return (
    <div className="button-group-field">
      <label>Contents</label>
      <div className="button-group">
        {Object.values(ContentComponentTypes).map((type) => {
          const Icon = getIcon(type);
          return (
            <button key={type} className={classNames({ selected: getSelected(type) })} onClick={() => select(type)}>
              <Icon />
            </button>
          );
        })}
      </div>
    </div>
  );
};
