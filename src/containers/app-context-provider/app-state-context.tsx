import { createContext, Dispatch } from "react";
import { Action, IState, state as initialState } from "../../store";

export const AppStateContext = createContext<{ state: IState; dispatch: Dispatch<Action> }>({
  state: initialState,
  dispatch: () => null,
});
