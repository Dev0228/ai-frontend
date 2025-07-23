import { Provider } from "react-redux";
import { store } from "@/store";

interface AppContainerProps {
  children: React.ReactNode;
}

export default function AppContainer({ children }: AppContainerProps) {
  return <Provider store={store}>{children}</Provider>;
}
