import "./App.css";
import { useAuth } from "./AuthContext";
import PrivatePage from "./PrivatePage";
import LoginPage from "./LoginPage";

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="App">
      {isAuthenticated ? <PrivatePage /> : <LoginPage />}
    </div>
  );
}
