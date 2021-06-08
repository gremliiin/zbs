let menuBtn = document.getElementById('menu-btn');
let menuAdaptive = document.getElementById('menu-adaptive');

menuBtn.addEventListener('click', () => {
    if(menuBtn.classList.contains('is-active')){
       document.getElementById('body').style.overflow = 'auto'; 
       menuAdaptive.style.display = 'none';
       menuBtn.classList.remove('is-active'); 
    } else {
        document.getElementById('body').style.overflow = 'hidden'; 
        menuAdaptive.style.display = 'block';
        menuBtn.classList.add('is-active'); 
    }
})
    


$('.slider-block__partners').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: true,
    prevArrow: '<button class="slider-block__btn left"></button>',
    nextArrow: '<button class="slider-block__btn right"></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 3
            }
          },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
});