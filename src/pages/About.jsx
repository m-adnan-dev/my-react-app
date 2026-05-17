export default function About() {
  return (
    <div>
      {/* ===== INLINE CSS ===== */}
      <style>{`
        .about-hero {
          background: linear-gradient(135deg, #198754, #0f5132);
          padding: 100px 20px;
          position: relative;
          overflow: hidden;
        }

        .about-hero::after {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          top: -80px;
          right: -80px;
        }

        .stat-card {
          background: #fff;
          border-radius: 16px;
          padding: 25px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: 0.3s;
        }

        .stat-card:hover {
          transform: translateY(-6px);
        }

        .glass-card {
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(10px);
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: 0.3s;
        }

        .glass-card:hover {
          transform: translateY(-6px);
        }

        .feature-card {
          background: #fff;
          border-radius: 18px;
          padding: 25px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.06);
          transition: 0.3s;
          height: 100%;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.12);
        }

        .cta {
          background: linear-gradient(135deg, #20c997, #198754);
          padding: 80px 20px;
        }

        .footer {
          background: #0f5132;
          color: white;
          padding: 15px;
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="about-hero text-white text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">About AgriPakistan 🌾</h1>

          <p className="lead mt-3">
            Empowering farmers with smart agriculture, AI tools & real-time
            insights.
          </p>

          <button className="btn btn-light rounded-pill px-4 mt-3 fw-semibold">
            Explore Platform
          </button>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <div className="row g-4">
            {[
              ["10K+", "Farmers Connected"],
              ["500+", "Crops Tracked"],
              ["24/7", "Weather Updates"],
              ["100+", "Markets Covered"],
            ].map(([num, label], i) => (
              <div className="col-md-3" key={i}>
                <div className="stat-card">
                  <h2 className="text-success">{num}</h2>
                  <p className="mb-0 text-muted">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION + VISION ===== */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="glass-card">
                <h3 className="text-success">🌱 Our Mission</h3>
                <p className="text-muted mt-2">
                  To empower farmers with digital tools, AI insights, and modern
                  agriculture technology to increase productivity.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="glass-card">
                <h3 className="text-success">🚀 Our Vision</h3>
                <p className="text-muted mt-2">
                  A future where every farmer in Pakistan uses smart technology
                  to grow better crops and earn more income.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5 text-success">
            Why Choose AgriPakistan?
          </h2>

          <div className="row g-4">
            {[
              ["🌾 Smart Farming AI", "AI-based crop recommendations."],
              ["📊 Live Market Prices", "Real-time mandi rates."],
              ["⛅ Weather Alerts", "Accurate weather forecasting."],
              ["📱 Mobile Friendly", "Works on all devices."],
              ["🚜 Crop Protection", "Early disease detection."],
              ["💡 Expert Advice", "Professional farming guidance."],
            ].map(([title, desc], i) => (
              <div className="col-md-4" key={i}>
                <div className="feature-card">
                  <h5 className="text-success">{title}</h5>
                  <p className="text-muted mb-0">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta text-white text-center">
        <div className="container">
          <h2 className="fw-bold">Start Smart Farming Today 🚀</h2>
          <p className="mt-2">
            Join thousands of farmers already using AgriPakistan.
          </p>

          <button className="btn btn-light rounded-pill px-4 mt-3 fw-semibold">
            Get Started
          </button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer text-center">
        <p className="mb-0">
          © 2026 AgriPakistan | Built for Farmers of Pakistan 🇵🇰
        </p>
      </footer>
    </div>
  );
}
