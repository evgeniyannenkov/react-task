import { FC, PropsWithChildren, useReducer, useEffect } from "react";
import { reducer, state as defaultInitialState } from "../../state";
import { AppStateContext } from "./app-state-context";
import { LocalStorageKeys } from "../../constants";

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const getInitialState = () => {
    const savedState = localStorage.getItem(LocalStorageKeys.AppState);
    if (savedState) {
      try {
        return JSON.parse(savedState);
      } catch (e) {
        console.error(e);
      }
    }
    return defaultInitialState;
  };

  const [state, dispatch] = useReducer(reducer, getInitialState());
  useEffect(() => {
    console.log("STATE", state);
    // localStorage.setItem(LocalStorageKeys.AppState, JSON.stringify(state));
  }, [state]);

  return <AppStateContext.Provider value={{ state, dispatch }}>{children}</AppStateContext.Provider>;
};
