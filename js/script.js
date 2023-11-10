const introSwiperThumbs = new Swiper(".intro__swiper-thumbs", {
  enabled: false,
  breakpoints: {
    1240: {
      enabled: true,
    },
  },
});
const introSwiper = new Swiper(".intro__swiper", {
  direction: "horizontal",
  slidesPerView: "auto",
  navigation: {
    nextEl: ".intro__swiper-button-next",
    prevEl: ".intro__swiper-button-prev",
  },
  pagination: {
    el: ".intro__swiper-pagination",
    clickable: true,
  },
  thumbs: {
    swiper: introSwiperThumbs,
  },
  enabled: false,
  breakpoints: {
    1240: {
      enabled: true,
    },
  },
});
