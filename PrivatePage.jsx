import { useAuth } from "./AuthContext";

export default function PrivatePage() {
  const { logout } = useAuth();

  return (
    <>
      <h2>Welcome Page</h2>
      <button onClick={logout}>Logout</button>
    </>
  );
}
