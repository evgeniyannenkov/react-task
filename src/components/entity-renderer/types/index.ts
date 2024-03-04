import { ReactNode } from "react";

export interface EntityComponentProps {
  children?: ReactNode;
  selected?: boolean;
  onSelect?(): void;
  type: string;
}
