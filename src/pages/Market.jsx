export default function Market() {
  const marketData = [
    {
      icon: "🌾",
      name: "Wheat",
      price: "Rs. 3,200 / 40kg",
      desc: "Stable demand in local markets with consistent supply.",
      trend: "Stable",
      color: "#198754",
    },
    {
      icon: "🍚",
      name: "Rice",
      price: "Rs. 7,500 / 40kg",
      desc: "High export demand increasing market value.",
      trend: "Rising",
      color: "#0d6efd",
    },
    {
      icon: "🌿",
      name: "Cotton",
      price: "Rs. 8,900 / 40kg",
      desc: "Strong textile industry demand supporting prices.",
      trend: "High",
      color: "#20c997",
    },
    {
      icon: "🎋",
      name: "Sugarcane",
      price: "Rs. 450 / 40kg",
      desc: "Seasonal fluctuations affecting current rates.",
      trend: "Fluctuating",
      color: "#ffc107",
    },
    {
      icon: "🌽",
      name: "Maize",
      price: "Rs. 2,600 / 40kg",
      desc: "Used in food & feed industry with steady demand.",
      trend: "Stable",
      color: "#fd7e14",
    },
    {
      icon: "🥕",
      name: "Vegetables",
      price: "Varies Daily",
      desc: "Prices change based on supply and demand conditions.",
      trend: "Volatile",
      color: "#dc3545",
    },
  ];

  return (
    <div>
      {/* ===== MODERN DESIGN SYSTEM ===== */}
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          background:#f6faf7;
          font-family:'Poppins',sans-serif;
        }

        /* ===== HERO ===== */
        .hero{
          min-height:75vh;
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

        .hero::before{
          content:"";
          position:absolute;
          width:450px;
          height:450px;
          background:rgba(255,255,255,0.08);
          border-radius:50%;
          top:-120px;
          right:-120px;
        }

        .hero::after{
          content:"";
          position:absolute;
          width:320px;
          height:320px;
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
          font-size:68px;
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
          padding:14px 36px;
          border-radius:40px;
          font-size:18px;
          font-weight:700;
          transition:0.3s;
          box-shadow:0 12px 30px rgba(0,0,0,0.18);
        }

        .hero-btn:hover{
          transform:translateY(-4px);
          background:#effff2;
        }

        /* ===== SECTION ===== */
        .section{
          padding:100px 20px;
        }

        .section-title{
          text-align:center;
          font-size:48px;
          font-weight:800;
          color:#198754;
          margin-bottom:18px;
        }

        .section-subtitle{
          text-align:center;
          max-width:760px;
          margin:auto;
          color:#666;
          font-size:18px;
          line-height:1.8;
          margin-bottom:65px;
        }

        /* ===== MARKET CARD ===== */
        .market-card{
          background:white;
          border-radius:30px;
          padding:35px 25px;
          text-align:center;
          height:100%;
          transition:0.4s;
          box-shadow:0 12px 30px rgba(0,0,0,0.06);
          position:relative;
          overflow:hidden;
        }

        .market-card:hover{
          transform:translateY(-12px);
          box-shadow:0 25px 50px rgba(0,0,0,0.12);
        }

        .badge-live{
          position:absolute;
          top:15px;
          right:15px;
          background:#dc3545;
          color:white;
          font-size:12px;
          padding:6px 12px;
          border-radius:20px;
          animation:pulse 1.6s infinite;
          font-weight:600;
        }

        @keyframes pulse{
          0%{opacity:1;}
          50%{opacity:0.5;}
          100%{opacity:1;}
        }

        .market-icon{
          font-size:55px;
          margin-bottom:10px;
        }

        .market-name{
          font-size:26px;
          font-weight:800;
          color:#198754;
          margin-bottom:10px;
        }

        .market-price{
          font-size:28px;
          font-weight:800;
          margin:12px 0;
          color:#198754;
        }

        .market-desc{
          color:#666;
          line-height:1.7;
          margin-bottom:18px;
        }

        .trend{
          display:inline-block;
          padding:6px 14px;
          border-radius:30px;
          font-size:13px;
          font-weight:600;
          color:white;
        }

        /* ===== INFO STRIP ===== */
        .info-strip{
          background:white;
          text-align:center;
          padding:25px 15px;
          color:#666;
        }

        /* ===== FOOTER ===== */
        .footer{
          background:#0b3d2e;
          color:white;
          text-align:center;
          padding:32px 20px;
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

          .market-price{
            font-size:22px;
          }
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="hero-title">
            Live <span>Market Prices 📊</span>
          </h1>

          <p className="hero-text">
            Real-time mandi rates across Pakistan helping farmers make smarter
            selling decisions.
          </p>

          {/* <button className="hero-btn">View Live Data</button> */}
        </div>
      </section>

      {/* ===== MARKET SECTION ===== */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Today’s Crop Prices</h2>

          <p className="section-subtitle">
            Updated agricultural market insights for better farming decisions.
          </p>

          <div className="row g-4">
            {marketData.map((item, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="market-card">
                  <div className="badge-live">LIVE</div>

                  <div className="market-icon">{item.icon}</div>

                  <div className="market-name">{item.name}</div>

                  <div className="market-price">{item.price}</div>

                  <p className="market-desc">{item.desc}</p>

                  <span className="trend" style={{ background: item.color }}>
                    {item.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INFO STRIP ===== */}
      <section className="info-strip">
        <div className="container">
          🔄 Prices update every 15 minutes • 📍 Punjab Mandi Network • 📊
          AI-powered insights for farmers
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p>© 2026 AgriPakistan | Smart Market Intelligence System 🇵🇰</p>
      </footer>
    </div>
  );
}
