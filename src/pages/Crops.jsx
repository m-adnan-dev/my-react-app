import { useState } from "react";
import Wheat from "../Images/Wheat.jpg";
import Vegetables from "../Images/Vegetables.webp";
import Sugercane from "../Images/Sugercane.jpg";
import Rice from "../Images/Rice.webp";
import Maize from "../Images/Maize.webp";
import Cotton from "../Images/Cotton.webp";
export default function Crops() {
  const [selectedCrop, setSelectedCrop] = useState(null);

  const crops = [
    {
      name: "Wheat",
      icon: "🌾",
      img: Wheat,
      season: "Rabi Crop",
      desc: "Pakistan’s main staple food crop grown widely in Punjab.",
      details:
        "Wheat is Pakistan’s most important food crop. It is mainly grown in Punjab and harvested in April–May. It requires cool weather and moderate rainfall. Wheat is used for flour (atta), bread, and food security.",
    },
    {
      name: "Rice",
      icon: "🍚",
      img: Rice,
      season: "Kharif Crop",
      desc: "Major export crop of Pakistan grown in irrigated lands.",
      details:
        "Rice is Pakistan’s second major crop and a key export product. It is grown mainly in Sindh and Punjab during the summer season. It requires high water supply and warm temperatures.",
    },
    {
      name: "Sugarcane",
      icon: "🎋",
      img: Sugercane,
      season: "Annual Crop",
      desc: "Cash crop used for sugar and industrial production.",
      details:
        "Sugarcane is an important cash crop used to produce sugar, ethanol, and other by-products. It grows best in hot and humid climates and has a long growing period.",
    },
    {
      name: "Cotton",
      icon: "🌿",
      img: Cotton,
      season: "Kharif Crop",
      desc: "Backbone of Pakistan textile industry.",
      details:
        "Cotton is called 'white gold' in Pakistan. It is the backbone of the textile industry and is mainly grown in Punjab and Sindh. It provides raw material for clothing and exports.",
    },
    {
      name: "Maize",
      icon: "🌽",
      img: Maize,
      season: "Kharif Crop",
      desc: "Used for food, oil, and animal feed.",
      details:
        "Maize is used for human food, poultry feed, and industrial products. It is widely grown in Punjab and KPK and is a highly versatile crop.",
    },
    {
      name: "Vegetables",
      icon: "🥕",
      img: Vegetables,
      season: "All Season",
      desc: "Daily essential crops like onion, tomato, potato.",
      details:
        "Vegetables are essential for daily diet. Pakistan grows a wide variety including onion, tomato, potato, and leafy greens throughout the year.",
    },
  ];

  return (
    <div>
      {/* ===== STYLES ===== */}
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          font-family:'Poppins',sans-serif;
          background:#f6faf7;
        }

        /* ===== HERO ===== */
        .hero{
          min-height:70vh;
          background:linear-gradient(135deg,#198754,#0b3d2e);
          display:flex;
          align-items:center;
          justify-content:center;
          text-align:center;
          color:white;
          padding:80px 20px;
          position:relative;
          overflow:hidden;
        }

        .hero::before,
        .hero::after{
          content:"";
          position:absolute;
          border-radius:50%;
          background:rgba(255,255,255,0.08);
        }

        .hero::before{
          width:400px;
          height:400px;
          top:-120px;
          right:-120px;
        }

        .hero::after{
          width:300px;
          height:300px;
          bottom:-120px;
          left:-120px;
        }

        .hero h1{
          font-size:60px;
          font-weight:800;
        }

        .hero p{
          max-width:700px;
          margin:20px auto;
          font-size:18px;
          opacity:0.9;
        }

        /* ===== SECTION ===== */
        .section{
          padding:90px 20px;
        }

        .section-title{
          text-align:center;
          font-size:42px;
          font-weight:800;
          color:#198754;
          margin-bottom:50px;
        }

        /* ===== CARD ===== */
        .card{
          background:white;
          border-radius:25px;
          overflow:hidden;
          box-shadow:0 12px 30px rgba(0,0,0,0.08);
          transition:0.3s;
          height:100%;
        }

        .card:hover{
          transform:translateY(-10px);
        }

        .card img{
          width:100%;
          height:220px;
          object-fit:cover;
        }

        .card-body{
          padding:20px;
        }

        .badge{
          background:#198754;
          color:white;
          padding:6px 12px;
          border-radius:20px;
          font-size:12px;
          display:inline-block;
          margin-bottom:10px;
        }

        .btn{
          background:#198754;
          color:white;
          border:none;
          padding:10px 18px;
          border-radius:30px;
          cursor:pointer;
          margin-top:10px;
        }

        .btn:hover{
          background:#146c43;
        }

        /* ===== MODAL ===== */
        .modal-overlay{
          position:fixed;
          top:0;
          left:0;
          width:100%;
          height:100%;
          background:rgba(0,0,0,0.6);
          display:flex;
          align-items:center;
          justify-content:center;
          z-index:999;
        }

        .modal-box{
          background:white;
          width:90%;
          max-width:520px;
          border-radius:20px;
          padding:25px;
          animation:pop 0.3s ease;
        }

        @keyframes pop{
          from{transform:scale(0.8);opacity:0;}
          to{transform:scale(1);opacity:1;}
        }

        .close{
          float:right;
          background:red;
          color:white;
          border:none;
          padding:5px 10px;
          border-radius:10px;
          cursor:pointer;
        }

        /* ===== FOOTER ===== */
        .footer{
          background:#0b3d2e;
          color:white;
          text-align:center;
          padding:25px;
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div>
          <h1>🌾 Pakistan Crops Guide</h1>
          <p>
            Learn about major crops of Pakistan with modern agricultural
            insights, seasons, and farming knowledge.
          </p>
        </div>
      </section>

      {/* ===== CROPS ===== */}
      <section className="section">
        <h2 className="section-title">Major Crops</h2>

        <div className="container">
          <div className="row g-4">
            {crops.map((crop, i) => (
              <div className="col-md-4" key={i}>
                <div className="card">
                  <img src={crop.img} alt={crop.name} />

                  <div className="card-body">
                    <span className="badge">{crop.season}</span>

                    <h4>
                      {crop.icon} {crop.name}
                    </h4>

                    <p>{crop.desc}</p>

                    <button
                      className="btn"
                      onClick={() => setSelectedCrop(crop)}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODAL ===== */}
      {selectedCrop && (
        <div className="modal-overlay" onClick={() => setSelectedCrop(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setSelectedCrop(null)}>
              X
            </button>

            <h2>
              {selectedCrop.icon} {selectedCrop.name}
            </h2>

            <img
              src={selectedCrop.img}
              style={{
                width: "100%",
                borderRadius: "15px",
                marginTop: "10px",
              }}
            />

            <p style={{ marginTop: "15px" }}>{selectedCrop.details}</p>

            <p>
              <b>Season:</b> {selectedCrop.season}
            </p>
          </div>
        </div>
      )}

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p>© 2026 AgriPakistan | Smart Farming for Pakistan 🇵🇰</p>
      </footer>
    </div>
  );
}
