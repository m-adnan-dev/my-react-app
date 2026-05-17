export default function Weather() {
  return (
    <div>
      {/* ===== INLINE DESIGN SYSTEM ===== */}
      <style>{`
        .hero {
          background: linear-gradient(135deg, #198754, #0f5132);
          color: white;
          padding: 90px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero::after {
          content: "";
          position: absolute;
          width: 250px;
          height: 250px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          top: -60px;
          right: -60px;
        }

        .section-title {
          font-weight: 800;
          color: #198754;
          text-align: center;
          margin-bottom: 40px;
        }

        .weather-main {
          background: #fff;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: 0.3s;
        }

        .weather-main:hover {
          transform: translateY(-6px);
        }

        .temp {
          font-size: 3rem;
          font-weight: 800;
          color: #ffc107;
        }

        .weather-icon {
          font-size: 60px;
          margin: 10px 0;
        }

        .stat-box {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 15px;
          transition: 0.3s;
        }

        .stat-box:hover {
          transform: translateY(-4px);
          background: #eaffea;
        }

        .advice-card {
          background: #fff;
          border-radius: 18px;
          padding: 20px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.06);
          transition: 0.3s;
          height: 100%;
        }

        .advice-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.12);
        }

        .footer {
          background: #0f5132;
          color: white;
          text-align: center;
          padding: 15px;
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container">
          <h1 className="display-4 fw-bold">🌦️ Weather Dashboard</h1>
          <p className="lead mt-2">
            Smart AI-based weather insights for farmers in Pakistan
          </p>
        </div>
      </section>

      {/* ===== MAIN WEATHER CARD ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="weather-main text-center">
                <h3 className="text-success fw-bold">📍 Punjab, Pakistan</h3>

                <div className="weather-icon">☀️</div>

                <div className="temp">32°C</div>

                <p className="text-muted mt-2">
                  Sunny weather with light breeze — ideal for farming activities
                </p>

                {/* ===== STATS ===== */}
                <div className="row g-3 mt-4">
                  <div className="col-4">
                    <div className="stat-box">
                      <h6>💧 Humidity</h6>
                      <strong>45%</strong>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="stat-box">
                      <h6>🌬 Wind</h6>
                      <strong>12 km/h</strong>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="stat-box">
                      <h6>🌧 Rain</h6>
                      <strong>10%</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FARMING ADVICE ===== */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title">🌾 Farming Recommendations</h2>

          <div className="row g-4">
            {[
              [
                "🚜 Irrigation",
                "Reduce watering today due to warm weather conditions.",
              ],
              [
                "🌱 Crop Safety",
                "Wheat crops are safe with no heavy rain expected.",
              ],
              ["⚠️ Alert", "Afternoon heat may increase — stay hydrated."],
            ].map(([title, desc], i) => (
              <div className="col-md-4" key={i}>
                <div className="advice-card">
                  <h5 className="text-success fw-bold">{title}</h5>
                  <p className="text-muted mb-0">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p className="mb-0">
          © 2026 AgriPakistan | Smart Farming Weather System 🇵🇰
        </p>
      </footer>
    </div>
  );
}
