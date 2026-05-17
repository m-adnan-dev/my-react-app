export default function Market() {
  return (
    <div>
      {/* ===== INLINE CSS ===== */}
      <style>{`
        .market-hero {
          background: linear-gradient(135deg, #198754, #0f5132);
          color: white;
          padding: 90px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .market-hero::after {
          content: "";
          position: absolute;
          width: 250px;
          height: 250px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          top: -60px;
          right: -60px;
        }

        .market-card {
          background: white;
          border-radius: 18px;
          padding: 25px;
          text-align: center;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .market-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }

        .market-card h3 {
          font-weight: 700;
        }

        .price {
          font-size: 1.6rem;
          font-weight: 800;
          color: #198754;
          margin: 10px 0;
        }

        .badge-live {
          position: absolute;
          top: 12px;
          right: 12px;
          background: #dc3545;
          color: white;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 20px;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }

        .category-icon {
          font-size: 28px;
        }

        .market-footer {
          background: #0f5132;
          color: white;
          text-align: center;
          padding: 15px;
        }

        .section-title {
          font-weight: 800;
          margin-bottom: 40px;
          color: #198754;
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="market-hero">
        <div className="container">
          <h1 className="display-4 fw-bold">📊 Live Market Prices</h1>
          <p className="lead mt-2">
            Real-time mandi rates across Punjab, Pakistan for farmers
          </p>
        </div>
      </section>

      {/* ===== MARKET GRID ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center section-title">Today’s Crop Prices</h2>

          <div className="row g-4">
            {[
              [
                "🌾 Wheat",
                "Rs. 3,200 / 40kg",
                "Stable demand in local markets",
              ],
              ["🌾 Rice", "Rs. 7,500 / 40kg", "High export demand"],
              [
                "🌿 Cotton",
                "Rs. 8,900 / 40kg",
                "Strong textile industry demand",
              ],
              ["🎋 Sugarcane", "Rs. 450 / 40kg", "Seasonal variation ongoing"],
              ["🌽 Maize", "Rs. 2,600 / 40kg", "Used in food & feed industry"],
              ["🥕 Vegetables", "Varies Daily", "Supply-based pricing changes"],
            ].map(([name, price, desc], i) => (
              <div className="col-md-4" key={i}>
                <div className="market-card">
                  <div className="badge-live">LIVE</div>

                  <div className="category-icon">{name.split(" ")[0]}</div>

                  <h3>{name}</h3>

                  <div className="price">{price}</div>

                  <p className="text-muted mb-0">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INFO STRIP ===== */}
      <section className="py-4 bg-white text-center">
        <div className="container">
          <p className="mb-0 text-muted">
            🔄 Prices update every 15 minutes • 📍 Punjab Mandi Network • 📊
            Data-driven insights
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="market-footer">
        <p className="mb-0">
          © 2026 AgriPakistan | Smart Market Intelligence System 🇵🇰
        </p>
      </footer>
    </div>
  );
}
