function DashboardCard({ icon, title, number }) {
  return (
    <div className="dashboard-card">

      <div className="card-icon">
        {icon}
      </div>

      <div>
        <p>{title}</p>
        <h2>{number}</h2>
      </div>

    </div>
  );
}

export default DashboardCard;