var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 100,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  });


  var swiper = new Swiper('.container--resenas', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });






/* document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
  e.preventDefault();
  swiper.prependSlide([
    '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
    '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
  ]);
});
document.querySelector('.prepend-slide').addEventListener('click', function (e) {
  e.preventDefault();
  swiper.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
});
document.querySelector('.append-slide').addEventListener('click', function (e) {
  e.preventDefault();
  swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
});
document.querySelector('.append-2-slides').addEventListener('click', function (e) {
  e.preventDefault();
  swiper.appendSlide([
    '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
    '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
  ]);
}); */