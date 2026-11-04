import DashboardCard from "./DashboardCard";

function Dashboard({ onLogout }) {
  return (
    <div className="dashboard-container">

      <header className="dashboard-header">

        <div>
          <h2>🌱 FarmDirect</h2>
          <p>Admin Dashboard</p>
        </div>

        <button onClick={onLogout} className="logout-button">
          Logout
        </button>

      </header>

      <main className="dashboard-content">

        <div className="dashboard-welcome">
          <h1>Welcome, Admin!</h1>
          <p>
            Here's an overview of your FarmDirect marketplace.
          </p>
        </div>

        <div className="dashboard-cards">

          <DashboardCard
            icon="👨‍🌾"
            title="Total Farmers"
            number="120"
          />

          <DashboardCard
            icon="🛒"
            title="Total Customers"
            number="450"
          />

          <DashboardCard
            icon="🥬"
            title="Total Products"
            number="280"
          />

          <DashboardCard
            icon="📦"
            title="Total Orders"
            number="95"
          />

        </div>

        <div className="dashboard-info">
          <h2>System Overview</h2>

          <p>
            Manage farmers, customers, products and
            orders from one central dashboard.
          </p>
        </div>

      </main>

    </div>
  );
}

export default Dashboard;