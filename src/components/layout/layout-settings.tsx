import { FC } from "react";
import { Layout } from "../../domain/interfaces/layout";
import { useLayoutSettings } from "./hooks/useLayoutSettings";
import { EntityRef } from "../../domain/interfaces/entity";

export const LayoutSettings: FC<EntityRef> = (entityRef) => {
  const { actions, handleAdd, isActive } = useLayoutSettings(entityRef);

  return (
    <div className="section">
      <div className="section-header">{entityRef.type}</div>
      <div className="actions">
        {actions.map((action) => (
          <button className="action" disabled={!isActive(action)} key={action} onClick={() => handleAdd(action)}>
            Add {action}
          </button>
        ))}
      </div>
    </div>
  );
};
