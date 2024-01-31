$( document ).ready(function() {
  var bodyOffset = jQuery('body').offset();
	jQuery(window).scroll(function() {
		if (jQuery(document).scrollTop() > bodyOffset.top) {
			jQuery('header').addClass('active');
		} else {
			jQuery('header').removeClass('active');
		}
	});

  // 트랜스폼 효과 넣기
    function scollHandler () {
      const scroll_y = window.scrollY + (window.innerHeight / 1.5) ;
      const animationContainer = document.querySelectorAll('.ani')
      animationContainer.forEach(element => {
          const itemTop = element.getBoundingClientRect().top + window.scrollY;
          if((scroll_y) > itemTop){
              element.classList.add('on');
          }else{
              element.classList.remove('on');
          }
      });
  }

  scollHandler();

  document.addEventListener("scroll", function(){
    scollHandler();
  })

  AOS.init();


  // 스와이퍼 : 7평 매장에서 월 매출 1억5천
  var swiper = new Swiper(".averageArti .swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 0, // important !!
      disableOnInteraction: false,
    },
    speed: 20000,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 1,
  });

// 스와이퍼 : 유튜브 영상
var swiper2 = new Swiper(".utubeArti .mySwiper", {
  slidesPerView: 2,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".utubeArti .slideBox .btnBox li img.rightBtn",
    prevEl: ".utubeArti .slideBox .btnBox li img.leftBtn",
  },
  autoplay: {
    delay: 3000, // important !!
  },
  breakpoints: {
    400: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
  },
});

//스와이퍼 : 이게 바로 인생 돈까스
var swiperReview = new Swiper(".instaReview .reviewSwiper", {
  slidesPerView: 5,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000, 
  },
  breakpoints: {
    400: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5.5,
      spaceBetween: 50,
    },
  },
});

// 스와이퍼 : 좋은 재료로 만든 진짜 프리미엄 돈카츠
var swiper3 = new Swiper(".menuArti .swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
      delay: 0, // important !!
      disableOnInteraction: false,
  },
  speed: 7000,
  loop: true,
  loopAdditionalSlides: 1,
  slidesPerView: 5,
});



// 스와이퍼 : 드라마 제작지원 100% 본사 부담
var swiper4 = new Swiper(".dramaArti .mySwiper", {
  slidesPerView: 3.5,
  centeredSlides : true,
  loop : true,
  navigation: {
    nextEl: ".dramaArti .rightBtn",
    prevEl: ".dramaArti .leftBtn",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    850: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3.5,
      // spaceBetween: 40,
    },
  },
});

// 하단에 fix된 성공 창업 문의 active 클래스 추가/제거
function active2 () {
  $(".apply_fixed .btnWrap").click(function(){
      $(".apply_fixed").toggleClass("active");
});

  $(".apply_fixed .closeBtn").click(function() {
      $(".apply_fixed").toggleClass("active");
  });

}

active2();


// 개인정보처리방침
function privacy () {
  const section = document.querySelector('.f_popup_bg')
  const privacy_view = document.querySelector('.privacy_view');
  const cancel = document.querySelector('.f_popup_bg .btn');

  function add() {
    section.classList.add('on');
  }

  function remove() {
    section.classList.remove('on');
  }

  privacy_view.addEventListener('click', add);
  cancel.addEventListener('click', remove);
}

privacy();


});
