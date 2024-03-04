import React from "react";
import { AppStateContext } from "./app-state-context";

export const useAppStateContext = () => React.useContext(AppStateContext);
