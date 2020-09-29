// jscs:disable validateLineBreaks
// jscs:disable validateQuoteMarks
/*jshint esversion: 6 */

window.addEventListener("load", function () {
  baguetteBox.run(".gallery-container");
});

const searchBox = document.querySelector("input#search");

// set display for all .gallery-container children where data-caption att doesn't match the search term
searchBox.addEventListener("keyup", () => {
  const galleryItems = document.querySelector(".gallery-container").children;
  for (let i = 0; i < galleryItems.length; i++) {
    const dataCaption = galleryItems[i].getAttribute("data-caption");
    if (dataCaption.toLowerCase().includes(searchBox.value.toLowerCase())) {
      galleryItems[i].style.display = "block";
    } else {
      galleryItems[i].style.display = "none";
    }
  }
});
