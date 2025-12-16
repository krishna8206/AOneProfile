import React from 'react';
import './Gallery.css';

const galleryItems = [
    { id: 1, title: 'Decorative Gate', category: 'Laser Cutting' },
    { id: 2, title: 'Geometric Wall Art', category: 'Home Decor' },
    { id: 3, title: 'Balcony Railing', category: 'Architectural' },
    { id: 4, title: 'Corporate Signage', category: 'Branding' },
    { id: 5, title: 'Partition Screen', category: 'Interior' },
    { id: 6, title: 'Garden Fence', category: 'Exterior' },
];

const Gallery = () => {
    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">Our <span className="text-gradient">Gallery</span></h2>
                    <p className="section-desc">Explore our recent projects and craftsmanship.</p>
                </div>

                <div className="gallery-grid">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="gallery-item">
                            <div className="gallery-img-placeholder">
                                <span className="item-title">{item.title}</span>
                                <span className="item-cat">{item.category}</span>
                            </div>
                            <div className="gallery-overlay">
                                <h3>{item.title}</h3>
                                <p>View Project</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
