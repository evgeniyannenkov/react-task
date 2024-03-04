import classNames from "classnames";
import { FC } from "react";
import { SelectableContainer } from "../selectable-container";
import { LayoutComponentProps } from "./types";

export const LayoutComponent: FC<LayoutComponentProps> = ({ selected, type, ...props }) => {
  return <SelectableContainer className={classNames({ [type]: true, selected })} {...props} />;
};
