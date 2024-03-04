import { FC } from "react";
import { Layout } from "../../domain/interfaces/layout";
import { useLayoutSettings } from "./hooks/useLayoutSettings";

export const LayoutSettings: FC<Layout> = (instance) => {
  const type = instance.getType();
  const { actions, handleAdd, isActive } = useLayoutSettings(type);

  return (
    <div className="section">
      <div className="section-header">{type}</div>
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
