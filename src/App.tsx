import AppContainer from "./app/AppContainer";
import { AppRoutes } from "./app/routes";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <AppContainer>
        <AppRoutes />
      </AppContainer>
    </div>
  );
}

export default App;
