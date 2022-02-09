import { AuthentictedApp } from "authenticated-app";
import { useAuth } from "context/auto-context";
import { UnauthenticatedApp } from "unauthenticated-app";
import "./App.css";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthentictedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
