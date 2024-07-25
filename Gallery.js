// src/components/Gallery.js

import React, { useState } from "react";
import './Gallery.css';
import CloseIcon from '@mui/icons-material/Close';

import boi from './img/boi.jpg';
import food from './img/food.jpg';
import joey from './img/joey.jpg';
import metro from './img/metro.jpeg';
import river from './img/river.jpg';
import rain from './img/rain.jpg';

const Gallery = () => {
    const data = [
        { id: 1, imgSrc: river, alt: 'river' },
        { id: 2, imgSrc: rain, alt: 'rain' },
        { id: 3, imgSrc: joey, alt: 'joey' },
        { id: 4, imgSrc: food, alt: 'food' },
        { id: 5, imgSrc: metro, alt: 'metro' },
        { id: 6, imgSrc: boi, alt: 'boi' }
    ];

    const [model, setModel] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const getImg = (index) => {
        setCurrentIndex(index);
        setModel(true);
    }

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    }

    return (
        <>
            <div className={model ? "model open" : "model"}>
                <img src={data[currentIndex].imgSrc} alt={data[currentIndex].alt} />
                <CloseIcon onClick={() => setModel(false)} />
                <button className="prev" onClick={prevImage}>❮</button>
                <button className="next" onClick={nextImage}>❯</button>
            </div>
            <div className="gallery">
                {data.map((item, index) => (
                    <div className="pics" key={item.id} onClick={() => getImg(index)}>
                        <img src={item.imgSrc} alt={item.alt} style={{ width: '100%' }} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Gallery;
