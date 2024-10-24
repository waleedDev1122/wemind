import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Content */}
          <div className="col-lg-6">
            <div className="hero-text">
              <div className="practitioners-container mb-4">
                <Image
                  src="/images/practitioners.svg"
                  width={66}
                  height={19}
                  alt="Practitioners"
                  className="practitioners-img"
                />
                <p className="practitioners-text m-0">3500+ practitioners already registered!</p>
              </div>
              <h1 className="hero-title">Scale Your Practice with AI-Powered Support</h1>
              <p className="hero-subtitle">
                Scale your practice with AI-powered tools designed for psychologists.
              </p>
              {/* Subscription Form */}
              <form className="subscribe-form d-flex">
                <input
                  type="email"
                  className="form-control form-control-lg email-input"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                />
                <button type="submit" className="btn btn-primary btn-lg">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="col-lg-6 text-center position-relative">
            <Image
              src="/images/jena.svg"
              width={600}
              height={600}
              alt="Jenna"
              className="hero-image"
            />
            <div className="jenna-tag">
              <p className="tag-text">Hi <b>Jenna</b> <span className="wave">👋</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
