var galleryThumbs = new Swiper(".gallery-thumbs", {
  direction: "vertical",
  spaceBetween: 10,
  slidesPerView: 3,
  loop: false,
  freeMode: true,
  loopedSlides: 3, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper(".gallery-top", {
  direction: "vertical",

  spaceBetween: 10,
  loop: true,
  loopedSlides: 3, //looped slides should be the same
  thumbs: {
    swiper: galleryThumbs,
  },
});
