import { galleryItems } from './gallery-items.js';
const divEL =  document.querySelector(".gallery");
function addImg(img) {
  img.map(el => divEL.insertAdjacentHTML('afterbegin',`
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      alt=${el.description}
    />
  </a>`)).join('')
return img;
}

console.log(addImg(galleryItems));
new SimpleLightbox('.gallery a',{
  captionsData: "alt",
  captionDelay: 250,
});
