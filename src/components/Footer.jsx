import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', textAlign: 'center', background: '#050505', color: '#666', fontSize: '0.9rem', borderTop: '1px solid #222' }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} A One Profile. All rights reserved.</p>
                <p style={{ marginTop: '0.5rem' }}>Designed by Krishna Panchal</p>
            </div>
        </footer>
    );
};

export default Footer;
