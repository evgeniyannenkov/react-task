import { FC } from "react";
import { Image as ImageComponent, ImageSettings } from "../../components/image";
import { IContent, Content } from "../interfaces/content";
import { EntityId, EntityTypes } from "../interfaces/entity";

export interface IImage {
  src: string;
}

export class Image extends Content implements IContent, IImage {
  static parentType = EntityTypes.Column;
  src: string;

  constructor(id: EntityId, data: IImage) {
    super(id, EntityTypes.Image);
    this.src = data?.src || "";
  }

  getData() {
    return { src: this.src };
  }

  setData(data: Partial<IImage>): void {
    this.src = data?.src ?? this.src;
  }

  getComponent<T>() {
    return (props: T) => ImageComponent({ ...props, ...this.getData() });
  }

  getSettingsComponent(): FC {
    return ImageSettings as FC;
  }
}
