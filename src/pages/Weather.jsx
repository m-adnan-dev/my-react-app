export default function Weather() {
  const forecast = [
    {
      day: "Monday",
      icon: "☀️",
      temp: "32°C",
      status: "Sunny",
    },
    {
      day: "Tuesday",
      icon: "⛅",
      temp: "29°C",
      status: "Cloudy",
    },
    {
      day: "Wednesday",
      icon: "🌧️",
      temp: "26°C",
      status: "Rainy",
    },
  ];

  const advice = [
    {
      icon: "🚜",
      title: "Irrigation Advice",
      desc: "Reduce watering today due to warm weather conditions and low rainfall chances.",
    },
    {
      icon: "🌱",
      title: "Crop Safety",
      desc: "Wheat crops remain safe as no heavy rain or storm is expected today.",
    },
    {
      icon: "⚠️",
      title: "Heat Alert",
      desc: "Afternoon temperature may rise significantly. Stay hydrated during field work.",
    },
  ];

  return (
    <div>
      {/* ===== MODERN WEATHER DESIGN ===== */}
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          background:#f5faf7;
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

        /* ===== MAIN WEATHER CARD ===== */
        .weather-card{
          background:white;
          border-radius:35px;
          padding:50px 40px;
          text-align:center;
          box-shadow:0 15px 40px rgba(0,0,0,0.08);
          transition:0.4s;
        }

        .weather-card:hover{
          transform:translateY(-10px);
          box-shadow:0 25px 55px rgba(0,0,0,0.14);
        }

        .location{
          color:#198754;
          font-size:26px;
          font-weight:700;
        }

        .weather-icon{
          font-size:90px;
          margin:15px 0;
        }

        .temp{
          font-size:80px;
          font-weight:800;
          color:#ffc107;
          line-height:1;
        }

        .weather-status{
          font-size:20px;
          color:#666;
          margin-top:18px;
        }

        /* ===== WEATHER STATS ===== */
        .stat-box{
          background:#f7faf8;
          border-radius:22px;
          padding:22px;
          text-align:center;
          transition:0.3s;
          height:100%;
        }

        .stat-box:hover{
          transform:translateY(-6px);
          background:#ebfff1;
        }

        .stat-icon{
          font-size:34px;
          margin-bottom:10px;
        }

        .stat-title{
          color:#666;
          margin-bottom:8px;
        }

        .stat-value{
          font-size:24px;
          font-weight:700;
          color:#198754;
        }

        /* ===== FORECAST ===== */
        .forecast-card{
          background:white;
          border-radius:28px;
          padding:30px;
          text-align:center;
          box-shadow:0 10px 30px rgba(0,0,0,0.06);
          transition:0.4s;
          height:100%;
        }

        .forecast-card:hover{
          transform:translateY(-10px);
          box-shadow:0 20px 45px rgba(0,0,0,0.12);
        }

        .forecast-day{
          font-size:24px;
          font-weight:700;
          color:#198754;
        }

        .forecast-icon{
          font-size:60px;
          margin:15px 0;
        }

        .forecast-temp{
          font-size:34px;
          font-weight:800;
          color:#ffc107;
        }

        .forecast-status{
          color:#666;
          margin-top:8px;
        }

        /* ===== ADVICE ===== */
        .advice-card{
          background:white;
          border-radius:30px;
          padding:35px 28px;
          height:100%;
          transition:0.4s;
          box-shadow:0 12px 30px rgba(0,0,0,0.06);
        }

        .advice-card:hover{
          transform:translateY(-10px);
          box-shadow:0 20px 45px rgba(0,0,0,0.12);
        }

        .advice-icon{
          width:80px;
          height:80px;
          border-radius:24px;
          background:#e8fff0;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:38px;
          margin-bottom:20px;
        }

        .advice-title{
          font-size:24px;
          font-weight:700;
          color:#198754;
          margin-bottom:14px;
        }

        .advice-desc{
          color:#666;
          line-height:1.8;
        }

        /* ===== CTA ===== */
        .cta{
          background:linear-gradient(135deg,#20c997,#198754);
          padding:90px 20px;
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
          background:#effff2;
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

          .temp{
            font-size:60px;
          }

          .cta h2{
            font-size:36px;
          }

          .weather-card{
            padding:35px 25px;
          }
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="hero-title">
            Smart <span>Weather Dashboard 🌦️</span>
          </h1>

          <p className="hero-text">
            AI-powered weather insights and farming recommendations designed
            specially for farmers across Pakistan.
          </p>

          {/* <button className="hero-btn">View Forecast</button> */}
        </div>
      </section>

      {/* ===== MAIN WEATHER ===== */}
      <section className="section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="weather-card">
                <h3 className="location">📍 Punjab, Pakistan</h3>

                <div className="weather-icon">☀️</div>

                <div className="temp">32°C</div>

                <p className="weather-status">
                  Sunny weather with light breeze — ideal for farming activities
                  today.
                </p>

                <div className="row g-3 mt-4">
                  <div className="col-md-4">
                    <div className="stat-box">
                      <div className="stat-icon">💧</div>
                      <div className="stat-title">Humidity</div>
                      <div className="stat-value">45%</div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="stat-box">
                      <div className="stat-icon">🌬️</div>
                      <div className="stat-title">Wind Speed</div>
                      <div className="stat-value">12 km/h</div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="stat-box">
                      <div className="stat-icon">🌧️</div>
                      <div className="stat-title">Rain Chance</div>
                      <div className="stat-value">10%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== FORECAST ===== */}
          <div className="mt-5">
            <h2 className="section-title">3-Day Forecast</h2>

            <div className="row g-4">
              {forecast.map((item, i) => (
                <div className="col-md-4" key={i}>
                  <div className="forecast-card">
                    <div className="forecast-day">{item.day}</div>

                    <div className="forecast-icon">{item.icon}</div>

                    <div className="forecast-temp">{item.temp}</div>

                    <div className="forecast-status">{item.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FARMING ADVICE ===== */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">🌾 Smart Farming Recommendations</h2>

          <p className="section-subtitle">
            AI-generated farming advice based on current weather conditions.
          </p>

          <div className="row g-4">
            {advice.map((item, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="advice-card">
                  <div className="advice-icon">{item.icon}</div>

                  <h4 className="advice-title">{item.title}</h4>

                  <p className="advice-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta">
        <div className="container">
          <h2>Stay Updated with Smart Weather 🌦️</h2>

          <p>
            Get real-time weather alerts, crop recommendations, and farming
            insights directly through AgriPakistan.
          </p>

          {/* <button>Get Started</button> */}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p>© 2026 AgriPakistan | Smart Farming Weather System 🇵🇰</p>
      </footer>
    </div>
  );
}
