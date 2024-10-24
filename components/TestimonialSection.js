import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function TestimonialSection() {
    const testimonialRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is in view
        );

        if (testimonialRef.current) {
            observer.observe(testimonialRef.current);
        }

        return () => {
            if (testimonialRef.current) {
                observer.unobserve(testimonialRef.current);
            }
        };
    }, []);

    const testimonials = [
        {
            value: 40,
            label: 'Reduction in administrative workload',
            description: "Wemind has transformed the way I manage my practice. I spend less time on admin work and more time helping my patients.",
            author: 'Dr. Sarah J.',
            position: 'Clinical Psychologist',
            image: '/images/avatar.svg',
        },
        {
            value: 95,
            label: 'Accuracy rate in AI session transcriptions',
            description: "The AI transcription feature is a game-changer. It’s like having a virtual assistant that never misses a detail.",
            author: 'Dr. Mark P.',
            position: 'Psychotherapist',
            image: '/images/avatar.svg',
        },
        {
            value: 65,
            label: 'Faster in daily admin tasks',
            description: "With Wemind, scaling my practice is no longer a burden. I’ve doubled my client base without increasing my workload.",
            author: 'Dr. Emily K.',
            position: 'Psychologist',
            image: '/images/avatar.svg',
        },
    ];

    return (
        <section className="testimonial-section" ref={testimonialRef}>
            <div className="container">
                <h2 className="testimonial-title">
                    What Psychologists Are Saying <br /> <span className="highlight-text">about Wemind?</span>
                </h2>
                <div className="row testimonials-row">
                    {testimonials.map((testimonial, index) => (
                        <div className="col-lg-4 col-md-6 col-12" key={index}>
                            <div className="testimonial-card">
                                <div className="counter">
                                    {isVisible ? <CountUp end={testimonial.value} /> : testimonial.value}%
                                </div>
                                <p className="counter-label">{testimonial.label}</p>
                                <p className="testimonial-description">{testimonial.description}</p>
                                <div className="author-info">
                                    <Image src={testimonial.image} alt={testimonial.author} width={40} height={40} className="author-image" />
                                    <div>
                                        <p className="author-name">{testimonial.author}</p>
                                        <p className="author-position">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const CountUp = ({ end }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1500;
        const increment = end / (duration / 50);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 50);

        return () => clearInterval(timer);
    }, [end]);

    return <span>{count}</span>;
};
