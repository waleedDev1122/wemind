import Image from 'next/image';

export default function WhyChooseUsSection() {
    return (
        <section className="why-choose-section" id="how_it_works">
            <div className="container">
                <div className="row align-items-center gap-5">
                    {/* Left Side (Image) */}
                    <div className="col-lg-5 text-center mb-4 mb-lg-0">
                        <Image
                            src="/images/doctor.png"
                            alt="Alex"
                            width={450}
                            height={450}
                            className="why-choose-image"
                        />
                    </div>

                    {/* Right Side (Reasons) */}
                    <div className="col-lg-6">
                        <h2 className="section-title">Why Psychologists <span className="highlight-text">Love Wemind</span></h2>
                        <ul className="reasons-list">
                            <li className="reason-item">
                                <div className="reason-icon">
                                    <Image
                                        src="/images/save-time.svg"
                                        alt="Automation Icon"
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                <div className="reason-content">
                                    <h3 className="reason-title">Save Time with Automation</h3>
                                    <p className="reason-description">
                                        Let AI handle your transcription, session summaries, and patient management so you can focus on care.
                                    </p>
                                </div>
                            </li>
                            <li className="reason-item">
                                <div className="reason-icon">
                                    <Image
                                        src="/images/practice.svg"
                                        alt="AI Companion Icon"
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                <div className="reason-content">
                                    <h3 className="reason-title">Grow Your Practice with Ai Companion</h3>
                                    <p className="reason-description">
                                        Tailor Wemind to align with your approach to therapy, delivering insights unique to your style of care.
                                    </p>
                                </div>
                            </li>
                            <li className="reason-item">
                                <div className="reason-icon">
                                    <Image
                                        src="/images/health.svg"
                                        alt="Secure Icon"
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                <div className="reason-content">
                                    <h3 className="reason-title">Secure and Compliant Way of Health</h3>
                                    <p className="reason-description">
                                        Rest assured knowing your practice is protected under the strictest data privacy regulations.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
