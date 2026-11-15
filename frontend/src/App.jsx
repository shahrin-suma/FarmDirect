import { useState } from "react";

import LoginBranding from "./components/LoginBranding";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import CustomerLogin from "./components/CustomerLogin";
import CustomerDashboard from "./components/CustomerDashboard";

function App() {
  const [page, setPage] = useState("welcome");
  const [error, setError] = useState("");
  const [customerName, setCustomerName] = useState("Shahrin Anusree");

  const handleAdminLogin = (email, password) => {
    if (email === "admin@farmdirect.com" && password === "admin123") {
      setPage("admin-dashboard");
      setError("");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleCustomerLogin = (email, password) => {
    if (email === "customer@farmdirect.com" && password === "customer123") {
      setCustomerName("ShahrinAnusree");
      setPage("customer-dashboard");
      setError("");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  const goHome = () => { setError(""); setPage("welcome"); };
  const openLogin = (role) => { setError(""); setPage(role); };

  if (page === "admin-dashboard") return <Dashboard onLogout={goHome} />;
  if (page === "customer-dashboard") return <CustomerDashboard name={customerName} onLogout={goHome} />;
  if (page === "admin-login" || page === "customer-login") {
    return (
      <div className="login-page">
        <LoginBranding />
        <div className="login-right">
          {page === "admin-login"
            ? <LoginForm onLogin={handleAdminLogin} error={error} onBack={goHome} />
            : <CustomerLogin onLogin={handleCustomerLogin} error={error} onBack={goHome} />}
        </div>
      </div>
    );
  }

  return (
    <main className="welcome-page">
      <nav className="welcome-nav">
        <a className="brand-logo" href="#home" onClick={(event) => { event.preventDefault(); goHome(); }}>
          <span className="logo-icon">🌱</span><span><strong>FarmDirect</strong><small>FRESH FROM THE FARM</small></span>
        </a>
        <span className="nav-note">A better way to shop local</span>
      </nav>
      <section className="welcome-hero" id="home">
        <div className="welcome-copy">
          <span className="welcome-eyebrow">GOOD FOOD. FAIR PRICES. LOCAL FARMERS.</span>
          <h1>Fresh from the farm,<br /><em>straight to you.</em></h1>
          <p>Discover seasonal produce and support the people who grow your food. Choose how you’d like to continue.</p>
          <div className="welcome-highlights"><span>✦ Locally grown</span><span>✦ Picked with care</span><span>✦ Community first</span></div>
        </div>
        <div className="role-panel">
          <div className="role-panel-heading"><span>WELCOME TO FARMDIRECT</span><h2>Choose your portal</h2><p>Select an option to get started.</p></div>
          <button className="role-card customer-role" onClick={() => openLogin("customer-login")}>
            <span className="role-icon">🧺</span><span className="role-copy"><strong>Customer</strong><small>Browse fresh produce and manage your orders</small></span><span className="role-arrow">↗</span>
          </button>
          <button className="role-card admin-role" onClick={() => openLogin("admin-login")}>
            <span className="role-icon">🌾</span><span className="role-copy"><strong>Administrator</strong><small>Manage the marketplace and its community</small></span><span className="role-arrow">↗</span>
          </button>
          <div className="role-panel-foot"><span className="secure-dot" /> Secure access to your FarmDirect account</div>
        </div>
      </section>
      <footer className="welcome-footer"><span>🌿 &nbsp;Better food starts closer to home.</span><span>© 2025 FarmDirect Marketplace</span></footer>
    </main>
  );
}

export default App;
