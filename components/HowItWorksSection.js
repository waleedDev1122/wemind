export default function HowItWorksSection() {
    return (
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-title">
            How Wemind Helps You Deliver <span className="highlight-text">Better Care, Faster</span>
          </h2>
          <div className="row m-0">
            {/* Step 1 */}
            <div className="col-lg-4 col-md-6 col-12 step-card">
              <div className="step-header">
                <span className="step-dot"></span>
                <span className="step-number">01</span>
              </div>
              <h3 className="step-title">Transcribe Automatically</h3>
              <p className="step-description">
                AI transcribes sessions with full HIPAA compliance, ensuring accurate, secure documentation every time.
              </p>
            </div>
  
            {/* Step 2 */}
            <div className="col-lg-4 col-md-6 col-12 step-card">
              <div className="step-header">
                <span className="step-dot"></span>
                <span className="step-number">02</span>
              </div>
              <h3 className="step-title">Get Instant Insights</h3>
              <p className="step-description">
                Receive concise patient summaries and actionable treatment insights, helping you stay organized and focused.
              </p>
            </div>
  
            {/* Step 3 */}
            <div className="col-lg-4 col-md-6 col-12 step-card">
              <div className="step-header">
                <span className="step-dot"></span>
                <span className="step-number">03</span>
              </div>
              <h3 className="step-title">Grow Patient Base</h3>
              <p className="step-description">
                Reduce administrative work, allowing more time to expand your practice and support more patients effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  