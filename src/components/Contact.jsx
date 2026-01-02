import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h3 className="section-title-sm">Contact Information</h3>
                        <p className="mb-8 text-muted">A ONE PROFILE - CNC Plasma & Laser Work</p>

                        <div className="info-item">
                            <MapPin className="text-primary flex-shrink-0" size={24} />
                            <div>
                                <h5>Factory Address</h5>
                                <p>Ground, Plot No 40, Sun Industrial Park,<br />Nr. Tech Flow,B/h Gopi Plactic,<br />Kubalathad, Ahmedabad</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Phone className="text-primary flex-shrink-0" size={24} />
                            <div>
                                <h5>Mobile</h5>
                                <p>+91 97222 74853</p>
                                <p className="text-sm text-blue-600 mt-1">Chetan Panchal (Proprietor)</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Mail className="text-primary flex-shrink-0" size={24} />
                            <div>
                                <h5>Email</h5>
                                <p>aoneprofile16@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <h3 className="section-title-sm mb-6">Enquire Now</h3>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <textarea rows="4" placeholder="Your Requirement"></textarea>
                        </div>
                        <button type="submit" className="btn-primary w-full">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
