import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
  gallery: document.querySelector(".gallery"),
};

const imgEl = createImgMarkup(galleryItems);

refs.gallery.insertAdjacentHTML("afterbegin", imgEl);

function createImgMarkup(items) {
  return items
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img loading="lazy" width="354" height="240"
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

const onClick = (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
	<img src="${e.target.dataset.source}">
`);
  instance.show();
};

refs.gallery.addEventListener("click", onClick);

console.log(galleryItems);
