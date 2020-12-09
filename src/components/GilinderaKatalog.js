import React from 'react';
import DztImageGalleryComponent from 'reactjs-image-gallery'

function GilinderaKatalog () {
    var data = [
        {
            url: 'images/sh1.jpg',
            title: 'SH1',
            thumbUrl: 'images/thumb-sh1.jpg'
        },
        {
            url: 'images/sh2.jpg',
            title: 'SH2',
            thumbUrl: 'images/thumb-sh2.jpg'
        },
        {
            url: 'images/sh3.jpg',
            title: 'SH3',
            thumbUrl: 'images/thumb-sh3.jpg'
        },
        {
            url: 'images/sh3.jpg',
            title: 'SH3',
            thumbUrl: 'images/thumb-sh3.jpg'
        },
        {
            url: 'images/sh3.jpg',
            title: 'SH3',
            thumbUrl: 'images/thumb-sh3.jpg'
        },
        {
            url: 'images/sh3.jpg',
            title: 'SH3',
            thumbUrl: 'images/thumb-sh3.jpg'
        },
        {
            url: 'images/sh3.jpg',
            title: 'SH3',
            thumbUrl: 'images/thumb-sh3.jpg'
        },
    ]

    return (
        <div style={{backgroundColor: "#242424"}}>
            <h1>Gilindera për shkallë</h1>
            <DztImageGalleryComponent
                images={data} />
        </div>
    );
}

export default GilinderaKatalog;