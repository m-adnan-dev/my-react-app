export default function Home() {
  return (
    <div>
      {/* ===== INLINE DESIGN SYSTEM 1 ===== */}
      <style>{`
        /* ===== HERO (GLOBAL STYLE) ===== */
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

        /* ===== BUTTON ===== */
        .btn-main {
          background: white;
          color: #198754;
          border-radius: 30px;
          padding: 10px 22px;
          font-weight: 600;
          border: none;
          transition: 0.3s;
        }

        .btn-main:hover {
          transform: scale(1.05);
          background: #eaffea;
        }

        /* ===== CARD SYSTEM ===== */
        .card-ui {
          background: #fff;
          border-radius: 18px;
          padding: 25px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: 0.3s;
          height: 100%;
        }

        .card-ui:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }

        /* ===== SECTION TITLE ===== */
        .section-title {
          font-weight: 800;
          color: #198754;
          text-align: center;
          margin-bottom: 40px;
        }

        /* ===== FOOTER ===== */
        .footer {
          background: #0f5132;
          color: white;
          text-align: center;
          padding: 15px;
        }

        /* ===== TEXT LIMIT ===== */
        .container-text {
          max-width: 800px;
          margin: auto;
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container">
          <h1 className="display-3 fw-bold">AgriPakistan 🌾</h1>

          <p className="lead container-text mt-3">
            A modern digital agriculture platform empowering farmers across
            Punjab, Pakistan with smart farming solutions, crop guidance,
            weather alerts, and real-time market insights.
          </p>

          <button className="btn-main mt-4">Explore Platform</button>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title">Smart Farming Features</h2>

          <div className="row g-4">
            {[
              [
                "🌱 Smart Farming Tips",
                "AI-based crop guidance for Punjab soil & climate.",
              ],
              ["📊 Market Prices", "Live mandi rates across Pakistan."],
              ["⛅ Weather Alerts", "Real-time weather forecasting system."],
            ].map(([title, desc], i) => (
              <div className="col-md-4" key={i}>
                <div className="card-ui text-center">
                  <h4 className="text-success fw-bold">{title}</h4>
                  <p className="mt-2 text-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="section-title">About AgriPakistan</h2>

          <p className="container-text text-muted">
            AgriPakistan is built to modernize agriculture in Pakistan by
            providing farmers with digital tools, market insights, and smart
            decision-making systems. Our mission is to increase yield, reduce
            losses, and improve farmer income using technology.
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p className="mb-0">
          © 2026 AgriPakistan | Built for Farmers of Pakistan 🇵🇰
        </p>
      </footer>
    </div>
  );
}
