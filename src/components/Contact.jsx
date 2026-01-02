import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">Contact <span className="text-gradient">Us</span></h2>
                    <p className="section-desc">Get in touch with us for any queries or custom requirements.</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <MapPin size={32} />
                        </div>
                        <h3>Visit Details</h3>
                        <p className="contact-label">Factory Address</p>
                        <p className="contact-value">
                            Ground, Plot No 40, Sun Industrial Park,<br />
                            Nr. Tech Flow, B/h Gopi Plastic,<br />
                            Kubadthal, Ahmedabad
                        </p>
                    </div>

                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <Phone size={32} />
                        </div>
                        <h3>Call Us</h3>
                        <p className="contact-label">Mobile Number</p>
                        <p className="contact-value">+91 97222 74853</p>
                        <p className="contact-sub">Chetan Panchal (Proprietor)</p>
                    </div>

                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <Mail size={32} />
                        </div>
                        <h3>Email Us</h3>
                        <p className="contact-label">For Inquiries</p>
                        <p className="contact-value">aoneprofile16@gmail.com</p>
                        <p className="contact-sub">Online Support</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
