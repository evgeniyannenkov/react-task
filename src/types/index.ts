export enum ActionTypes {
  SelectEntity = "selectEntity",
  AddRow = "addRow",
  AddColumn = "addColumn",
  SetWidget = "setWidget",
  UpdateWidget = "updateWidget",
}

export enum WidgetType {
  Image = "image",
  Text = "text",
}

export enum EntityTypes {
  Stage = "stage",
  Row = "row",
  Column = "column",
  Widget = "widget",
}

export enum AlignmentTypes {
  Left = "text-align-left",
  Center = "text-align-center",
  Right = "text-align-right",
}

export type Entity = {
  id: string;
  type: `${EntityTypes}`;
};

export type EntityContainer = Entity & {
  children: Entity["id"][];
};

export type Widget = Entity & {
  widgetType: `${WidgetType}`;
  state: {
    url?: string;
    text?: string;
    alignment?: `${AlignmentTypes}`;
  };
};
