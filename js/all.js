var galleryTop = new Swiper(".gallery-top", {
  direction: "vertical",
  spaceBetween: 10,
  loop: true,
  loopedSlides: 3, //looped slides should be the same
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

$(function () {
  lineTypeAInit();
  lineTypeBInit();
  lineTypeCInit();
  bindThumbnailEvent();
  swiperImageInit();
  modeToggler();
});

function lineTypeAInit() {
  let lineTypeA = $(".typeA");
  if (lineTypeA.length) {
    $(".typeA").addClass("init");
  }
}

function lineTypeBInit() {
  let lineTypeB = $(".typeB");
  if (lineTypeB.length) {
    $(".typeB").addClass("init");
  }
}

function lineTypeCInit() {
  let lineTypeC = $(".typeC");
  if (lineTypeC.length) {
    $(".typeC").addClass("init");
  }
}

function bindThumbnailEvent() {
  let galleryThumbsItem = $(".gallery-thumbs li");
  if (galleryThumbsItem.length) {
    galleryThumbsItem.each(function () {
      let _this = $(this);
      let itemIndex = _this.index();
      _this.click(function () {
        galleryTop.slideTo(itemIndex);
      });
    });
  }
}

function swiperImageInit() {
  let swiperImage = $(".gallery-top");
  if (swiperImage.length) {
    $(".gallery-top").addClass("init");
  }
}

$(".light-mode").click(function (e) {
  e.preventDefault();
  $("body").toggleClass("lightMode-active");
});
