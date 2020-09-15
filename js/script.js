$(function(){
  var yearDate = new Date().getFullYear();
  $('#year').html(yearDate);
});

$(window).scroll(function() {    
    var scrollpos = $(window).scrollTop();

    /*if (scrollpos > 200) {
        $('.nav-bar').css('background-color', 'rgba(15, 19, 25, 0.90)');
    } else {
        $('.nav-bar').css('background-color', 'rgba(0, 0, 0, 0.25)');
    }*/

    $('.fade-in-scroll').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},400);
                    
            }
            
     }); 

     $('.fade-in-left').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).addClass('fadein-left-animate');
                    
            }
            
     });
});

$(window).on("load", function(){
    $('.main-fullscreen').addClass('fadein-onload');
    $('.nav-bar').addClass('fadein-quickdelay');
    $('.main-title').addClass('fadein-mediumdelay');
    $('.main-breakline').addClass('fadein-mediumdelay');
    $('.main-p').addClass('fadein-longdelay');
    $('.content-container-2').addClass('fadein-longdelay');
    $('#nav-menu-button').click(function() {
       $('#mobile-nav-overlay').fadeIn('overlay-show');
       $('#nav-menu-button').attr('aria-expanded', 'true');
    });

    $('#nav-close-button').click(function() {
       $('#mobile-nav-overlay').fadeOut('overlay-show');
       $('#nav-menu-button').attr('aria-expanded', 'false');
    });

    $('#mobile-menu ul li a').click(function() {
       $('#mobile-nav-overlay').fadeOut('overlay-show');
       $('#nav-menu-button').attr('aria-expanded', 'false');
    });
    
});

/*$(document).ready(function() {
    $(window).scroll( function(){
    
        $('.fade-in-scroll').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},400);
                    
            }
            
        }); 

        $('.fade-in-left').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).addClass('fadein-left-animate');
                    
            }
            
        });
    
    });
    
});*/

$(function(){
  var email = 'enquiries';
  $('#enquiries').html(email);
});

function filterPath(string) {
  return string
    .replace(/^\//, '')
    .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
    .replace(/\/$/, '');
}

var locationPath = filterPath(location.pathname);
$('a[href*="#"]').each(function () {
  var thisPath = filterPath(this.pathname) || locationPath;
  var hash = this.hash;
  if ($("#" + hash.replace(/#/, '')).length) {
    if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
      var $target = $(hash), target = this.hash;
      if (target) {
        $(this).click(function (event) {
          event.preventDefault();
          $('html, body').animate({scrollTop: $target.offset().top}, 1000, function () {
            location.hash = target; 
            $target.focus();
            if ($target.is(":focus")){
              return false;
            }else{
              $target.attr('tabindex','-1');
              $target.focus();
            };
          });       
        });
      }
    }
  }
});
