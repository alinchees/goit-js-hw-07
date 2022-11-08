import { galleryItems } from './gallery-items.js';
const divEL =  document.querySelector(".gallery");
const cardsMarkup = createGalleryItemsCardMarkup(galleryItems);
divEL.insertAdjacentHTML('afterbegin', cardsMarkup);

function createGalleryItemsCardMarkup(galleryItems) {
    return galleryItems
   .map(({preview, original, description}) => {
    return` 
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
  `;
   }).join('')

};

console.log(galleryItems);
new SimpleLightbox('.gallery a',{
  captionsData: "alt",
  captionDelay: 250,
});
