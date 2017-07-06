
 $(document).ready(function(){
    
		
        //Smoth Scroll
         jQuery(function() {
            jQuery('a[href*="#"]:not([href="#"])').on('click',function(e) {
                var headheight= jQuery("header").height();
              if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                  jQuery('html, body').animate({
                    scrollTop: target.offset().top-100
                  }, 1000);
                  return false;
                }
              }
            });
          });
         
     
                  $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
                items:4,
        });
     

    })

