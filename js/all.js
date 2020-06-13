var galleryTop = new Swiper(".gallery-top", {
  direction: "vertical",
  spaceBetween: 10,
  loop: true,
  loopedSlides: 3, //looped slides should be the same
});

$(function(){
    lineTypeAInit();
    bindThumbnailEvent();
})

function lineTypeAInit(){
  let lineTypeA = $('.typeA');
  if(lineTypeA.length){
     $('.typeA').addClass('init');
  }
}

function bindThumbnailEvent(){
  let galleryThumbsItem = $('.gallery-thumbs li');
  if(galleryThumbsItem.length){
    galleryThumbsItem.each(function(){
        let _this = $(this);
        let itemIndex = _this.index();
        _this.click(function(){
          galleryTop.slideTo(itemIndex);
        })
    })
  }
}


