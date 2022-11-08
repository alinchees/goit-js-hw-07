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
      data-source="${original}"
      alt="${description}"
    />
  </a>
  
  `;
   }).join('')

};
function bigImgClick(elem) {
  elem.preventDefault();
  if (!elem.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox.create(`
  <img src=${elem.target.dataset.source} width="auto" height="auto">
`)
instance.show()
}
divEL.addEventListener("click", bigImgClick)
console.log(galleryItems);