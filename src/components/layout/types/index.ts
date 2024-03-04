import { ReactNode } from "react";

export interface LayoutComponentProps {
  children?: ReactNode;
  selected?: boolean;
  onSelect?(): void;
  type: string;
}
