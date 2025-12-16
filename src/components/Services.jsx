import React from 'react';
import { Scissors, Frame, Key, Grid, Layers } from 'lucide-react';
import './Services.css';

const services = [
    {
        id: 1,
        title: 'CNC Laser Cutting',
        desc: 'Precision SS, MS, Aluminum, and Brass cutting tailored to your CAD designs and industrial needs.',
        icon: <Scissors size={32} className="text-secondary" />,
        image: '/images/laser-cutting.png' // Still using generated for machine, as real product URLs were limited
    },
    {
        id: 2,
        title: 'Metal Wall Art',
        desc: 'Custom decorative wall pieces (18", 19" sizing available) for elegant home and office interiors.',
        icon: <Frame size={32} className="text-secondary" />,
        image: '/images/wall-art-real.jpg' // High-res real image
    },
    {
        id: 3,
        title: 'Key Holders',
        desc: 'Exclusive range including "Har Har Mahadev", "Radhe Radhe", and Car themed designs.',
        icon: <Key size={32} className="text-secondary" />,
        image: '/images/key-holder-real.png' // High-res real image
    },
    {
        id: 4,
        title: 'Perforated Sheets',
        desc: 'High-quality 4mm and 5mm Mild Steel perforated sheets for architectural cladding.',
        icon: <Grid size={32} className="text-secondary" />,
        image: null
    },
    {
        id: 5,
        title: 'Decorative Panels',
        desc: 'Intricate aesthetic panels for exterior cladding, partitions, and decoration.',
        icon: <Layers size={32} className="text-secondary" />,
        image: null
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">Verified <span className="text-blue">Products & Services</span></h2>
                    <p className="section-desc max-w-2xl mx-auto">
                        Explore our verified range of laser-cut products, manufactured with precision in Kubalathad.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card hover-glow">
                            <div className="service-header">
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                            </div>

                            <p className="service-desc">{service.desc}</p>
                            <div className="card-accent"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
