import React from 'react';
import DztImageGalleryComponent from 'reactjs-image-gallery'

function DyerKatalog () {
    var data = [
        {
            url: 'images/d1.jpg',
            title: 'D1',
            thumbUrl: 'images/thumb-d1.jpg'
        },
        {
            url: 'images/d2.jpg',
            title: 'D2',
            thumbUrl: 'images/thumb-d2.jpg'
        },
        {
            url: 'images/d3.jpg',
            title: 'D3',
            thumbUrl: 'images/thumb-d3.jpg'
        },
        {
            url: 'images/rr1.jpg',
            title: 'RR1',
            thumbUrl: 'images/thumb-rr1.jpg'
        },
        {
            url: 'images/rr2.jpg',
            title: 'RR2',
            thumbUrl: 'images/thumb-rr2.jpg'
        },
        {
            url: 'images/rr3.jpg',
            title: 'RR3',
            thumbUrl: 'images/thumb-rr3.jpg'
        },
        {
            url: 'images/rr3.jpg',
            title: 'RR3',
            thumbUrl: 'images/thumb-rr3.jpg'
        },
        {
            url: 'images/rr3.jpg',
            title: 'RR3',
            thumbUrl: 'images/thumb-rr3.jpg'
        },
        {
            url: 'images/rr3.jpg',
            title: 'RR3',
            thumbUrl: 'images/thumb-rr3.jpg'
        },
        {
            url: 'images/rr3.jpg',
            title: 'RR3',
            thumbUrl: 'images/thumb-rr3.jpg'
        },
        {
            url: 'images/rr3.jpg',
            title: 'RR3',
            thumbUrl: 'images/thumb-rr3.jpg'
        },
        {
            url: 'images/rr3.jpg',
            title: 'RR3',
            thumbUrl: 'images/thumb-rr3.jpg'
        },
        {
            url: 'images/rr3.jpg',
            title: 'RR3',
            thumbUrl: 'images/thumb-rr3.jpg'
        },
        {
            url: 'images/rr3.jpg',
            title: 'RR3',
            thumbUrl: 'images/thumb-rr3.jpg'
        },
        {
            url: 'images/rr3.jpg',
            title: 'RR3',
            thumbUrl: 'images/thumb-rr3.jpg'
        },
        {
            url: 'images/rr3.jpg',
            title: 'RR3',
            thumbUrl: 'images/thumb-rr3.jpg'
        },
    ]

    return (
        <div style={{backgroundColor: "#242424"}}>
            <h1>Dyer dhe Rrethoja</h1>
            <DztImageGalleryComponent
                images={data} />
        </div>
    );
}

export default DyerKatalog;