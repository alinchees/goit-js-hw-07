import { galleryItems } from './gallery-items.js';
const divEl =  document.querySelector(".gallery");
function addImg(img) {
  img.map(el => divEl.insertAdjacentHTML('afterbegin',`
  <div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`))
return img;
}
function bigImgClick(elem) {
  elem.preventDefault();
  if (!elem.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox.create(`
  <img src=${elem.target.dataset.source} width="auto" height="auto">
`)
instance.show()
console.log(elem.target.dataset.source);
}
divEl.addEventListener("click", bigImgClick)
console.log(addImg(galleryItems))