export default function About() {
  const stats = [
    ["5K+", "Farmers Connected"],
    ["150+", "Crops Tracked"],
    ["24/7", "Weather Updates"],
    ["100+", "Markets Covered"],
  ];

  const features = [
    ["🌾", "Smart Farming AI", "AI-powered crop recommendations."],
    ["📊", "Live Market Prices", "Real-time mandi rates across Pakistan."],
    ["⛅", "Weather Alerts", "Accurate weather forecasting system."],
    ["📱", "Mobile Friendly", "Works perfectly on all devices."],
    ["🚜", "Crop Protection", "Early disease and pest detection."],
    ["💡", "Expert Advice", "Professional farming guidance anytime."],
  ];

  return (
    <div>
      {/* ===== MODERN CSS ===== */}
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          background:#f7faf8;
          font-family:'Poppins',sans-serif;
        }

        /* ===== HERO ===== */
        .about-hero{
          min-height:85vh;
          background:linear-gradient(135deg,#198754,#0b3d2e);
          display:flex;
          align-items:center;
          justify-content:center;
          text-align:center;
          color:white;
          position:relative;
          overflow:hidden;
          padding:80px 20px;
        }

        .about-hero::before{
          content:"";
          position:absolute;
          width:450px;
          height:450px;
          background:rgba(255,255,255,0.08);
          border-radius:50%;
          top:-120px;
          right:-120px;
        }

        .about-hero::after{
          content:"";
          position:absolute;
          width:350px;
          height:350px;
          background:rgba(255,255,255,0.05);
          border-radius:50%;
          bottom:-100px;
          left:-100px;
        }

        .hero-content{
          position:relative;
          z-index:2;
        }

        .hero-title{
          font-size:65px;
          font-weight:800;
          line-height:1.2;
        }

        .hero-title span{
          color:#d7ffe3;
        }

        .hero-text{
          max-width:760px;
          margin:25px auto;
          font-size:20px;
          line-height:1.8;
          opacity:0.95;
        }

        .hero-btn{
          background:white;
          color:#198754;
          border:none;
          padding:14px 34px;
          border-radius:40px;
          font-weight:700;
          font-size:18px;
          transition:0.3s;
          box-shadow:0 12px 30px rgba(0,0,0,0.18);
        }

        .hero-btn:hover{
          transform:translateY(-4px);
          background:#eaffea;
        }

        /* ===== SECTION ===== */
        .section{
          padding:90px 20px;
        }

        .section-title{
          text-align:center;
          font-size:46px;
          font-weight:800;
          color:#198754;
          margin-bottom:18px;
        }

        .section-subtitle{
          text-align:center;
          max-width:700px;
          margin:auto;
          color:#666;
          font-size:18px;
          line-height:1.8;
          margin-bottom:60px;
        }

        /* ===== STATS ===== */
        .stat-card{
          background:white;
          border-radius:24px;
          padding:35px 20px;
          text-align:center;
          box-shadow:0 10px 30px rgba(0,0,0,0.06);
          transition:0.4s;
          border:1px solid rgba(0,0,0,0.04);
        }

        .stat-card:hover{
          transform:translateY(-10px);
          box-shadow:0 20px 40px rgba(0,0,0,0.12);
        }

        .stat-number{
          font-size:50px;
          font-weight:800;
          color:#198754;
        }

        .stat-text{
          color:#666;
          margin-top:10px;
          font-size:17px;
        }

        /* ===== GLASS CARDS ===== */
        .glass-card{
          background:rgba(255,255,255,0.72);
          backdrop-filter:blur(12px);
          border-radius:30px;
          padding:45px;
          height:100%;
          box-shadow:0 15px 40px rgba(0,0,0,0.08);
          transition:0.4s;
          border:1px solid rgba(255,255,255,0.3);
        }

        .glass-card:hover{
          transform:translateY(-10px);
        }

        .glass-icon{
          width:75px;
          height:75px;
          border-radius:22px;
          background:#e8fff0;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:34px;
          margin-bottom:20px;
        }

        .glass-card h3{
          font-size:30px;
          font-weight:700;
          color:#198754;
        }

        .glass-card p{
          margin-top:15px;
          color:#666;
          line-height:1.9;
          font-size:17px;
        }

        /* ===== FEATURES ===== */
        .feature-card{
          background:white;
          border-radius:28px;
          padding:35px 25px;
          text-align:center;
          height:100%;
          transition:0.4s;
          box-shadow:0 10px 25px rgba(0,0,0,0.06);
        }

        .feature-card:hover{
          transform:translateY(-12px);
          box-shadow:0 20px 40px rgba(0,0,0,0.12);
        }

        .feature-icon{
          width:85px;
          height:85px;
          margin:auto;
          border-radius:24px;
          background:#e9fff1;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:40px;
          margin-bottom:22px;
        }

        .feature-title{
          font-size:24px;
          font-weight:700;
          color:#198754;
          margin-bottom:12px;
        }

        .feature-desc{
          color:#666;
          line-height:1.8;
        }

        /* ===== CTA ===== */
        .cta{
          background:linear-gradient(135deg,#20c997,#198754);
          padding:100px 20px;
          text-align:center;
          color:white;
          position:relative;
          overflow:hidden;
        }

        .cta::before{
          content:"";
          position:absolute;
          width:300px;
          height:300px;
          background:rgba(255,255,255,0.08);
          border-radius:50%;
          top:-80px;
          right:-80px;
        }

        .cta h2{
          font-size:50px;
          font-weight:800;
          position:relative;
          z-index:2;
        }

        .cta p{
          max-width:700px;
          margin:20px auto;
          line-height:1.8;
          font-size:18px;
          opacity:0.95;
          position:relative;
          z-index:2;
        }

        .cta button{
          background:white;
          color:#198754;
          border:none;
          padding:15px 36px;
          border-radius:40px;
          font-size:18px;
          font-weight:700;
          transition:0.3s;
          position:relative;
          z-index:2;
        }

        .cta button:hover{
          transform:scale(1.05);
          background:#effff3;
        }

        /* ===== FOOTER ===== */
        .footer{
          background:#0b3d2e;
          color:white;
          text-align:center;
          padding:30px 20px;
        }

        .footer p{
          margin:0;
          opacity:0.9;
        }

        /* ===== RESPONSIVE ===== */
        @media(max-width:768px){

          .hero-title{
            font-size:42px;
          }

          .hero-text{
            font-size:17px;
          }

          .section-title{
            font-size:34px;
          }

          .glass-card{
            padding:30px;
          }

          .cta h2{
            font-size:36px;
          }
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="about-hero">
        <div className="container hero-content">
          <h1 className="hero-title">
            About <span>AgriPakistan 🌾</span>
          </h1>

          <p className="hero-text">
            Empowering farmers with smart agriculture technology, AI-driven
            insights, weather intelligence, and modern digital farming solutions
            across Pakistan.
          </p>

          {/* <button className="hero-btn">Explore Platform</button> */}
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="section bg-light">
        <div className="container">
          <div className="row g-4">
            {stats.map(([num, label], i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="stat-card">
                  <div className="stat-number">{num}</div>
                  <div className="stat-text">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION + VISION ===== */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Mission & Vision</h2>

          <p className="section-subtitle">
            Building the future of smart farming in Pakistan through innovation,
            technology, and sustainable agriculture solutions.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="glass-card">
                <div className="glass-icon">🌱</div>

                <h3>Our Mission</h3>

                <p>
                  To empower farmers with AI tools, smart crop monitoring,
                  digital farming solutions, and modern agriculture technology
                  that increases productivity and improves livelihoods.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="glass-card">
                <div className="glass-icon">🚀</div>

                <h3>Our Vision</h3>

                <p>
                  A future where every farmer in Pakistan uses smart technology
                  to make better decisions, grow healthier crops, and maximize
                  income sustainably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Why Choose AgriPakistan?</h2>

          <p className="section-subtitle">
            Everything farmers need in one smart agriculture platform.
          </p>

          <div className="row g-4">
            {features.map(([icon, title, desc], i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="feature-card">
                  <div className="feature-icon">{icon}</div>

                  <h4 className="feature-title">{title}</h4>

                  <p className="feature-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta">
        <div className="container">
          <h2>Start Smart Farming Today 🚜</h2>

          <p>
            Join thousands of Pakistani farmers already using AgriPakistan to
            improve crop production and farming efficiency.
          </p>

          {/* <button>Get Started</button> */}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p>© 2026 AgriPakistan | Built with ❤️ for Farmers of Pakistan 🇵🇰</p>
      </footer>
    </div>
  );
}
