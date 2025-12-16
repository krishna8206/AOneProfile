import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
            </div>

            <div className="container hero-content">


                <h1 className="hero-title fade-in-up delay-1">
                    A ONE PROFILE <br />
                    <span className="text-secondary">CNC PLASMA & LASER WORK</span>
                </h1>

                <div className="tagline-box fade-in-up delay-2">
                    "WE CUT YOUR WORK, NOT YOUR PROFIT"
                </div>

                <p className="hero-subtitle fade-in-up delay-2">
                    Specialized in high-precision CNC Laser and Plasma cutting services.
                    We define quality in every cut, serving industrial and architectural needs in Kubalathad, Gujarat.
                </p>

                <div className="hero-actions fade-in-up delay-3">
                    <a href="#services" className="btn-primary">
                        Explore Services <ArrowRight size={20} />
                    </a>
                    <a href="#contact" className="btn-secondary">
                        Get a Quote
                    </a>
                </div>

                <div className="hero-features fade-in-up delay-4">
                    <div className="feature-pill">
                        <CheckCircle size={18} className="text-primary" />
                        <span>Precision Cutting</span>
                    </div>
                    <div className="feature-pill">
                        <CheckCircle size={18} className="text-primary" />
                        <span>Fast Turnaround</span>
                    </div>
                    <div className="feature-pill">
                        <CheckCircle size={18} className="text-primary" />
                        <span>Competitive Rates</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
