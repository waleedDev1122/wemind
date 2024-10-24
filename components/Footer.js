import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row justify-content-between footer-primary">
          {/* Left Section */}
          <div className="col-lg-4 col-md-12 mb-4">
            <h3 className="footer-logo">wemind</h3>
            <p className="footer-description">
              Scale your practice with AI-powered tools designed for psychologists.
            </p>
          </div>

          {/* Middle Links Section */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h4 className="footer-heading">Product</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#" className="new-badge">Pricing <span className="badge">New</span></a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* Right Links Section */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#" className="new-badge">Privacy Policy <span className="badge">New</span></a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-lg-4 col-md-12 mb-4">
            <h4 className="footer-heading">Subscribe to our newsletter</h4>
            <form className="footer-subscribe">
              <input
                type="email"
                className="form-control email-input"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />
              <button type="submit" className="btn btn-primary btn-lg">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row justify-content-between align-items-center footer-secondary">
          <div className="col-md-6 d-flex justify-content-center justify-content-lg-start">
            <p className="footer-copyright">
              © 2024 Wemind. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-lg-end">
            <ul className="footer-social">
              <li><a href="#"><Image src="/images/twitter.svg" alt="Twitter" width={24} height={24} /></a></li>
              <li><a href="#"><Image src="/images/linkedin.svg" alt="LinkedIn" width={24} height={24} /></a></li>
              <li><a href="#"><Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} /></a></li>
              <li><a href="#"><Image src="/images/github.svg" alt="GitHub" width={24} height={24} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
