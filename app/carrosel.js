var swiperIm = new Swiper('.swiper', {
    // direction: 'vertical',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 150,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
  });