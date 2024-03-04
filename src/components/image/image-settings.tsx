import React, { FC } from "react";
import { useImageSettings } from "./hooks/useImageSettings";
import { IImage } from "../../domain/entities/image";
import { EntityRef } from "../../domain/interfaces/entity";

interface ImageSettingsComponent extends EntityRef, IImage {}

export const ImageSettings: FC<ImageSettingsComponent> = ({ src, ...entityRef }) => {
  const { updateContent } = useImageSettings(entityRef);

  return (
    <div className="section">
      <div className="section-header">Image</div>
      <div className="text-field">
        <label htmlFor="image-url">URL</label>
        <input value={src} id="image-url" type="text" onChange={(e) => updateContent({ src: e.target.value })} />
      </div>
    </div>
  );
};
