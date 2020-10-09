"use strict";

import images from "../gallery-items.js";

const galleryEl = document.querySelector('ul.gallery');

const imgList = images.map(slide => {
    const addLiEl = document.createElement('li');
    const addImgEl = document.createElement('img');
    
    addImgEl.src = slide.preview;
    addImgEl.alt = slide.description;
    addLiEl.classList.add("gallery__item");
    addImgEl.classList.add("gallery__image");

    addLiEl.appendChild(addImgEl);

    return addLiEl;
});

galleryEl.append(...imgList);
