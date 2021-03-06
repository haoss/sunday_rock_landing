'use strict';

// Document ready
$(document).on('ready', function(){

  // Magnific popup gallery
  $('.gallery').each(function() {
    $(this).magnificPopup({
      delegate: '.gallery-item',
      type: 'image',
      gallery:{
        enabled:true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  });

  // Magnific popup one image
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }
  });

  // Magnific popup video
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });

  // $("form").each(function(){
  //   $(this).validate();
  // });

  var swiper = new Swiper('.comments__wrapper .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 65,
    navigation: {
      nextEl: '.comments__wrapper .swiper-button-next',
      prevEl: '.comments__wrapper .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        autoHeight: false
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 65
      }
    }
  });

  wordWrap();
  showAge();
  faq();
  directionOne();
  costActive();
  formOrder();

  // Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {

  };
});

$(window).on('load', function() {
  $(".loader").delay(400).fadeOut("slow");
});

$(window).on('scroll', function() { });
$(window).on('resize', function() { });

function headerScroll() {
  var header = $('.header');
  var width = $(window).width();

  if ($(window).scrollTop() > header.height()) {
    header.addClass('is-scroll');
  } else {
    header.removeClass('is-scroll');
  }
}

function wordWrap() {
  var words = $(".video__content p").text().split(" ");
  $(".video__content p").empty();
  $.each(words, function(i, v) {
    $(".video__content p").append($("<span>").text(v));
  });
}

function showAge() {
  var btn = $('.j-label-age input[type="checkbox"]');

  btn.each(function(){
    var _this = $(this);
    var block = _this.parents('form').find('.j-label-block');
    _this.on('click', function(e) {
      if (_this.prop("checked")) {
        block.removeClass('hidden');
      } else {
        block.addClass('hidden');
      }
    });
  });
}

jQuery.extend(jQuery.validator.messages, {
  required: "???????????????????????? ????????",
  remote: "Please fix this field.",
  email: "?????????????? ???????????????????? e-mail.",
  url: "Please enter a valid URL.",
  date: "Please enter a valid date.",
  dateISO: "Please enter a valid date (ISO).",
  number: "Please enter a valid number.",
  digits: "Please enter only digits.",
  creditcard: "Please enter a valid credit card number.",
  equalTo: "???????????? ???? ??????????????????.",

  accept: "Please enter a value with a valid extension.",
  maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
  minlength: jQuery.validator.format("Please enter at least {0} characters."),
  rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
  range: jQuery.validator.format("Please enter a value between {0} and {1}."),
  max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
  min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

function faq() {
  var btn = $('.about__faq-question');

  btn.on('click', function(){
    var _this = $(this);
    if (_this.hasClass('is-active')) {
      _this.removeClass('is-active')
    } else {
      _this.addClass('is-active')
    }
  });
}

function directionOne() {
  var btn = $('.direction__one-btn button');
  btn.on('click', function(){
    btn.removeClass('active');
    $(this).addClass('active');
  });
}

function costActive() {
  var block = $('.j-cost-block');
  block.on('click', function(){
    block.removeClass('active');
    $(this).addClass('active');
  });
}

function formOrder() {
  var input1 = $('input[name="form-direction"]');
  var input2 = $('input[name="form-number-lessons"]');
  var btn1 = $('.direction__one-btn button');
  var btn2 = $('.j-cost-block');

  btn1.on('click', function(){
    var value = $(this).data('direction');
    input1.val(value);
  });
  btn2.on('click', function(){
    var value = $(this).data('number');
    input2.val(value);
  });
}