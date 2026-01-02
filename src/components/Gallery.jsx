import React from 'react';
import './Gallery.css';

import laserMachine from '../assets/gallery/laser-machine.jpg';
import metalCutouts from '../assets/gallery/metal-cutouts.jpg';
import metalPlates from '../assets/gallery/metal-plates.jpg';
import metalTray from '../assets/gallery/metal-tray.jpg';
import metalRings from '../assets/gallery/metal-rings.jpg';
import metalTraySide from '../assets/gallery/metal-tray-side.jpg';
import steelSheets from '../assets/gallery/steel-sheets.jpg';
import metalTrayTop from '../assets/gallery/metal-tray-top.jpg';
import workshopMachine from '../assets/gallery/workshop-machine.jpg';
import cncPlates from '../assets/gallery/cnc-plates.jpg';
import metalGrill from '../assets/gallery/metal-grill.jpg';
import loadingCrane from '../assets/gallery/loading-crane.jpg';

const galleryItems = [
    { id: 1, title: 'Laser Machine', category: 'Machinery', image: laserMachine },
    { id: 2, title: 'Precision Cutouts', category: 'Laser Cutting', image: metalCutouts },
    { id: 3, title: 'Metal Plates', category: 'Materials', image: metalPlates },
    { id: 4, title: 'Metal Tray', category: 'Fabrication', image: metalTray },
    { id: 5, title: 'Metal Rings', category: 'Components', image: metalRings },
    { id: 6, title: 'Perforated Tray', category: 'Sheet Metal', image: metalTraySide },
    { id: 7, title: 'Steel Sheets', category: 'Raw Materials', image: steelSheets },
    { id: 8, title: 'Perforated Tray Top', category: 'Fabrication', image: metalTrayTop },
    { id: 9, title: 'Workshop Machine', category: 'Machinery', image: workshopMachine },
    { id: 10, title: 'CNC Plates', category: 'CNC Cutting', image: cncPlates },
    { id: 11, title: 'Metal Grill', category: 'Fabrication', image: metalGrill },
    { id: 12, title: 'Loading Material', category: 'Logistics', image: loadingCrane },
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
                            <div className="gallery-img-container">
                                <img src={item.image} alt={item.title} className="gallery-img" />
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
