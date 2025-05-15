  $(document).ready(function(){
    $('.slick-slider').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      dots: true,
      infinite: true,
      speed: 1000,
      fade: true,
      cssEase: 'linear'
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // run animation only once
        }
      });
    }, {
      threshold: 0.3
    });
  
    animatedElements.forEach(el => observer.observe(el));
  });
 $(document).ready(function () {
      $('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,
        adaptiveHeight: true
      });
    });
