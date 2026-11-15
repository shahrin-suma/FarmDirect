import { useState } from "react";

function CustomerLogin({ onLogin, error, onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-form-container">
      <div className="login-heading">
        <button type="button" className="back-link" onClick={onBack}>← Back to portal selection</button>
        <span className="admin-icon">🧺</span>
        <h2>Customer Login</h2>
        <p>Sign in to discover fresh picks and keep track of your orders.</p>
      </div>
      <form onSubmit={(event) => { event.preventDefault(); onLogin(email, password); }}>
        <div className="form-group"><label htmlFor="customer-email">Email address</label><input id="customer-email" type="email" autoComplete="username" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required /></div>
        <div className="form-group"><label htmlFor="customer-password">Password</label><div className="password-wrapper"><input id="customer-password" type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} required /><button type="button" className="show-password" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button></div></div>
        {error && <p className="error-message" role="alert">{error}</p>}
        <button type="submit" className="login-button">Continue to my account <span aria-hidden="true">→</span></button>
      </form>
      <div className="demo-credentials"><strong>Demo customer account</strong><span>customer@farmdirect.com</span><span>customer123</span></div>
      <p className="login-footer">Fresh food and your orders, all in one place.</p>
    </div>
  );
}

export default CustomerLogin;
