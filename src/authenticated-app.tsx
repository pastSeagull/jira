import { useAuth } from "context/auto-context";
import { ProjectListScreen } from "screens/project-list";

export const AuthentictedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>登出</button>
      <ProjectListScreen />
    </div>
  );
};
