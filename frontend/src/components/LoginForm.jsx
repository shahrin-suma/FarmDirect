import { useState } from "react";

function LoginForm({ onLogin, error }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="login-form-container">

      <div className="login-heading">
        <span className="admin-icon">🔐</span>

        <h2>Admin Login</h2>

        <p>
          Welcome back! Please login to your account.
        </p>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {error && (
          <p className="error-message">{error}</p>
        )}

        <button type="submit" className="login-button">
          Login to Dashboard
        </button>

      </form>

      <p className="login-footer">
        Authorized Admin Access Only
      </p>

    </div>
  );
}

export default LoginForm;