window.onload = function() {
  
  // 공지사항 슬라이드
  new Swiper('.sw-event', {
    navigation: {
      prevEl: '.sw-event-prev',
      nextEl: '.sw-event-next',
    },
    pagination: {
      el: ".sw-event-number",
      type: "fraction",
    }
  });

}