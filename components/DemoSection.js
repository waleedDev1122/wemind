import Image from 'next/image';

export default function DemoSection() {
    return (
        <section className="demo-margin">
            <div className="container px-0">
                <div className="demo-section">
                    {/* Left Side (Text + Button) */}
                    
                    <div className="demo-header">
                        <h2 className="demo-title">
                            Experience Wemind <br /> with a <span className="highlight-text">Free Demo</span>
                        </h2>
                        <button className="secondary-btn">Schedule a Free Demo →</button>
                    </div>
                    

                    {/* Right Side (Dashboard Image) */}
                    <div className="row">
                        <Image
                            src="/images/dashboard.svg"
                            alt="Wemind Dashboard"
                            width={700}
                            height={400}
                            className="dashboard-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
