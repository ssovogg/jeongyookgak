window.onload = function() {
  
  // 공지사항 슬라이드
  new Swiper('.sw-notice', {
    navigation: {
      prevEl: '.sw-notice-prev',
      nextEl: '.sw-notice-next',
    },
    pagination: {
      el: ".sw-notice-number",
      type: "fraction",
    }
  });

}