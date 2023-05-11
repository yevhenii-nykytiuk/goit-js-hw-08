import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import {
  galleryItems
} from './gallery-items';

// Change code below this line

const galleryList = document.querySelector(".gallery");


const gallerySlider = (gallery) => {
  return gallery.map(({
    preview,
    original,
    description
  }) => {
    return `<li class="gallery__item">
   <a class = "gallery__link"
   href = "${original}" >
    <img class = "gallery__image"
      src = "${preview}"
      alt = "${description}"/>
   </a>
  </li>`
  }).join("");
}

const galleryLightBoxSlider = gallerySlider(galleryItems);

galleryList.insertAdjacentHTML("afterbegin", galleryLightBoxSlider);

const lightbox = new SimpleLightbox('.gallery a', {

  captionsData: "alt",
  captionDelay: 250,

});
