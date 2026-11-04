import { useState } from "react";

import LoginBranding from "./components/LoginBranding";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (email, password) => {

    if (
      email === "admin@farmdirect.com" &&
      password === "admin123"
    ) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid email or password!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setError("");
  };

  if (isLoggedIn) {
    return <Dashboard onLogout={handleLogout} />;
  }

  return (
    <div className="login-page">

      <LoginBranding />

      <div className="login-right">
        <LoginForm
          onLogin={handleLogin}
          error={error}
        />
      </div>

    </div>
  );
}

export default App;