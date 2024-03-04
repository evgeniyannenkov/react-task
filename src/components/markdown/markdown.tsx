import { FC } from "react";
import MarkdownBase, { MarkdownToJSX } from "markdown-to-jsx";
import { TextAlignmentTypes } from "../../types";

export interface MarkdownProps {
  id?: string;
  className?: string;
  children?: string;
  text: string;
  alignment?: TextAlignmentTypes;
  options?: MarkdownToJSX.Options;
}

export const Markdown: FC<MarkdownProps> = (props) => {
  const { text, alignment, options, ...rest } = props;
  return (
    <div className={`markdown ${alignment}`} {...rest}>
      <MarkdownBase options={options}>{text}</MarkdownBase>
    </div>
  );
};
