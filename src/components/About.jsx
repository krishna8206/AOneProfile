import React from 'react';
import { Award, Users, ThumbsUp } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image glass-panel">
                        <img src="/images/hero-machine.png" alt="CNC Laser Machine" className="about-img" />
                        <div className="experience-badge">
                            <span className="years">9+</span>
                            <span className="text">Years Experience</span>
                        </div>
                    </div>

                    <div className="about-content">
                        <h2 className="section-title">
                            Why Choose <span className="text-gradient">A One Profile</span>?
                        </h2>
                        <p className="section-desc">
                            Based in Kubalathad, Gujarat, we are a leading name in CNC laser cutting and metal fabrication.
                            We deal in specialized HSN Code 98010019 projects, offering top-tier quality in
                            SS, MS, and customized metal art solutions.
                        </p>

                        <div className="features-list">
                            <div className="feature-item">
                                <div className="icon-box"><Award size={24} /></div>
                                <div>
                                    <h4>Premium Quality</h4>
                                    <p>State-of-the-art laser cutting for flawless precision.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="icon-box"><Users size={24} /></div>
                                <div>
                                    <h4>Expert Team</h4>
                                    <p>Led by Chetan Panchal, our team ensures excellence in every cut.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="icon-box"><ThumbsUp size={24} /></div>
                                <div>
                                    <h4>Client Trust</h4>
                                    <p>Trusted by industrial giants and home owners alike.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
