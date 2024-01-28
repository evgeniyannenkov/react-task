import React, { FC } from "react";
import { ImageWidget } from "./image-widget";
import { TextWidget } from "./text-widget";
import { WidgetType } from "../../types";

const widgetComponents = {
  [WidgetType.Image]: ImageWidget,
  [WidgetType.Text]: TextWidget,
};

interface WidgetProps {
  type: `${WidgetType}` | null;
}

export const WidgetSettings: FC<WidgetProps> = ({ type, ...props }) => {
  if (!type) return null;
  const WidgetComponent = widgetComponents[type];

  return WidgetComponent && <WidgetComponent {...props} />;
};
