import { BrowserRouter } from "react-router-dom";
import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@store/index";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </ReduxProvider>
  );
};
