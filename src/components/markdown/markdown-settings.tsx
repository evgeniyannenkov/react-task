import React, { FC } from "react";
import { TextAlignmentTypes } from "../../types";
import { useMarkdownSettings } from "./hooks/useMarkdownSettings";
import { EntityRef } from "../../domain/interfaces/entity";

interface MarkdownSettingsComponent extends EntityRef {}

export const MarkdownSettings: FC<MarkdownSettingsComponent> = ({ ...entityRef }) => {
  const { getIcon, updateContent, data } = useMarkdownSettings(entityRef);
  const { alignment, text } = data;

  return (
    <div className="section">
      <div className="section-header">Text</div>
      <div className="button-group-field">
        <label>Alignment</label>
        <div className="button-group">
          {Object.values(TextAlignmentTypes).map((alignmentType) => {
            const Icon = getIcon(alignmentType);
            return (
              <button
                key={alignmentType}
                className={alignment === alignmentType ? "selected" : ""}
                onClick={() => updateContent({ alignment: alignmentType })}
              >
                <Icon />
              </button>
            );
          })}
        </div>
      </div>
      <div className="textarea-field">
        <textarea
          rows={8}
          placeholder="Enter text"
          value={text}
          onChange={(e) => updateContent({ text: e.target.value })}
        />
      </div>
    </div>
  );
};
