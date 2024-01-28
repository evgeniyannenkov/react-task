import { AppContextProvider } from "./containers/app-context-provider";
import { Editor } from "./containers/editor";

export const App = () => (
  <AppContextProvider>
    <Editor />
  </AppContextProvider>
);
