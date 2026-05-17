export default function Contact() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Contact Us 📞</h1>
          <p className="lead">
            We are here to help farmers across Punjab, Pakistan
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* CONTACT INFO */}
            <div className="col-md-5">
              <div className="card shadow-sm p-4 contact-card h-100">
                <h4 className="fw-bold text-primary mb-3">📍 Our Office</h4>
                <p>AgriPakistan Head Office, Lahore, Punjab, Pakistan</p>

                <h4 className="fw-bold text-primary mt-4 mb-3">📞 Phone</h4>
                <p>+92 300 1234567</p>

                <h4 className="fw-bold text-primary mt-4 mb-3">📧 Email</h4>
                <p>support@agripakistan.com</p>

                <h4 className="fw-bold text-primary mt-4 mb-3">
                  ⏰ Working Hours
                </h4>
                <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="col-md-7">
              <div className="card shadow-sm p-4 contact-card">
                <h4 className="fw-bold text-primary mb-4">
                  📝 Send Us a Message
                </h4>

                <form>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Message subject"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Write your message"
                    ></textarea>
                  </div>

                  <button className="btn btn-primary w-100 fw-bold contact-btn">
                    Send Message 🚀
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-white text-center py-3">
        <p className="mb-0">© 2026 AgriPakistan | Farmer Support System 🇵🇰</p>
      </footer>
    </div>
  );
}
