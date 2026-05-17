export default function Crops() {
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

        .card-ui {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: 0.3s;
          height: 100%;
        }

        .card-ui:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }

        .card-ui img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .card-body {
          padding: 18px;
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
          <h1 className="display-4 fw-bold">🌾 Crops Guide</h1>
          <p className="lead mt-3">
            Learn about major crops of Pakistan with modern farming insights
          </p>
        </div>
      </section>

      {/* ===== CROPS GRID ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title">Major Crops of Pakistan</h2>

          <div className="row g-4">
            {[
              {
                name: "🌾 Wheat",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdLv0sQnFUjmPeX_EDp37IgjrVtoIshV1KQ&s",
                desc: "Main staple crop of Pakistan, grown in Punjab with cool climate.",
              },
              {
                name: "🌾 Rice",
                img: "https://t3.ftcdn.net/jpg/02/71/72/06/360_F_271720694_xeOnMuwr2oiP9PG7yn8cKet1upl76QOu.jpg",
                desc: "High export crop grown in irrigated areas of Punjab & Sindh.",
              },
              {
                name: "🎋 Sugarcane",
                img: "https://www.app.com.pk/wp-content/uploads/2024/02/Sugarcane.webp",
                desc: "Cash crop used for sugar production and industry support.",
              },
              {
                name: "🌿 Cotton",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAhFtLoV7P3elxOtANj3GJA5i_7dvxHIpi2w&s",
                desc: "Backbone of Pakistan textile industry, mainly grown in Punjab.",
              },
              {
                name: "🌽 Maize",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLca53ap2Q6meYFN6Pxietz5FS7hZ9g5rAg&s",
                desc: "Used for food and animal feed, widely cultivated in Punjab.",
              },
              {
                name: "🥕 Vegetables",
                img: "https://i.tribune.com.pk/media/images/vegetables1595221536-0/vegetables1595221536-0.jpg",
                desc: "Includes tomato, onion, potato — essential daily food supply.",
              },
            ].map((crop, i) => (
              <div className="col-md-4" key={i}>
                <div className="card-ui">
                  <img src={crop.img} alt={crop.name} />

                  <div className="card-body">
                    <h5 className="text-success fw-bold">{crop.name}</h5>
                    <p className="text-muted mb-0">{crop.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p className="mb-0">
          © 2026 AgriPakistan | Smart Farming for Pakistan 🇵🇰
        </p>
      </footer>
    </div>
  );
}
