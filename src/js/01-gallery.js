// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('.gallery');
gallery.innerHTML = createElementsGallery(galleryItems);
gallery.addEventListener('click', openLightBox);

const options = {
    enableKeyboard: true,
    captionDelay: 250,
};

const lightBox = new SimpleLightbox('.gallery__item', options);

function openLightBox(event) {
    lightBox.overlay = true;
}

function createElementsGallery(arg) {
    return arg
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}">
              <img class="gallery__image" src="${preview}" alt="${description}" title ="${description}" />
              </a>`;
        })
        .join('');
}