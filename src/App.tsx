import { AppContextProvider } from "./app/app-context-provider";
import { Editor } from "./components/editor";

export const App = () => (
  <AppContextProvider>
    <Editor />
  </AppContextProvider>
);
