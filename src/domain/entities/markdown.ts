import { FC } from "react";
import { Markdown as MarkdownComponent, MarkdownSettings } from "../../components/markdown";
import { IContent, Content } from "../interfaces/content";
import { EntityTypes, EntityId } from "../interfaces/entity";
import { TextAlignmentTypes } from "../../types";

export interface IMarkdown {
  text: string;
  alignment: TextAlignmentTypes;
}

export class Markdown extends Content implements IContent, IMarkdown {
  static parentType = EntityTypes.Column;
  text: string;
  alignment: TextAlignmentTypes;

  constructor(id: EntityId, data: IMarkdown) {
    super(id, EntityTypes.Markdown);
    this.text = data?.text || "";
    this.alignment = data?.alignment || TextAlignmentTypes.Left;
  }

  getData() {
    return { text: this.text, alignment: this.alignment } as IMarkdown;
  }

  getComponent<T>() {
    return (props: T) => MarkdownComponent({ ...props, ...this.getData() });
  }

  getSettingsComponent(): FC {
    return MarkdownSettings as FC;
  }

  setData(data: Partial<IMarkdown>): void {
    this.text = data?.text ?? this.text;
    this.alignment = data?.alignment ?? this.alignment;
  }
}
