import { FC, PropsWithChildren, useReducer, useEffect } from "react";
import { reducer, state as initialState } from "../../state";
import { AppStateContext } from "./app-state-context";
import { LocalStorageKeys } from "../../constants";

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const initState = () => {
    const savedState = localStorage.getItem(LocalStorageKeys.AppState);
    if (savedState) {
      try {
        return JSON.parse(savedState);
      } catch (e) {
        console.error(e);
      }
    }
    return initialState;
  };

  const [state, dispatch] = useReducer(reducer, initState());
  useEffect(() => {
    console.log("state changed", state);
    // localStorage.setItem(LocalStorageKeys.AppState, JSON.stringify(state));
  }, [state]);

  return <AppStateContext.Provider value={{ state, dispatch }}>{children}</AppStateContext.Provider>;
};
