(function() {
  'use strict';

  //main js

  $('.popup-frame').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	$('.popup-img').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
  });

  $('.popup').magnificPopup({
		type: 'inline',
    preloader: false,
    closeOnContentClick: false,
  });

  //

  svg4everybody();
  

  //table
  
  if($('table.responsive').length > 0){
    $('table.responsive').ngResponsiveTables();
  }
	
  //select styler

  $('select').styler();

  //datepicker

  $( ".datepicker" ).datepicker();

  //accordion

  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.accordion__head');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('active');

    if (!e.data.multiple) {
      $el.find('.accordion__body').not($next).slideUp().parent().removeClass('active');
    };
  }	

  var accordion = new Accordion($('.accordion'), false);
  
  // aos

  AOS.init(
    {
      // Global settings
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
      offset: 0, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    }
  );

	setTimeout(AOS.refreshHard, 1000);
	
	//clipboard

  var affil1 = new Clipboard('#affil');
  var banners = new Clipboard('.cabinet-banners__copy');

  function affiliatelink(id) {
    id.on('success', function (e) {
      // swal({
      //   title: "Your referral link copied!",
      //   text: "You can paste text that has been copied by pressing Ctrl + V. The text that was copied last will be pasted.",
      //   type: "success",
      //   showCancelButton: false,
      //   confirmButtonClass: "btn-success",
      //   confirmButtonText: "OK!",
      //   closeOnConfirm: false,
      //   closeOnCancel: false
      // });

      Lobibox.notify('success', {
        title: true,
        size: 'normal',
        icon: true,
        sound: false,
        iconSource: "bootstrap",
        msg: 'Your referral link copied!'
      });
    });
  }

  affiliatelink(affil1);
  affiliatelink(banners);


  $('.language-arrow').on('click', function(){
    $(this).toggleClass('active');
    $('.language-hide').slideToggle();
  })

  var investCar = new Swiper('.invest-car .swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 25,
    effect:'cube',
    cubeEffect: {
      slideShadows: false,
    },
    navigation: {
      nextEl: '.invest-pag .swiper-button-next',
      prevEl: '.invest-pag .swiper-button-prev',
    }
  });

  var investPag = new Swiper('.invest-pag .swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    allowTouchMove: false,
    // navigation: {
    //   prevEl: '#wallets-slider .item-head-arrows__arrow_left',
    //   nextEl: '#wallets-slider .item-head-arrows__arrow_right',
    // }
  });

  var investContent = new Swiper('.invest-content .swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    // navigation: {
    //   prevEl: '#wallets-slider .item-head-arrows__arrow_left',
    //   nextEl: '#wallets-slider .item-head-arrows__arrow_right',
    // }
  });
  
  investCar.on('slideChange', function () {
    investPag.slideTo(investCar.realIndex );
    investContent.slideTo(investCar.realIndex + 1);
  });

  var roadmapSlider = new Swiper('.roadmap-slider .swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      prevEl: '.roadmap-slider .swiper-button-prev',
      nextEl: '.roadmap-slider .swiper-button-next',
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
    }
  });

  var statDepositSlider = new Swiper('#stat-deposit .swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '#stat-deposit .swiper-button-prev',
    },
  });

  var statWithdrawSlider = new Swiper('#stat-withdraw .swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '#stat-withdraw .swiper-button-prev',
    },
  });

  var newsPageSlider = new Swiper('.news-page-slider .swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 25,
    slideToClickedSlide: true,
    pagination: {
      el: '.news-page__nav .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      prevEl: '.news-page__nav .swiper-button-prev',
      nextEl: '.news-page__nav .swiper-button-next',
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      },
    }
  });
  var newsPageContentSlider = new Swiper('.news-page__content .swiper-container', {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  newsPageSlider.on('slideChange', function(){
    newsPageContentSlider.slideTo(newsPageSlider.realIndex + 1);
  })


  //counter 

  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });


  //cabinet js

  //tabs

  $('.tabs__wrap').each(function() {
    $(this).find('.tab').each(function(i) {
      $(this).parents('.tabs__wrap').find('.tab_content').children().not(':first').hide();
      $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents('.tabs__wrap').find('.tab_content').children().eq(i).fadeIn(0).siblings('.tab_item').hide();
        if($('#wallets-slider').length !== 0){
          walletsSlider.update();
          opersSlider.update();
        }
      });
    });
  });

  //wallets toggle
  $( ".cabinet-sidebar-tabs-content__item.item_wallets .content-item" ).click(function() {
    if($(this).hasClass('active')){
      $(this).removeClass('active');
    }else{
      $(this).addClass('active');
    }
    $(this).find( ".content-item__toggler" ).slideToggle( "slow" );
  });

  //sliders
  //cabinet sidebar wallets slider
  var walletsSlider = new Swiper('#wallets-slider .swiper-container', {
    //loop: true,
    slidesPerView: 1,
    spaceBetween: 25,
    effect:'cube',
    cubeEffect: {
      slideShadows: false,
    },
    navigation: {
      prevEl: '#wallets-slider .item-head-arrows__arrow_left',
      nextEl: '#wallets-slider .item-head-arrows__arrow_right',
    }
  });
  //cabinet sidebar operations slider
  var opersSlider = new Swiper('#opers-slider .swiper-container', {
    //loop: true,
    slidesPerView: 1,
    spaceBetween: 25,
    effect:'cube',
    cubeEffect: {
      slideShadows: false,
    },
    navigation: {
      prevEl: '#opers-slider .item-head-arrows__arrow_left',
      nextEl: '#opers-slider .item-head-arrows__arrow_right',
    }
  });

  //cabinet plans slider
  var plansSlider = new Swiper('.select-plan__items .swiper-container', {
    loop: false,
    slidesPerView: 2,
    spaceBetween: 25,
    navigation: {
      nextEl: '.select-plan .header-arrows__arrow_right',
      prevEl: '.select-plan .header-arrows__arrow_left',
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
    }
  });
  var bannersSlider = new Swiper('.cabinet-banners__items .swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,
    slideToClickedSlide: true,
    // navigation: {
    //   nextEl: '.select-plan .header-arrows__arrow_right',
    //   prevEl: '.select-plan .header-arrows__arrow_left',
    // },
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      560: {
        slidesPerView: 1,
      },
    }
  });
  var bannersContentSlider = new Swiper('.cabinet-banners__content .swiper-container', {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  bannersSlider.on('slideChange', function(){
    bannersContentSlider.slideTo(bannersSlider.realIndex + 1);
  })

  //cabinet-settings

  $('.cabinet-history__settings-btn').on('click', function(e){
    e.preventDefault();
  
    
  
    $(this).siblings('.cabinet-history__settings-hide').fadeIn(300);
    $(this).parent().addClass('active');
    let trueH = ($(document).outerHeight(true) - $(this).siblings('.cabinet-history__settings-hide').offset().top - $(this).siblings('.cabinet-history__settings-hide').outerHeight(true));
  
    if(trueH <= 0){
      $(this).siblings('.cabinet-history__settings-hide').addClass('top');
    }
  });

  $(document).mouseup(function (e){ 
    var block = $(".cabinet-history__settings.active .cabinet-history__settings-hide"); 
    if (!block.is(e.target) 
        && block.has(e.target).length === 0) { 
        block.hide(); 
  
        block.parent().removeClass('active');
  
        if( block.hasClass('top')){
          block.removeClass('top');
        }
    }
  });



  //charts
  //cabinet profit chart
  if($("#profit-graph").length !== 0){
    var ctx = document.getElementById('profit-graph').getContext('2d');
    ctx.width = 300;
    ctx.height = 300;
    var gradientFill = ctx.createLinearGradient(0, 0, 0, 200);
    gradientFill.addColorStop(0, "rgba(255,255,255,1)");
    gradientFill.addColorStop(1, "rgba(255,255,255,0)");
    var gradientFill2 = ctx.createLinearGradient(0, 0, 0, 200);
    gradientFill2.addColorStop(0, "rgba(237,11,14,1)");
    gradientFill2.addColorStop(1, "rgba(65,10,20,1)");
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        //labels: [ '22 Jan','23 Jan','24 Jan','25 Jan','26 Jan','27 Jan','28 Jan','29 Jan','30 Jan','31 Jan','01 Feb','02 Feb','03 Feb','04 Feb'],
        labels: [ '30 Jan','31 Jan','01 Feb','02 Feb','03 Feb','04 Feb','05 Feb'],
        datasets: [{
          data: [20.12,15.14,10,55,20,15,10],
          borderWidth: 5,
          borderColor: '#bbb8b5',
          pointStyle:'circle',
          hoverBorderWidth:2,
          backgroundColor: gradientFill,
          hitRadius:10
        }]
      },

      // Configuration options go here
      options: {
        cutoutPercentage: 70,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips:{
          titleFontFamily: "'Roboto', sans-serif",
          titleFontSize: 12,
          bodyFontFamily:"'Tokyotrail', sans-serif",
          bodyFontSize: 11,
          backgroundColor: gradientFill2,
          displayColors: false,
          caretSize: 8,
          cornerRadius: 0,
          xPadding: 11,
          yPadding: 11,
          callbacks: {
            label: function(tooltipItem, data) {
              var dataset = data['datasets'][0];
              var amount = dataset['data'][tooltipItem['index']];
              return amount + '$';
            }
          }
        },
        scales:{
          xAxes:[{
            gridLines: {
              color: 'rgba(135, 135, 135, 0.3)'
            }
          }]
        }
      }
    });
  }

  //cabinet details chart
  if($("#detailsCart").length !== 0){
    var ctx = document.getElementById('detailsCart').getContext('2d');
    ctx.width = 300;
    ctx.height = 300;
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'doughnut',

      // The data for our dataset
      data: {
        labels: tooltip_labels,
        datasets: [{
          data: main_graph_data,
          borderWidth: 0,
          backgroundColor: [
            '#410a14',
            '#bbb8b5',
            '#ed0b0e',
            '#6d625c',
          ]
        }]
      },

      // Configuration options go here
      options: {
        cutoutPercentage: 50,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips:{
          enabled: display_tooltip,
          titleFontFamily: "'Roboto', sans-serif",
          titleFontSize: 12,
          bodyFontFamily:"'Tokyotrail', sans-serif",
          bodyFontSize: 11,
          backgroundColor: gradientFill2,
          displayColors: false,
          caretSize: 8,
          cornerRadius: 0,
          xPadding: 11,
          yPadding: 11,
          callbacks: {
            title: function(tooltipItem, data){
              return data['labels'][tooltipItem[0]['index']];
            },
            label: function(tooltipItem, data) {
              var dataset = data['datasets'][0];
              var amount = dataset['data'][tooltipItem['index']];
              return amount + '$';
            }
          }
        }
      }
    });
  }

  if($('.first-scene').length !== 0){
    var smoke = new Image();
smoke.src = '../s3-us-west-2.amazonaws.com/s.cdpn.io/15388/smoke.png';

$.fn.emitter = function(opts){
  var particles = [];
  var canvases = [];

  var particle = function(canvas){
    var x, y, size, speedX, speedY, opacity;
    reset();
    
    this.update = function(){
      if(opacity > 0){
        opacity -= (Math.random() / opts.speed.fade);
      }

      if(opacity <= 0){
        reset();
      }
      
      speedX -= Math.random() / opts.speed.acceleration;
      speedY -= Math.random() / opts.speed.acceleration;
      x += speedX;
      y += speedY;
      size += Math.random();
      drawParticle(x, y, size, opacity);
    };

    function drawParticle(x, y, size, opacity){
      canvas.globalAlpha = opacity;
      canvas.drawImage(smoke, 0, 0, opts.size, opts.size, x, y, size, size);
    }

    function reset(){
      x = opts.x;
      y = opts.y;
      size = opts.size;
      speedX = Math.random() * opts.speed.x;
      speedY = Math.random() * opts.speed.y;
      opacity = Math.random();
    }
  };

  var canvas = function(el){
    var canvas = el[0].getContext('2d');

    canvas.width = el.width();
    canvas.height = el.height();

    for(var c = 0; c < opts.particles; c++){
      particles.push(new particle(canvas));
    }

    this.clear = function(){
      canvas.clearRect(0, 0, canvas.width, canvas.height);
    };
  };

  $(this).each(function(){
    canvases.push(new canvas($(this)));
  });

  function render(){
    canvases.forEach(function(canvas){
      canvas.clear();
    });

    particles.forEach(function(particle){
      particle.update();
    });
    
    window.requestAnimationFrame(render);
  }

  return {
    render: render
  }
};

    $('#main-smoke').emitter({
      x: 500,
      y: 0,
      size: 70,
      particles: 200,
      speed: {
        x: -1,
        y: 3,
        fade: 150,
        acceleration: 1300
      }
    }).render();
    $('#road-smoke').emitter({
      x: 500,
      y: 0,
      size: 70,
      particles: 200,
      speed: {
        x: -1,
        y: 3,
        fade: 150,
        acceleration: 1300
      }
    }).render();

  }
})();


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAvL21haW4ganNcclxuXHJcbiAgJCgnLnBvcHVwLWZyYW1lJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRkaXNhYmxlT246IDcwMCxcclxuXHRcdHR5cGU6ICdpZnJhbWUnLFxyXG5cdFx0bWFpbkNsYXNzOiAnbWZwLWZhZGUnLFxyXG5cdFx0cmVtb3ZhbERlbGF5OiAxNjAsXHJcblx0XHRwcmVsb2FkZXI6IGZhbHNlLFxyXG5cdFx0Zml4ZWRDb250ZW50UG9zOiBmYWxzZVxyXG5cdH0pO1xyXG5cclxuXHQkKCcucG9wdXAtaW1nJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHR0eXBlOiAnaW1hZ2UnLFxyXG5cdFx0Y2xvc2VPbkNvbnRlbnRDbGljazogdHJ1ZSxcclxuXHRcdG1haW5DbGFzczogJ21mcC1pbWctbW9iaWxlJyxcclxuXHRcdGltYWdlOiB7XHJcblx0XHRcdHZlcnRpY2FsRml0OiB0cnVlXHJcblx0XHR9XHJcblx0XHRcclxuICB9KTtcclxuXHJcbiAgJCgnLnBvcHVwJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHR0eXBlOiAnaW5saW5lJyxcclxuICAgIHByZWxvYWRlcjogZmFsc2UsXHJcbiAgICBjbG9zZU9uQ29udGVudENsaWNrOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgLy9cclxuXHJcbiAgc3ZnNGV2ZXJ5Ym9keSgpO1xyXG4gIFxyXG5cclxuICAvL3RhYmxlXHJcbiAgXHJcbiAgaWYoJCgndGFibGUucmVzcG9uc2l2ZScpLmxlbmd0aCA+IDApe1xyXG4gICAgJCgndGFibGUucmVzcG9uc2l2ZScpLm5nUmVzcG9uc2l2ZVRhYmxlcygpO1xyXG4gIH1cclxuXHRcclxuICAvL3NlbGVjdCBzdHlsZXJcclxuXHJcbiAgJCgnc2VsZWN0Jykuc3R5bGVyKCk7XHJcblxyXG4gIC8vZGF0ZXBpY2tlclxyXG5cclxuICAkKCBcIi5kYXRlcGlja2VyXCIgKS5kYXRlcGlja2VyKCk7XHJcblxyXG4gIC8vYWNjb3JkaW9uXHJcblxyXG4gIHZhciBBY2NvcmRpb24gPSBmdW5jdGlvbihlbCwgbXVsdGlwbGUpIHtcclxuICAgIHRoaXMuZWwgPSBlbCB8fCB7fTtcclxuICAgIHRoaXMubXVsdGlwbGUgPSBtdWx0aXBsZSB8fCBmYWxzZTtcclxuXHJcbiAgICAvLyBWYXJpYWJsZXMgcHJpdmFkYXNcclxuICAgIHZhciBsaW5rcyA9IHRoaXMuZWwuZmluZCgnLmFjY29yZGlvbl9faGVhZCcpO1xyXG4gICAgLy8gRXZlbnRvXHJcbiAgICBsaW5rcy5vbignY2xpY2snLCB7ZWw6IHRoaXMuZWwsIG11bHRpcGxlOiB0aGlzLm11bHRpcGxlfSwgdGhpcy5kcm9wZG93bilcclxuICB9XHJcblxyXG4gIEFjY29yZGlvbi5wcm90b3R5cGUuZHJvcGRvd24gPSBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgJGVsID0gZS5kYXRhLmVsLFxyXG4gICAgICAgICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAkbmV4dCA9ICR0aGlzLm5leHQoKTtcclxuXHJcbiAgICAkbmV4dC5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgJHRoaXMucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgIGlmICghZS5kYXRhLm11bHRpcGxlKSB7XHJcbiAgICAgICRlbC5maW5kKCcuYWNjb3JkaW9uX19ib2R5Jykubm90KCRuZXh0KS5zbGlkZVVwKCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfTtcclxuICB9XHRcclxuXHJcbiAgdmFyIGFjY29yZGlvbiA9IG5ldyBBY2NvcmRpb24oJCgnLmFjY29yZGlvbicpLCBmYWxzZSk7XHJcbiAgXHJcbiAgLy8gYW9zXHJcblxyXG4gIEFPUy5pbml0KFxyXG4gICAge1xyXG4gICAgICAvLyBHbG9iYWwgc2V0dGluZ3NcclxuICAgICAgZGlzYWJsZTogZmFsc2UsIC8vIGFjY2VwdHMgZm9sbG93aW5nIHZhbHVlczogJ3Bob25lJywgJ3RhYmxldCcsICdtb2JpbGUnLCBib29sZWFuLCBleHByZXNzaW9uIG9yIGZ1bmN0aW9uXHJcbiAgICAgIHN0YXJ0RXZlbnQ6ICdET01Db250ZW50TG9hZGVkJywgLy8gbmFtZSBvZiB0aGUgZXZlbnQgZGlzcGF0Y2hlZCBvbiB0aGUgZG9jdW1lbnQsIHRoYXQgQU9TIHNob3VsZCBpbml0aWFsaXplIG9uXHJcbiAgICAgIGluaXRDbGFzc05hbWU6ICdhb3MtaW5pdCcsIC8vIGNsYXNzIGFwcGxpZWQgYWZ0ZXIgaW5pdGlhbGl6YXRpb25cclxuICAgICAgYW5pbWF0ZWRDbGFzc05hbWU6ICdhb3MtYW5pbWF0ZScsIC8vIGNsYXNzIGFwcGxpZWQgb24gYW5pbWF0aW9uXHJcbiAgICAgIHVzZUNsYXNzTmFtZXM6IGZhbHNlLCAvLyBpZiB0cnVlLCB3aWxsIGFkZCBjb250ZW50IG9mIGBkYXRhLWFvc2AgYXMgY2xhc3NlcyBvbiBzY3JvbGxcclxuICAgICAgLy8gU2V0dGluZ3MgdGhhdCBjYW4gYmUgb3ZlcnJpZGVuIG9uIHBlci1lbGVtZW50IGJhc2lzLCBieSBgZGF0YS1hb3MtKmAgYXR0cmlidXRlczpcclxuICAgICAgb2Zmc2V0OiAwLCAvLyBvZmZzZXQgKGluIHB4KSBmcm9tIHRoZSBvcmlnaW5hbCB0cmlnZ2VyIHBvaW50XHJcbiAgICAgIGRlbGF5OiAwLCAvLyB2YWx1ZXMgZnJvbSAwIHRvIDMwMDAsIHdpdGggc3RlcCA1MG1zXHJcbiAgICAgIGR1cmF0aW9uOiA3MDAsIC8vIHZhbHVlcyBmcm9tIDAgdG8gMzAwMCwgd2l0aCBzdGVwIDUwbXNcclxuICAgICAgZWFzaW5nOiAnZWFzZS1pbi1vdXQnLCAvLyBkZWZhdWx0IGVhc2luZyBmb3IgQU9TIGFuaW1hdGlvbnNcclxuICAgICAgb25jZTogZmFsc2UsIC8vIHdoZXRoZXIgYW5pbWF0aW9uIHNob3VsZCBoYXBwZW4gb25seSBvbmNlIC0gd2hpbGUgc2Nyb2xsaW5nIGRvd25cclxuICAgICAgbWlycm9yOiBmYWxzZSwgLy8gd2hldGhlciBlbGVtZW50cyBzaG91bGQgYW5pbWF0ZSBvdXQgd2hpbGUgc2Nyb2xsaW5nIHBhc3QgdGhlbVxyXG4gICAgICBhbmNob3JQbGFjZW1lbnQ6ICd0b3AtYm90dG9tJywgLy8gZGVmaW5lcyB3aGljaCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudCByZWdhcmRpbmcgdG8gd2luZG93IHNob3VsZCB0cmlnZ2VyIHRoZSBhbmltYXRpb25cclxuICAgIH1cclxuICApO1xyXG5cclxuXHRzZXRUaW1lb3V0KEFPUy5yZWZyZXNoSGFyZCwgMTAwMCk7XHJcblx0XHJcblx0Ly9jbGlwYm9hcmRcclxuXHJcbiAgdmFyIGFmZmlsMSA9IG5ldyBDbGlwYm9hcmQoJyNhZmZpbCcpO1xyXG4gIHZhciBiYW5uZXJzID0gbmV3IENsaXBib2FyZCgnLmNhYmluZXQtYmFubmVyc19fY29weScpO1xyXG5cclxuICBmdW5jdGlvbiBhZmZpbGlhdGVsaW5rKGlkKSB7XHJcbiAgICBpZC5vbignc3VjY2VzcycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIC8vIHN3YWwoe1xyXG4gICAgICAvLyAgIHRpdGxlOiBcIllvdXIgcmVmZXJyYWwgbGluayBjb3BpZWQhXCIsXHJcbiAgICAgIC8vICAgdGV4dDogXCJZb3UgY2FuIHBhc3RlIHRleHQgdGhhdCBoYXMgYmVlbiBjb3BpZWQgYnkgcHJlc3NpbmcgQ3RybCArIFYuIFRoZSB0ZXh0IHRoYXQgd2FzIGNvcGllZCBsYXN0IHdpbGwgYmUgcGFzdGVkLlwiLFxyXG4gICAgICAvLyAgIHR5cGU6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAvLyAgIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxyXG4gICAgICAvLyAgIGNvbmZpcm1CdXR0b25DbGFzczogXCJidG4tc3VjY2Vzc1wiLFxyXG4gICAgICAvLyAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9LIVwiLFxyXG4gICAgICAvLyAgIGNsb3NlT25Db25maXJtOiBmYWxzZSxcclxuICAgICAgLy8gICBjbG9zZU9uQ2FuY2VsOiBmYWxzZVxyXG4gICAgICAvLyB9KTtcclxuXHJcbiAgICAgIExvYmlib3gubm90aWZ5KCdzdWNjZXNzJywge1xyXG4gICAgICAgIHRpdGxlOiB0cnVlLFxyXG4gICAgICAgIHNpemU6ICdub3JtYWwnLFxyXG4gICAgICAgIGljb246IHRydWUsXHJcbiAgICAgICAgc291bmQ6IGZhbHNlLFxyXG4gICAgICAgIGljb25Tb3VyY2U6IFwiYm9vdHN0cmFwXCIsXHJcbiAgICAgICAgbXNnOiAnWW91ciByZWZlcnJhbCBsaW5rIGNvcGllZCEnXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZmZpbGlhdGVsaW5rKGFmZmlsMSk7XHJcbiAgYWZmaWxpYXRlbGluayhiYW5uZXJzKTtcclxuXHJcblxyXG4gICQoJy5sYW5ndWFnZS1hcnJvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5sYW5ndWFnZS1oaWRlJykuc2xpZGVUb2dnbGUoKTtcclxuICB9KVxyXG5cclxuICB2YXIgaW52ZXN0Q2FyID0gbmV3IFN3aXBlcignLmludmVzdC1jYXIgLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMjUsXHJcbiAgICBlZmZlY3Q6J2N1YmUnLFxyXG4gICAgY3ViZUVmZmVjdDoge1xyXG4gICAgICBzbGlkZVNoYWRvd3M6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnLmludmVzdC1wYWcgLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgIHByZXZFbDogJy5pbnZlc3QtcGFnIC5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB2YXIgaW52ZXN0UGFnID0gbmV3IFN3aXBlcignLmludmVzdC1wYWcgLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG4gICAgLy8gbmF2aWdhdGlvbjoge1xyXG4gICAgLy8gICBwcmV2RWw6ICcjd2FsbGV0cy1zbGlkZXIgLml0ZW0taGVhZC1hcnJvd3NfX2Fycm93X2xlZnQnLFxyXG4gICAgLy8gICBuZXh0RWw6ICcjd2FsbGV0cy1zbGlkZXIgLml0ZW0taGVhZC1hcnJvd3NfX2Fycm93X3JpZ2h0JyxcclxuICAgIC8vIH1cclxuICB9KTtcclxuXHJcbiAgdmFyIGludmVzdENvbnRlbnQgPSBuZXcgU3dpcGVyKCcuaW52ZXN0LWNvbnRlbnQgLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcclxuICAgIC8vIG5hdmlnYXRpb246IHtcclxuICAgIC8vICAgcHJldkVsOiAnI3dhbGxldHMtc2xpZGVyIC5pdGVtLWhlYWQtYXJyb3dzX19hcnJvd19sZWZ0JyxcclxuICAgIC8vICAgbmV4dEVsOiAnI3dhbGxldHMtc2xpZGVyIC5pdGVtLWhlYWQtYXJyb3dzX19hcnJvd19yaWdodCcsXHJcbiAgICAvLyB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgaW52ZXN0Q2FyLm9uKCdzbGlkZUNoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGludmVzdFBhZy5zbGlkZVRvKGludmVzdENhci5yZWFsSW5kZXggKyAxKTtcclxuICAgIGludmVzdENvbnRlbnQuc2xpZGVUbyhpbnZlc3RDYXIucmVhbEluZGV4ICsgMSk7XHJcbiAgfSk7XHJcblxyXG4gIHZhciByb2FkbWFwU2xpZGVyID0gbmV3IFN3aXBlcignLnJvYWRtYXAtc2xpZGVyIC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBwcmV2RWw6ICcucm9hZG1hcC1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgIG5leHRFbDogJy5yb2FkbWFwLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA5OTI6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB2YXIgc3RhdERlcG9zaXRTbGlkZXIgPSBuZXcgU3dpcGVyKCcjc3RhdC1kZXBvc2l0IC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6ICcjc3RhdC1kZXBvc2l0IC5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgdmFyIHN0YXRXaXRoZHJhd1NsaWRlciA9IG5ldyBTd2lwZXIoJyNzdGF0LXdpdGhkcmF3IC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6ICcjc3RhdC13aXRoZHJhdyAuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHZhciBuZXdzUGFnZVNsaWRlciA9IG5ldyBTd2lwZXIoJy5uZXdzLXBhZ2Utc2xpZGVyIC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICBzcGFjZUJldHdlZW46IDI1LFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogJy5uZXdzLXBhZ2VfX25hdiAuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICB0eXBlOiAnYnVsbGV0cycsXHJcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIHByZXZFbDogJy5uZXdzLXBhZ2VfX25hdiAuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgbmV4dEVsOiAnLm5ld3MtcGFnZV9fbmF2IC5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDk5Mjoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIH0sXHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIH0sXHJcbiAgICAgIDQ4MDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgdmFyIG5ld3NQYWdlQ29udGVudFNsaWRlciA9IG5ldyBTd2lwZXIoJy5uZXdzLXBhZ2VfX2NvbnRlbnQgLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBzcGVlZDogNDAwLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgIGZhZGVFZmZlY3Q6IHtcclxuICAgICAgY3Jvc3NGYWRlOiB0cnVlXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBuZXdzUGFnZVNsaWRlci5vbignc2xpZGVDaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgbmV3c1BhZ2VDb250ZW50U2xpZGVyLnNsaWRlVG8obmV3c1BhZ2VTbGlkZXIucmVhbEluZGV4ICsgMSk7XHJcbiAgfSlcclxuXHJcblxyXG4gIC8vY291bnRlciBcclxuXHJcbiAgJCgnLmNvdW50JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnByb3AoJ0NvdW50ZXInLDApLmFuaW1hdGUoe1xyXG4gICAgICAgIENvdW50ZXI6ICQodGhpcykudGV4dCgpXHJcbiAgICB9LCB7XHJcbiAgICAgICAgZHVyYXRpb246IDQwMDAsXHJcbiAgICAgICAgZWFzaW5nOiAnc3dpbmcnLFxyXG4gICAgICAgIHN0ZXA6IGZ1bmN0aW9uIChub3cpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KE1hdGguY2VpbChub3cpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcblxyXG4gIC8vY2FiaW5ldCBqc1xyXG5cclxuICAvL3RhYnNcclxuXHJcbiAgJCgnLnRhYnNfX3dyYXAnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS5maW5kKCcudGFiJykuZWFjaChmdW5jdGlvbihpKSB7XHJcbiAgICAgICQodGhpcykucGFyZW50cygnLnRhYnNfX3dyYXAnKS5maW5kKCcudGFiX2NvbnRlbnQnKS5jaGlsZHJlbigpLm5vdCgnOmZpcnN0JykuaGlkZSgpO1xyXG4gICAgICAkKHRoaXMpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcudGFic19fd3JhcCcpLmZpbmQoJy50YWJfY29udGVudCcpLmNoaWxkcmVuKCkuZXEoaSkuZmFkZUluKDApLnNpYmxpbmdzKCcudGFiX2l0ZW0nKS5oaWRlKCk7XHJcbiAgICAgICAgaWYoJCgnI3dhbGxldHMtc2xpZGVyJykubGVuZ3RoICE9PSAwKXtcclxuICAgICAgICAgIHdhbGxldHNTbGlkZXIudXBkYXRlKCk7XHJcbiAgICAgICAgICBvcGVyc1NsaWRlci51cGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vd2FsbGV0cyB0b2dnbGVcclxuICAkKCBcIi5jYWJpbmV0LXNpZGViYXItdGFicy1jb250ZW50X19pdGVtLml0ZW1fd2FsbGV0cyAuY29udGVudC1pdGVtXCIgKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKXtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICAkKHRoaXMpLmZpbmQoIFwiLmNvbnRlbnQtaXRlbV9fdG9nZ2xlclwiICkuc2xpZGVUb2dnbGUoIFwic2xvd1wiICk7XHJcbiAgfSk7XHJcblxyXG4gIC8vc2xpZGVyc1xyXG4gIC8vY2FiaW5ldCBzaWRlYmFyIHdhbGxldHMgc2xpZGVyXHJcbiAgdmFyIHdhbGxldHNTbGlkZXIgPSBuZXcgU3dpcGVyKCcjd2FsbGV0cy1zbGlkZXIgLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICAvL2xvb3A6IHRydWUsXHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAyNSxcclxuICAgIGVmZmVjdDonY3ViZScsXHJcbiAgICBjdWJlRWZmZWN0OiB7XHJcbiAgICAgIHNsaWRlU2hhZG93czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBwcmV2RWw6ICcjd2FsbGV0cy1zbGlkZXIgLml0ZW0taGVhZC1hcnJvd3NfX2Fycm93X2xlZnQnLFxyXG4gICAgICBuZXh0RWw6ICcjd2FsbGV0cy1zbGlkZXIgLml0ZW0taGVhZC1hcnJvd3NfX2Fycm93X3JpZ2h0JyxcclxuICAgIH1cclxuICB9KTtcclxuICAvL2NhYmluZXQgc2lkZWJhciBvcGVyYXRpb25zIHNsaWRlclxyXG4gIHZhciBvcGVyc1NsaWRlciA9IG5ldyBTd2lwZXIoJyNvcGVycy1zbGlkZXIgLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICAvL2xvb3A6IHRydWUsXHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAyNSxcclxuICAgIGVmZmVjdDonY3ViZScsXHJcbiAgICBjdWJlRWZmZWN0OiB7XHJcbiAgICAgIHNsaWRlU2hhZG93czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBwcmV2RWw6ICcjb3BlcnMtc2xpZGVyIC5pdGVtLWhlYWQtYXJyb3dzX19hcnJvd19sZWZ0JyxcclxuICAgICAgbmV4dEVsOiAnI29wZXJzLXNsaWRlciAuaXRlbS1oZWFkLWFycm93c19fYXJyb3dfcmlnaHQnLFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvL2NhYmluZXQgcGxhbnMgc2xpZGVyXHJcbiAgdmFyIHBsYW5zU2xpZGVyID0gbmV3IFN3aXBlcignLnNlbGVjdC1wbGFuX19pdGVtcyAuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgIHNwYWNlQmV0d2VlbjogMjUsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogJy5zZWxlY3QtcGxhbiAuaGVhZGVyLWFycm93c19fYXJyb3dfcmlnaHQnLFxyXG4gICAgICBwcmV2RWw6ICcuc2VsZWN0LXBsYW4gLmhlYWRlci1hcnJvd3NfX2Fycm93X2xlZnQnLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDEyMDA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICB9LFxyXG4gICAgICA5OTI6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHZhciBiYW5uZXJzU2xpZGVyID0gbmV3IFN3aXBlcignLmNhYmluZXQtYmFubmVyc19faXRlbXMgLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiB0cnVlLFxyXG4gICAgLy8gbmF2aWdhdGlvbjoge1xyXG4gICAgLy8gICBuZXh0RWw6ICcuc2VsZWN0LXBsYW4gLmhlYWRlci1hcnJvd3NfX2Fycm93X3JpZ2h0JyxcclxuICAgIC8vICAgcHJldkVsOiAnLnNlbGVjdC1wbGFuIC5oZWFkZXItYXJyb3dzX19hcnJvd19sZWZ0JyxcclxuICAgIC8vIH0sXHJcbiAgICBhdXRvcGxheToge1xyXG4gICAgICBkZWxheTogMzAwMCxcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAxMjAwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgfSxcclxuICAgICAgOTkyOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgfSxcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgfSxcclxuICAgICAgNTYwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9KTtcclxuICB2YXIgYmFubmVyc0NvbnRlbnRTbGlkZXIgPSBuZXcgU3dpcGVyKCcuY2FiaW5ldC1iYW5uZXJzX19jb250ZW50IC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgc3BlZWQ6IDQwMCxcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICBmYWRlRWZmZWN0OiB7XHJcbiAgICAgIGNyb3NzRmFkZTogdHJ1ZVxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgYmFubmVyc1NsaWRlci5vbignc2xpZGVDaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgYmFubmVyc0NvbnRlbnRTbGlkZXIuc2xpZGVUbyhiYW5uZXJzU2xpZGVyLnJlYWxJbmRleCArIDEpO1xyXG4gIH0pXHJcblxyXG4gIC8vY2FiaW5ldC1zZXR0aW5nc1xyXG5cclxuICAkKCcuY2FiaW5ldC1oaXN0b3J5X19zZXR0aW5ncy1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuICAgIFxyXG4gIFxyXG4gICAgJCh0aGlzKS5zaWJsaW5ncygnLmNhYmluZXQtaGlzdG9yeV9fc2V0dGluZ3MtaGlkZScpLmZhZGVJbigzMDApO1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICBsZXQgdHJ1ZUggPSAoJChkb2N1bWVudCkub3V0ZXJIZWlnaHQodHJ1ZSkgLSAkKHRoaXMpLnNpYmxpbmdzKCcuY2FiaW5ldC1oaXN0b3J5X19zZXR0aW5ncy1oaWRlJykub2Zmc2V0KCkudG9wIC0gJCh0aGlzKS5zaWJsaW5ncygnLmNhYmluZXQtaGlzdG9yeV9fc2V0dGluZ3MtaGlkZScpLm91dGVySGVpZ2h0KHRydWUpKTtcclxuICBcclxuICAgIGlmKHRydWVIIDw9IDApe1xyXG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuY2FiaW5ldC1oaXN0b3J5X19zZXR0aW5ncy1oaWRlJykuYWRkQ2xhc3MoJ3RvcCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKXsgXHJcbiAgICB2YXIgYmxvY2sgPSAkKFwiLmNhYmluZXQtaGlzdG9yeV9fc2V0dGluZ3MuYWN0aXZlIC5jYWJpbmV0LWhpc3RvcnlfX3NldHRpbmdzLWhpZGVcIik7IFxyXG4gICAgaWYgKCFibG9jay5pcyhlLnRhcmdldCkgXHJcbiAgICAgICAgJiYgYmxvY2suaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHsgXHJcbiAgICAgICAgYmxvY2suaGlkZSgpOyBcclxuICBcclxuICAgICAgICBibG9jay5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgXHJcbiAgICAgICAgaWYoIGJsb2NrLmhhc0NsYXNzKCd0b3AnKSl7XHJcbiAgICAgICAgICBibG9jay5yZW1vdmVDbGFzcygndG9wJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG4gIC8vY2hhcnRzXHJcbiAgLy9jYWJpbmV0IHByb2ZpdCBjaGFydFxyXG4gIGlmKCQoXCIjcHJvZml0LWdyYXBoXCIpLmxlbmd0aCAhPT0gMCl7XHJcbiAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2ZpdC1ncmFwaCcpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjdHgud2lkdGggPSAzMDA7XHJcbiAgICBjdHguaGVpZ2h0ID0gMzAwO1xyXG4gICAgdmFyIGdyYWRpZW50RmlsbCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCAyMDApO1xyXG4gICAgZ3JhZGllbnRGaWxsLmFkZENvbG9yU3RvcCgwLCBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIik7XHJcbiAgICBncmFkaWVudEZpbGwuYWRkQ29sb3JTdG9wKDEsIFwicmdiYSgyNTUsMjU1LDI1NSwwKVwiKTtcclxuICAgIHZhciBncmFkaWVudEZpbGwyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIDIwMCk7XHJcbiAgICBncmFkaWVudEZpbGwyLmFkZENvbG9yU3RvcCgwLCBcInJnYmEoMjM3LDExLDE0LDEpXCIpO1xyXG4gICAgZ3JhZGllbnRGaWxsMi5hZGRDb2xvclN0b3AoMSwgXCJyZ2JhKDY1LDEwLDIwLDEpXCIpO1xyXG4gICAgdmFyIGNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICAvLyBUaGUgdHlwZSBvZiBjaGFydCB3ZSB3YW50IHRvIGNyZWF0ZVxyXG4gICAgICB0eXBlOiAnbGluZScsXHJcblxyXG4gICAgICAvLyBUaGUgZGF0YSBmb3Igb3VyIGRhdGFzZXRcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIC8vbGFiZWxzOiBbICcyMiBKYW4nLCcyMyBKYW4nLCcyNCBKYW4nLCcyNSBKYW4nLCcyNiBKYW4nLCcyNyBKYW4nLCcyOCBKYW4nLCcyOSBKYW4nLCczMCBKYW4nLCczMSBKYW4nLCcwMSBGZWInLCcwMiBGZWInLCcwMyBGZWInLCcwNCBGZWInXSxcclxuICAgICAgICBsYWJlbHM6IFsgJzMwIEphbicsJzMxIEphbicsJzAxIEZlYicsJzAyIEZlYicsJzAzIEZlYicsJzA0IEZlYicsJzA1IEZlYiddLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgZGF0YTogWzIwLjEyLDE1LjE0LDEwLDU1LDIwLDE1LDEwXSxcclxuICAgICAgICAgIGJvcmRlcldpZHRoOiA1LFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjYmJiOGI1JyxcclxuICAgICAgICAgIHBvaW50U3R5bGU6J2NpcmNsZScsXHJcbiAgICAgICAgICBob3ZlckJvcmRlcldpZHRoOjIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdyYWRpZW50RmlsbCxcclxuICAgICAgICAgIGhpdFJhZGl1czoxMFxyXG4gICAgICAgIH1dXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZ28gaGVyZVxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogNzAsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sdGlwczp7XHJcbiAgICAgICAgICB0aXRsZUZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgIHRpdGxlRm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgYm9keUZvbnRGYW1pbHk6XCInVG9reW90cmFpbCcsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgIGJvZHlGb250U2l6ZTogMTEsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdyYWRpZW50RmlsbDIsXHJcbiAgICAgICAgICBkaXNwbGF5Q29sb3JzOiBmYWxzZSxcclxuICAgICAgICAgIGNhcmV0U2l6ZTogOCxcclxuICAgICAgICAgIGNvcm5lclJhZGl1czogMCxcclxuICAgICAgICAgIHhQYWRkaW5nOiAxMSxcclxuICAgICAgICAgIHlQYWRkaW5nOiAxMSxcclxuICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICBsYWJlbDogZnVuY3Rpb24odG9vbHRpcEl0ZW0sIGRhdGEpIHtcclxuICAgICAgICAgICAgICB2YXIgZGF0YXNldCA9IGRhdGFbJ2RhdGFzZXRzJ11bMF07XHJcbiAgICAgICAgICAgICAgdmFyIGFtb3VudCA9IGRhdGFzZXRbJ2RhdGEnXVt0b29sdGlwSXRlbVsnaW5kZXgnXV07XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGFtb3VudCArICckJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NhbGVzOntcclxuICAgICAgICAgIHhBeGVzOlt7XHJcbiAgICAgICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgxMzUsIDEzNSwgMTM1LCAwLjMpJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL2NhYmluZXQgZGV0YWlscyBjaGFydFxyXG4gIGlmKCQoXCIjZGV0YWlsc0NhcnRcIikubGVuZ3RoICE9PSAwKXtcclxuICAgIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsc0NhcnQnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY3R4LndpZHRoID0gMzAwO1xyXG4gICAgY3R4LmhlaWdodCA9IDMwMDtcclxuICAgIHZhciBjaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgLy8gVGhlIHR5cGUgb2YgY2hhcnQgd2Ugd2FudCB0byBjcmVhdGVcclxuICAgICAgdHlwZTogJ2RvdWdobnV0JyxcclxuXHJcbiAgICAgIC8vIFRoZSBkYXRhIGZvciBvdXIgZGF0YXNldFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBbJ0ludmVzdGVkJywgJ1dpdGhkcmF3YWwnLCAnUHJvZml0JywgJ1JlZi5jb21taXNzaW9uJyxdLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgZGF0YTogWzE1MCwxNyw1MCwyNV0sXHJcbiAgICAgICAgICBib3JkZXJXaWR0aDogMCxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAnIzQxMGExNCcsXHJcbiAgICAgICAgICAgICcjYmJiOGI1JyxcclxuICAgICAgICAgICAgJyNlZDBiMGUnLFxyXG4gICAgICAgICAgICAnIzZkNjI1YycsXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfV1cclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBnbyBoZXJlXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA1MCxcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvb2x0aXBzOntcclxuICAgICAgICAgIHRpdGxlRm9udEZhbWlseTogXCInUm9ib3RvJywgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgdGl0bGVGb250U2l6ZTogMTIsXHJcbiAgICAgICAgICBib2R5Rm9udEZhbWlseTpcIidUb2t5b3RyYWlsJywgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgYm9keUZvbnRTaXplOiAxMSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZ3JhZGllbnRGaWxsMixcclxuICAgICAgICAgIGRpc3BsYXlDb2xvcnM6IGZhbHNlLFxyXG4gICAgICAgICAgY2FyZXRTaXplOiA4LFxyXG4gICAgICAgICAgY29ybmVyUmFkaXVzOiAwLFxyXG4gICAgICAgICAgeFBhZGRpbmc6IDExLFxyXG4gICAgICAgICAgeVBhZGRpbmc6IDExLFxyXG4gICAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbih0b29sdGlwSXRlbSwgZGF0YSkge1xyXG4gICAgICAgICAgICAgIHZhciBkYXRhc2V0ID0gZGF0YVsnZGF0YXNldHMnXVswXTtcclxuICAgICAgICAgICAgICB2YXIgYW1vdW50ID0gZGF0YXNldFsnZGF0YSddW3Rvb2x0aXBJdGVtWydpbmRleCddXTtcclxuICAgICAgICAgICAgICByZXR1cm4gYW1vdW50ICsgJyQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmKCQoJy5maXJzdC1zY2VuZScpLmxlbmd0aCAhPT0gMCl7XHJcbiAgICB2YXIgc21va2UgPSBuZXcgSW1hZ2UoKTtcclxuc21va2Uuc3JjID0gJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE1Mzg4L3Ntb2tlLnBuZyc7XHJcblxyXG4kLmZuLmVtaXR0ZXIgPSBmdW5jdGlvbihvcHRzKXtcclxuICB2YXIgcGFydGljbGVzID0gW107XHJcbiAgdmFyIGNhbnZhc2VzID0gW107XHJcblxyXG4gIHZhciBwYXJ0aWNsZSA9IGZ1bmN0aW9uKGNhbnZhcyl7XHJcbiAgICB2YXIgeCwgeSwgc2l6ZSwgc3BlZWRYLCBzcGVlZFksIG9wYWNpdHk7XHJcbiAgICByZXNldCgpO1xyXG4gICAgXHJcbiAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmKG9wYWNpdHkgPiAwKXtcclxuICAgICAgICBvcGFjaXR5IC09IChNYXRoLnJhbmRvbSgpIC8gb3B0cy5zcGVlZC5mYWRlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYob3BhY2l0eSA8PSAwKXtcclxuICAgICAgICByZXNldCgpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBzcGVlZFggLT0gTWF0aC5yYW5kb20oKSAvIG9wdHMuc3BlZWQuYWNjZWxlcmF0aW9uO1xyXG4gICAgICBzcGVlZFkgLT0gTWF0aC5yYW5kb20oKSAvIG9wdHMuc3BlZWQuYWNjZWxlcmF0aW9uO1xyXG4gICAgICB4ICs9IHNwZWVkWDtcclxuICAgICAgeSArPSBzcGVlZFk7XHJcbiAgICAgIHNpemUgKz0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgZHJhd1BhcnRpY2xlKHgsIHksIHNpemUsIG9wYWNpdHkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBkcmF3UGFydGljbGUoeCwgeSwgc2l6ZSwgb3BhY2l0eSl7XHJcbiAgICAgIGNhbnZhcy5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XHJcbiAgICAgIGNhbnZhcy5kcmF3SW1hZ2Uoc21va2UsIDAsIDAsIG9wdHMuc2l6ZSwgb3B0cy5zaXplLCB4LCB5LCBzaXplLCBzaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldCgpe1xyXG4gICAgICB4ID0gb3B0cy54O1xyXG4gICAgICB5ID0gb3B0cy55O1xyXG4gICAgICBzaXplID0gb3B0cy5zaXplO1xyXG4gICAgICBzcGVlZFggPSBNYXRoLnJhbmRvbSgpICogb3B0cy5zcGVlZC54O1xyXG4gICAgICBzcGVlZFkgPSBNYXRoLnJhbmRvbSgpICogb3B0cy5zcGVlZC55O1xyXG4gICAgICBvcGFjaXR5ID0gTWF0aC5yYW5kb20oKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgY2FudmFzID0gZnVuY3Rpb24oZWwpe1xyXG4gICAgdmFyIGNhbnZhcyA9IGVsWzBdLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgY2FudmFzLndpZHRoID0gZWwud2lkdGgoKTtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBlbC5oZWlnaHQoKTtcclxuXHJcbiAgICBmb3IodmFyIGMgPSAwOyBjIDwgb3B0cy5wYXJ0aWNsZXM7IGMrKyl7XHJcbiAgICAgIHBhcnRpY2xlcy5wdXNoKG5ldyBwYXJ0aWNsZShjYW52YXMpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24oKXtcclxuICAgICAgY2FudmFzLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICAkKHRoaXMpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgIGNhbnZhc2VzLnB1c2gobmV3IGNhbnZhcygkKHRoaXMpKSk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlcigpe1xyXG4gICAgY2FudmFzZXMuZm9yRWFjaChmdW5jdGlvbihjYW52YXMpe1xyXG4gICAgICBjYW52YXMuY2xlYXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHBhcnRpY2xlcy5mb3JFYWNoKGZ1bmN0aW9uKHBhcnRpY2xlKXtcclxuICAgICAgcGFydGljbGUudXBkYXRlKCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlbmRlcjogcmVuZGVyXHJcbiAgfVxyXG59O1xyXG5cclxuICAgICQoJyNtYWluLXNtb2tlJykuZW1pdHRlcih7XHJcbiAgICAgIHg6IDUwMCxcclxuICAgICAgeTogMCxcclxuICAgICAgc2l6ZTogNzAsXHJcbiAgICAgIHBhcnRpY2xlczogMjAwLFxyXG4gICAgICBzcGVlZDoge1xyXG4gICAgICAgIHg6IC0xLFxyXG4gICAgICAgIHk6IDMsXHJcbiAgICAgICAgZmFkZTogMTUwLFxyXG4gICAgICAgIGFjY2VsZXJhdGlvbjogMTMwMFxyXG4gICAgICB9XHJcbiAgICB9KS5yZW5kZXIoKTtcclxuICAgICQoJyNyb2FkLXNtb2tlJykuZW1pdHRlcih7XHJcbiAgICAgIHg6IDUwMCxcclxuICAgICAgeTogMCxcclxuICAgICAgc2l6ZTogNzAsXHJcbiAgICAgIHBhcnRpY2xlczogMjAwLFxyXG4gICAgICBzcGVlZDoge1xyXG4gICAgICAgIHg6IC0xLFxyXG4gICAgICAgIHk6IDMsXHJcbiAgICAgICAgZmFkZTogMTUwLFxyXG4gICAgICAgIGFjY2VsZXJhdGlvbjogMTMwMFxyXG4gICAgICB9XHJcbiAgICB9KS5yZW5kZXIoKTtcclxuXHJcbiAgfVxyXG59KSgpO1xyXG5cclxuIl19
