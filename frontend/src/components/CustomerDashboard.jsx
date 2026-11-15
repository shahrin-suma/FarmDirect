const produce = [
  { icon: "🍅", category: "VEGETABLES", name: "Vine tomatoes", farm: "Green Valley Farm", price: "৳ 120", unit: "/ kg", color: "tomato" },
  { icon: "🥬", category: "LEAFY GREENS", name: "Fresh spinach", farm: "Shobuj Agro", price: "৳ 60", unit: "/ bunch", color: "greens" },
  { icon: "🥭", category: "SEASONAL FRUIT", name: "Sweet mangoes", farm: "Ruposhi Orchard", price: "৳ 180", unit: "/ kg", color: "mango" },
];

function CustomerDashboard({ name, onLogout }) {
  return (
    <div className="customer-dashboard">
      <header className="customer-header">
        <a className="customer-brand" href="#top"><span>🌱</span><strong>FarmDirect</strong></a>
        <nav className="customer-nav"><a className="active" href="#discover">Discover</a><a href="#orders">My orders <span className="order-count">2</span></a></nav>
        <div className="customer-profile"><span className="avatar">{name?.charAt(0) || "S"}</span><span className="profile-name">{name}</span><button onClick={onLogout} className="logout-button">Logout</button></div>
      </header>
      <main className="customer-main" id="top">
        <section className="customer-welcome-banner">
          <div><span className="welcome-eyebrow">YOUR LOCAL HARVEST</span><h1>Good morning, {name?.split(" ")[0] || "there"} <span>☀️</span></h1><p>Fresh picks from nearby farms are ready for you.</p><a className="shop-button" href="#discover">Explore this week’s harvest <span>→</span></a></div>
          <div className="basket-art" aria-hidden="true">🧺<span>🥬 🍅 🥕</span></div>
        </section>
        <section className="customer-stats" id="orders"><div><span className="stat-icon">📦</span><p>Active orders</p><strong>2</strong><small>One arriving tomorrow</small></div><div><span className="stat-icon">💚</span><p>Local farms supported</p><strong>4</strong><small>Your choices make a difference</small></div><div><span className="stat-icon">🌿</span><p>Freshness score</p><strong>98<small>%</small></strong><small>Picked close to delivery</small></div></section>
        <section className="produce-section" id="discover"><div className="section-heading"><div><span className="welcome-eyebrow">PICKED FOR YOU</span><h2>This week’s fresh picks</h2><p>Seasonal produce, sourced from farms near you.</p></div><a href="#discover" className="view-all">View all produce <span>→</span></a></div>
          <div className="produce-grid">{produce.map((item) => <article className={`produce-card ${item.color}`} key={item.name}><div className="produce-illustration"><span>{item.icon}</span><small>LOCAL HARVEST</small></div><div className="produce-details"><span className="produce-category">{item.category}</span><h3>{item.name}</h3><p>🌱 &nbsp;{item.farm}</p><div className="produce-buy"><strong>{item.price}<small> {item.unit}</small></strong><button type="button" aria-label={`Add ${item.name} to basket`}>+</button></div></div></article>)}</div>
        </section>
        <footer className="customer-footnote">🌱 &nbsp;Every order brings you closer to the people who grow your food.</footer>
      </main>
    </div>
  );
}

export default CustomerDashboard;
