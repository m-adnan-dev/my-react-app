export default function Contact() {
  return (
    <div>
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
          min-height:65vh;
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
          width:420px;
          height:420px;
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
          bottom:-120px;
          left:-120px;
        }

        .hero-content{
          position:relative;
          z-index:2;
        }

        .hero h1{
          font-size:65px;
          font-weight:800;
        }

        .hero p{
          max-width:700px;
          margin:20px auto;
          font-size:18px;
          opacity:0.95;
          line-height:1.8;
        }

        /* ===== CONTACT SECTION ===== */
        .section{
          padding:100px 20px;
        }

        .section-title{
          text-align:center;
          font-size:45px;
          font-weight:800;
          color:#198754;
          margin-bottom:60px;
        }

        /* ===== CARD ===== */
        .card-ui{
          background:white;
          border-radius:28px;
          padding:35px;
          box-shadow:0 12px 30px rgba(0,0,0,0.06);
          transition:0.4s;
          height:100%;
        }

        .card-ui:hover{
          transform:translateY(-10px);
          box-shadow:0 25px 50px rgba(0,0,0,0.12);
        }

        /* ===== INFO TEXT ===== */
        .info-title{
          font-size:22px;
          font-weight:800;
          color:#198754;
          margin-top:20px;
          margin-bottom:10px;
        }

        .info-text{
          color:#666;
          line-height:1.7;
        }

        /* ===== FORM ===== */
        .form-control{
          border-radius:14px;
          padding:12px;
          border:1px solid #ddd;
          transition:0.3s;
        }

        .form-control:focus{
          border-color:#198754;
          box-shadow:0 0 0 0.2rem rgba(25,135,84,0.15);
        }

        .btn-submit{
          background:#198754;
          color:white;
          border:none;
          padding:14px;
          border-radius:40px;
          font-weight:700;
          width:100%;
          transition:0.3s;
        }

        .btn-submit:hover{
          background:#146c43;
          transform:translateY(-3px);
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
          .hero h1{
            font-size:40px;
          }

          .section-title{
            font-size:32px;
          }
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-content">
          <h1>Contact Us 📞</h1>
          <p>
            We are always here to support farmers across Pakistan with smart
            agriculture solutions, guidance, and digital tools.
          </p>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>

          <div className="row g-4">
            {/* INFO */}
            <div className="col-lg-5">
              <div className="card-ui">
                <h4 className="info-title">📍 Office</h4>
                <p className="info-text">
                  AgriPakistan Head Office, Okara, Punjab, Pakistan
                </p>

                <h4 className="info-title">📞 Phone</h4>
                <p className="info-text">+92 349 3428757</p>

                <h4 className="info-title">📧 Email</h4>
                <p className="info-text">amir0000780@gmail.com</p>

                <h4 className="info-title">⏰ Working Hours</h4>
                <p className="info-text">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* FORM */}
            <div className="col-lg-7">
              <div className="card-ui">
                <h4 className="info-title mb-4">📝 Send Message</h4>

                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Write your message..."
                    ></textarea>
                  </div>

                  <button className="btn-submit">Send Message 🚀</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p>© 2026 AgriPakistan | Farmer Support System 🇵🇰</p>
      </footer>
    </div>
  );
}
