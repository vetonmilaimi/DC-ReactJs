import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';

function DyerKatalog() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [
        'images/d1.jpg',
        'images/d2.jpg',
        'images/d3.jpg',
        'images/rr1.jpg',
        'images/rr2.jpg',
        'images/rr3.jpg',
    ];

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div style={{backgroundColor: "#353535", textAlign: "center"}}>
            <h1>Dyer dhe taraba</h1>
            {images.map((src, index) => (
                <img
                    src={src}
                    onClick={() => openImageViewer(index)}
                    width="300"
                    key={index}
                    style={{ margin: '2px' }}
                    alt="" />
            ))}

            {isViewerOpen && (
                <ImageViewer
                    src={images}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                />
            )}
            <hr/>
        </div>
    );
}

export default DyerKatalog;