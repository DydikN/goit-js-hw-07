import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const imgEl = createImgMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", imgEl);

function createImgMarkup(items) {
  return items
    .map(({ preview, description, original }) => {
      return `
      <li class="gallery__item">
      <a class="gallery__link"
      href="${original}">
      <img class="gallery__image"
      src="${preview}"
      alt="${description}" />
      </a>
      </li>`;
    })
    .join("");
}

const lighbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
  scrollZoom: false,
});

console.log(galleryItems);
