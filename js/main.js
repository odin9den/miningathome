jQuery(function () {
  let header = $("#headerjs");
  let intro = $("#introjs");
  let introH;
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function () {
    introH = intro.height();
    scrollPos = $(this).scrollTop();

    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  /* 	Smoth scroll */

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault(); /* отмена стандартного поведения */

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    menu.removeClass("show");
    $(".burger").removeClass("burger-active");

    $("html, body").animate(
      {
        scrollTop: elementOffset,
      },
      700
    );
  });

  /* 	Nav Toggle */
  let menu = $("#menu");
  let navToggle = $("#navToggle");

  navToggle.on("click", function (event) {
    event.preventDefault();

    menu.toggleClass("show");
  });

  $("#navToggle").on("click", function () {
    $(".burger").toggleClass("burger-active");
  });

  $("#btnjs, #loadjs").click(function () {
    var element = $(this).attr("href");
    var dist = $(element).offset().top;

    $("html, body").animate({ scrollTop: dist }, 700);

    return false;
  });

  /* work Slider: https://kenwheeler.github.io/slick/ */
  let slider = $("#workSlider");
  let slider2 = $("#reviewSlider");

  slider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  slider2.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    dots: true,
  });

  $("#grab1, #grab2, #grab3, #grab4").click(function () {
    alert("Будь ласка, заповніть контакт-форму");
    return false;
  });

  $("#submit").click(function () {
    alert("Дякуємо за Вашу увагу, ми зв'яжемось з вами у найближчий час!");
    return false;
  });

  new WOW().init();
});
