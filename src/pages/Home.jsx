export default function Home() {
  const features = [
    {
      icon: "🌱",
      title: "Smart Farming Tips",
      desc: "AI-powered crop guidance specially designed for Punjab’s soil and climate conditions.",
    },
    {
      icon: "📊",
      title: "Live Market Prices",
      desc: "Track real-time mandi prices across Pakistan and sell crops at the best rates.",
    },
    {
      icon: "⛅",
      title: "Weather Alerts",
      desc: "Get accurate weather forecasts, rainfall warnings, and climate insights instantly.",
    },
    {
      icon: "🚜",
      title: "Modern Equipment",
      desc: "Explore smart farming machinery and tools to improve productivity and efficiency.",
    },
    {
      icon: "💧",
      title: "Water Management",
      desc: "Smart irrigation guidance to reduce water waste and improve crop health.",
    },
    {
      icon: "📱",
      title: "Digital Agriculture",
      desc: "Manage crops, reports, and farm activities digitally from anywhere.",
    },
  ];

  return (
    <div>
      {/* ===== GLOBAL DESIGN SYSTEM ===== */}
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family: 'Poppins', sans-serif;
        }

        body{
          background:#f8faf8;
        }

        a{
          text-decoration:none;
        }

        /* ===== NAVBAR ===== */
        .navbar-custom{
          background:white;
          padding:18px 0;
          position:sticky;
          top:0;
          z-index:1000;
          box-shadow:0 2px 15px rgba(0,0,0,0.05);
        }

        .logo{
          font-size:28px;
          font-weight:800;
          color:#198754;
        }

        .nav-links a{
          margin-left:25px;
          color:#333;
          font-weight:500;
          transition:0.3s;
        }

        .nav-links a:hover{
          color:#198754;
        }

        /* ===== HERO ===== */
        .hero{
          min-height:100vh;
          display:flex;
          align-items:center;
          position:relative;
          overflow:hidden;
          background:linear-gradient(135deg,#198754,#0b3d2e);
          color:white;
          padding:80px 20px;
        }

        .hero::before{
          content:"";
          position:absolute;
          width:450px;
          height:450px;
          background:rgba(255,255,255,0.08);
          border-radius:50%;
          top:-120px;
          right:-100px;
        }

        .hero::after{
          content:"";
          position:absolute;
          width:350px;
          height:350px;
          background:rgba(255,255,255,0.05);
          border-radius:50%;
          bottom:-120px;
          left:-100px;
        }

        .hero-content{
          position:relative;
          z-index:2;
        }

        .hero-title{
          font-size:70px;
          font-weight:800;
          line-height:1.1;
        }

        .hero-title span{
          color:#d1ffdd;
        }

        .hero-text{
          max-width:700px;
          margin:25px auto;
          font-size:20px;
          line-height:1.8;
          opacity:0.95;
        }

        .hero-btn{
          background:white;
          color:#198754;
          border:none;
          padding:14px 35px;
          border-radius:40px;
          font-size:18px;
          font-weight:700;
          transition:0.3s;
          box-shadow:0 10px 25px rgba(0,0,0,0.15);
        }

        .hero-btn:hover{
          transform:translateY(-4px);
          background:#e8ffe8;
        }

        /* ===== SECTION ===== */
        .section{
          padding:90px 20px;
        }

        .section-title{
          text-align:center;
          font-size:45px;
          font-weight:800;
          color:#198754;
          margin-bottom:20px;
        }

        .section-subtitle{
          text-align:center;
          max-width:700px;
          margin:auto;
          color:#666;
          font-size:18px;
          margin-bottom:60px;
          line-height:1.8;
        }

        /* ===== FEATURE CARD ===== */
        .feature-card{
          background:white;
          border-radius:25px;
          padding:35px 25px;
          height:100%;
          transition:0.4s;
          box-shadow:0 10px 25px rgba(0,0,0,0.06);
          border:1px solid rgba(0,0,0,0.04);
        }

        .feature-card:hover{
          transform:translateY(-12px);
          box-shadow:0 20px 40px rgba(0,0,0,0.12);
        }

        .feature-icon{
          width:75px;
          height:75px;
          border-radius:20px;
          background:#e8fff0;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:35px;
          margin:auto;
          margin-bottom:20px;
        }

        .feature-title{
          font-size:24px;
          font-weight:700;
          color:#198754;
          margin-bottom:15px;
        }

        .feature-desc{
          color:#666;
          line-height:1.7;
        }

        /* ===== ABOUT ===== */
        .about-section{
          background:white;
        }

        .about-box{
          background:linear-gradient(135deg,#198754,#145c3d);
          padding:60px;
          border-radius:35px;
          color:white;
          text-align:center;
          box-shadow:0 20px 50px rgba(0,0,0,0.12);
        }

        .about-box p{
          max-width:800px;
          margin:auto;
          margin-top:20px;
          line-height:1.9;
          font-size:18px;
          opacity:0.95;
        }

        /* ===== STATS ===== */
        .stats{
          margin-top:50px;
        }

        .stat-box h2{
          font-size:42px;
          font-weight:800;
        }

        .stat-box p{
          opacity:0.9;
        }

        /* ===== CTA ===== */
        .cta{
          background:#f1fff4;
          text-align:center;
          padding:90px 20px;
        }

        .cta h2{
          font-size:48px;
          font-weight:800;
          color:#198754;
        }

        .cta p{
          max-width:700px;
          margin:20px auto;
          color:#666;
          font-size:18px;
          line-height:1.8;
        }

        .cta button{
          background:#198754;
          color:white;
          border:none;
          padding:15px 35px;
          border-radius:40px;
          font-weight:700;
          transition:0.3s;
        }

        .cta button:hover{
          background:#146c43;
          transform:scale(1.05);
        }

        /* ===== FOOTER ===== */
        .footer{
          background:#0b3d2e;
          color:white;
          padding:50px 20px 20px;
        }

        .footer-title{
          font-size:28px;
          font-weight:800;
          margin-bottom:15px;
        }

        .footer p{
          opacity:0.9;
        }

        .footer-bottom{
          border-top:1px solid rgba(255,255,255,0.15);
          margin-top:30px;
          padding-top:20px;
          text-align:center;
          opacity:0.8;
        }

        /* ===== RESPONSIVE ===== */
        @media(max-width:768px){
          .hero-title{
            font-size:45px;
          }

          .section-title{
            font-size:34px;
          }

          .about-box{
            padding:40px 25px;
          }

          .nav-links{
            display:none;
          }
        }
      `}</style>

      <section className="hero">
        <div className="container text-center hero-content">
          <h1 className="hero-title">
            Empowering Farmers with <span>Smart Agriculture</span>
          </h1>

          <p className="hero-text">
            AgriPakistan is a modern digital farming platform helping farmers
            across Pakistan with crop guidance, weather intelligence, smart
            irrigation, and live market insights.
          </p>

          {/* <button className="hero-btn">Explore Platform</button> */}
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Smart Farming Features</h2>

          <p className="section-subtitle">
            Powerful digital agriculture tools designed to improve crop yield,
            reduce farming risks, and support modern Pakistani farmers.
          </p>

          <div className="row g-4">
            {features.map((item, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="feature-card text-center">
                  <div className="feature-icon">{item.icon}</div>

                  <h4 className="feature-title">{item.title}</h4>

                  <p className="feature-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="section about-section">
        <div className="container">
          <div className="about-box">
            <h2 className="fw-bold display-5">About AgriPakistan</h2>

            <p>
              AgriPakistan is transforming agriculture through technology by
              providing farmers with AI-powered farming assistance, weather
              forecasting, mandi price tracking, and smart crop management
              systems. Our mission is to modernize agriculture in Pakistan and
              improve farmers’ productivity and income.
            </p>

            <div className="row stats text-center">
              <div className="col-md-4 stat-box">
                <h2>5K+</h2>
                <p>Farmers Connected</p>
              </div>

              <div className="col-md-4 stat-box">
                <h2>150+</h2>
                <p>Supported Crops</p>
              </div>

              <div className="col-md-4 stat-box">
                <h2>24/7</h2>
                <p>Weather Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta">
        <div className="container">
          <h2>Join the Digital Farming Revolution 🚜</h2>

          <p>
            Start using smart agriculture tools today and improve your farming
            productivity with modern technology and real-time insights.
          </p>

          {/* <button>Get Started</button> */}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container text-center">
          <h3 className="footer-title">AgriPakistan 🌾</h3>

          <p>
            Building a smarter and more sustainable future for farmers in
            Pakistan.
          </p>

          <div className="footer-bottom">
            © 2026 AgriPakistan | Made with ❤️ for Pakistani Farmers 🇵🇰
          </div>
        </div>
      </footer>
    </div>
  );
}
