import { EntityId, EntityTypes } from "./interfaces/entity";
import { Stage } from "./entities/stage";
import { Row } from "./entities/row";
import { Column } from "./entities/column";
import { Image } from "./entities/image";
import { Markdown } from "./entities/markdown";

export const entityMapping = {
  [EntityTypes.Stage]: Stage,
  [EntityTypes.Row]: Row,
  [EntityTypes.Column]: Column,
  [EntityTypes.Image]: Image,
  [EntityTypes.Markdown]: Markdown,
};

export function makeEntityInstance<T extends EntityTypes>(
  type: T,
  id: EntityId,
  data?: any
): InstanceType<(typeof entityMapping)[T]> {
  const EntityClass = entityMapping[type];
  if (!EntityClass) throw new Error(`Unsupported entity type: ${type}`);

  return new EntityClass(id, data) as InstanceType<(typeof entityMapping)[T]>;
}
