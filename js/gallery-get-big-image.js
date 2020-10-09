"use strict"

import images from "../gallery-items.js";

const refs = {
    parent: document.querySelector('.js-gallery'),
    child: document.querySelector('.gallery__item'),
};
  
refs.parent.addEventListener('click', onParentClick);
  
function onParentClick(evt) {
    const getAltAttribute = evt.target.getAttribute('alt');

    let getOriginalImage = images.find(images => images.description === getAltAttribute).original;

    let setOriginalImage = document.querySelector('.lightbox__image');

    console.log(setOriginalImage);

    setOriginalImage.src = getOriginalImage;
    setOriginalImage.alt = getAltAttribute;

    return ;
}
 