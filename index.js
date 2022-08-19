$(document).ready(function(){
  $('.tabs').tabs();
  $('.dropdown-trigger').dropdown({
      constrainWidth: false,
      coverTrigger: false
  });
  $('.tooltipped').tooltip({
      margin: -10
  });
  $('.modal').modal();

  const mouseWheel = document.querySelector('.box-scroll');

  mouseWheel.addEventListener('wheel', function(e) {
      const race = 15; // How many pixels to scroll
  
      if (e.deltaY > 0) // Scroll right
          mouseWheel.scrollLeft += race;
      else // Scroll left
          mouseWheel.scrollLeft -= race;
          e.preventDefault();
  });

});

var interesesSeleccionados = ['politica', 'deporte', 'espectaculo'];

var days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var d = new Date();
var dayName = days[d.getDay()];
var monthName = months[d.getMonth()];
var strDate = dayName + ' ' + d.getDate() + ', ' + monthName + ' ' + d.getFullYear();
var tooltipElDia = $('#elDiaTooltip');
tooltipElDia.attr('data-tooltip', strDate);

$( ".categorie__button" ).click(function() {
  var id = $(this).attr('id');

  if($("#"+id).hasClass( "categorie_button__default" )){
      $("#"+id).removeClass("categorie_button__default").addClass("categorie_button__selected");
      interesesSeleccionados.push(id);
  }else{
      $("#"+id).removeClass("categorie_button__selected").addClass("categorie_button__default");
      let index = interesesSeleccionados.indexOf(id);
      if (index > -1) {
          interesesSeleccionados.splice(index, 1);
      }
  }
});
/* ================ ULTIMAS 24HS=====================*/

var x = $(".one h1").offset();
var one = $(".one").width();
var para = $(".one h1").width();
var right = one - (x.left + para);
var twoOffset = $(".two h1").offset();
var twoLeftOffset = twoOffset.left - one;
var firstLine = twoLeftOffset + right;
var leftPos = para + x.left;


var controller = new ScrollMagic.Controller();

var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			.to("#slideContainer", 1,   {x: "-75%"})

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "500%"
			})
		  .setPin("#pinContainer")
			.setTween(wipeAnimation)
			.addTo(controller);

   var horizontal = new ScrollMagic.Scene({
        offset: 50,
        duration: 300,
       // reverse: false
      }).setTween(".horizontal-line", {width: firstLine}) // trigger a TweenMax.to tween
        // .addIndicators()
        .addTo(controller);

  /* ================ CARD VIDEO =====================*/

  ;(function(window){

    var
      // Is Modernizr defined on the global scope
      Modernizr = typeof Modernizr !== "undefined" ? Modernizr : false,
  
      // whether or not is a touch device
      isTouchDevice = Modernizr ? Modernizr.touch : !!('ontouchstart' in window || 'onmsgesturechange' in window),
  
      // Are we expecting a touch or a click?
      buttonPressedEvent = ( isTouchDevice ) ? 'touchstart' : 'click',
  
      // List of all animation/transition properties
      // with its animationEnd/transitionEnd event
      animationEndEventNames = {
        'WebkitAnimation' : 'webkitAnimationEnd',
        'OAnimation' : 'oAnimationEnd',
        'msAnimation' : 'MSAnimationEnd',   
        'animation' : 'animationend'
      },
  
      transitionEndEventNames = {
        'WebkitTransition' : 'webkitTransitionEnd',
        'OTransition' : 'oTransitionEnd',
        'msTransition' : 'MSTransitionEnd',
        'transition' : 'transitionend'
      },
  
      Effeckt = function() {
        this.init();
      };
  
    // Current version.
    Effeckt.version = '0.0.1';
  
    // Initialization method
    Effeckt.prototype.init = function() {
      this.buttonPressedEvent = buttonPressedEvent;
  
      //event trigger after animation/transition end.
      this.transitionEndEventName = Modernizr ? transitionEndEventNames[Modernizr.prefixed('transition')] : getTransitionEndEventNames();
      this.animationEndEventName  = Modernizr ? animationEndEventNames[Modernizr.prefixed('animation')] : getAnimationEndEventNames();
      this.transitionAnimationEndEvent = this.animationEndEventName + ' ' + this.transitionEndEventName;
    };
  
    Effeckt.prototype.getViewportHeight = function() {
  
      var docElement = document.documentElement,
        client = docElement['clientHeight'],
        inner = window['innerHeight'];
  
      if( client < inner )
        return inner;
      else
        return client;
    };
  
    // Get all the properties for transition/animation end
    function getTransitionEndEventNames() {
      return _getEndEventNames( transitionEndEventNames );
    }
  
    function getAnimationEndEventNames() {
      return _getEndEventNames( animationEndEventNames );
    }
  
    function _getEndEventNames(obj) {
      var events = [];
  
      for ( var eventName in obj ) {
        events.push( obj[ eventName ] );
      }
  
      return events.join(' ');
    }
  
    // Creates a Effeckt object.
    window.Effeckt = new Effeckt();
  
  })(this);
  
  
  /*!
   * captions.js
   *
   * author: Effeckt.css
   *
   * Licensed under the MIT license
   */
  
  var effecktCaptions = {
  
    init: function() {
      this.bindUIActions();
    },
  
    bindUIActions: function() {
      var self = this,
          v = document.getElementsByTagName("video")[0];
  
      $('[data-effeckt-type]').on('click mouseover mouseout touchstart', function(event) {
        self.activateCaptions(this);
  
        event.preventDefault();
        console.log(event.type);
  
        if(this.classList.contains('active')) {
          v.play();
        } else {
          v.pause();
        }
      });
    },
  
    activateCaptions: function(el) {
      var activeClass = 'active';
  
      if (document.documentElement.classList) {
        el.classList.toggle(activeClass);
      } else {
        var $caption = $(el);
        $caption.toggleClass(activeClass);
      }
    }
  };
  
  effecktCaptions.init();

  