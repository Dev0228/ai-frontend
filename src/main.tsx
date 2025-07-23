import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { initApp } from "@/app/app.ts";
import { LoadingAppScreen } from "@/app/loadingAppScreen.tsx";

const root = createRoot(document.getElementById("root")!);

root.render(<LoadingAppScreen />);

initApp().then(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
