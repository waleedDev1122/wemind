import { useState, useEffect } from 'react';

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState('General');  // Desktop tab
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [mobileTab, setMobileTab] = useState('General');
  const [isMobile, setIsMobile] = useState(false); // Check if it's mobile

  const faqs = {
    General: [
      { question: 'What is Wemind and how does it work?', answer: 'Wemind is an AI-powered platform designed for psychologists to streamline their practice. It automates administrative tasks, provides session transcriptions, and generates patient insights, allowing you to focus more on patient care.' },
      { question: 'How does AI transcription ensure HIPAA compliance?', answer: 'AI ensures HIPAA compliance by utilizing secure, encrypted channels for data transfer, and adhering to strict privacy regulations in data storage and processing.' },
      { question: 'What features does Wemind offer for psychologists?', answer: 'Wemind offers AI transcription, patient management, automated summaries, and detailed patient insights tailored for psychologists.' },
      { question: 'How can I sign up for a free trial?', answer: 'You can sign up for a free trial by visiting our website and clicking the "Start Free Trial" button, then following the on-screen instructions.' },
      { question: 'What types of patient insights can I expect?', answer: 'Wemind provides insights on patient retention, session history, and personalized summaries based on AI analysis.' },
      { question: 'How does Wemind help grow my patient base?', answer: 'Wemind scales your practice by reducing admin tasks, allowing more time for patient engagement and enhancing patient outcomes.' },
      { question: 'What support options are available?', answer: 'Wemind offers 24/7 email support, a help center, and access to our community of psychologists for peer support.' }
    ],
    Sales: [
      { question: 'What are the pricing plans for Wemind?', answer: 'Wemind offers flexible pricing plans based on the size of your practice. Contact our sales team for a personalized quote.' },
      { question: 'Does Wemind offer discounts for larger teams?', answer: 'Yes, Wemind offers discounts for larger teams or organizations. Contact our sales department to discuss bulk pricing options.' },
      { question: 'Can I switch between pricing plans later?', answer: 'Yes, Wemind allows you to upgrade or downgrade your plan at any time. You can manage this directly from your account settings.' },
      { question: 'Are there any setup fees?', answer: 'Wemind does not charge any setup fees. You can get started with our platform immediately after signing up.' },
      { question: 'Does Wemind offer any free trials?', answer: 'Yes, Wemind offers a 14-day free trial, no credit card required.' }
    ],
    Product: [
      { question: 'What integrations does Wemind support?', answer: 'Wemind integrates with a variety of platforms including Zoom, Google Calendar, and several EHR systems to streamline your workflow.' },
      { question: 'Is Wemind available on mobile devices?', answer: 'Yes, Wemind is available on both iOS and Android devices, offering full functionality through our mobile apps.' },
      { question: 'How secure is the Wemind platform?', answer: 'Wemind uses industry-standard encryption and security protocols to ensure that your data is always protected and compliant with privacy regulations.' },
      { question: 'What new features are coming soon?', answer: 'Wemind constantly updates its platform. Upcoming features include more advanced AI-powered insights, enhanced reporting, and further integrations with health management tools.' },
      { question: 'Does Wemind offer multi-language support?', answer: 'Yes, Wemind supports multiple languages and we are always adding more to better serve our global user base.' }
    ],
    Community: [
      { question: 'How can I join the Wemind community?', answer: 'You can join the Wemind community by signing up for an account and opting into community forums and events. We also host regular webinars.' },
      { question: 'Are there any live webinars or events?', answer: 'Yes, Wemind hosts live webinars monthly on various topics such as AI in psychology, patient management tips, and product walkthroughs.' },
      { question: 'Can I contribute to the Wemind community?', answer: 'Absolutely! We encourage users to share their best practices, contribute to discussions, and provide feedback on our platform in the community forums.' },
      { question: 'Is there a way to network with other psychologists?', answer: 'Yes, Wemind offers networking events and online forums where you can connect with fellow professionals and share insights.' },
      { question: 'Does Wemind have a referral program?', answer: 'Yes, Wemind offers a referral program where you can earn rewards for recommending our platform to other psychologists.' }
    ]
  };

  useEffect(() => {
    // Detect if the window width is mobile or not
    if (typeof window !== 'undefined') {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const handleQuestionToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveQuestion(null);
  };

  const handleMobileSelect = (event) => {
    setMobileTab(event.target.value);
    setActiveQuestion(null);
  };

  return (
    <section className="faq-section">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="faq-title">
          Don’t Go Chasing for Answers. <span className="highlight-text">They’re all here!</span>
        </h2>

        <div className="faq-container">
          {/* Tabs for desktop */}
          {!isMobile && (
            <div className="tabs-wrapper d-none d-md-block">
              <ul className="faq-tabs">
                {Object.keys(faqs).map((tab) => (
                  <li
                    key={tab}
                    className={`tab-item ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Dropdown for mobile */}
          {isMobile && (
            <div className="dropdown d-md-none">
              <select value={mobileTab} onChange={handleMobileSelect} className="form-select">
                {Object.keys(faqs).map((tab) => (
                  <option key={tab} value={tab}>
                    {tab}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* FAQ Accordion */}
          <div className="faq-accordion">
            {(isMobile ? faqs[mobileTab] : faqs[activeTab]).map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => handleQuestionToggle(index)}>
                  {faq.question}
                  <span className="faq-icon">{activeQuestion === index ? '−' : '+'}</span>
                </div>
                {activeQuestion === index && <p className="faq-answer">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
