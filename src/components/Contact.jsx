import React, { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage({ type: '', text: '' });

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        // 1. Create a Service (e.g., Gmail) -> Get Service ID
        // 2. Create an Email Template -> Get Template ID
        //    Template variables: {{user_name}}, {{user_email}}, {{message}}
        // 3. Account -> API Keys -> Get Public Key

        const SERVICE_ID = 'YOUR_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatusMessage({ type: 'success', text: 'Message sent successfully!' });
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setStatusMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

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

                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                        <h3 className="section-title-sm mb-6">Enquire Now</h3>

                        {statusMessage.text && (
                            <div className={`status-message ${statusMessage.type} mb-4 p-3 rounded text-sm ${statusMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                }`}>
                                {statusMessage.text}
                            </div>
                        )}

                        <div className="form-group">
                            <input type="text" name="user_name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="user_email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea name="message" rows="4" placeholder="Your Requirement" required></textarea>
                        </div>
                        <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
