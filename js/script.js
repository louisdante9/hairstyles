$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('.left-section').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$('#goTop').on('click', function(e){
  $("html, body").animate({scrollTop: $("#top").offset().top}, 500);
});

// $(document).ready(function(){ 
//   $(window).scroll(function(){ 
//       if ($(this).scrollTop() > 100) { 
//           $('#scroll').fadeIn(); 
//       } else { 
//           $('#scroll').fadeOut(); 
//       } 
//   }); 
//   $('#scroll').click(function(){ 
//       $(".left-section").animate({ scrollTop: 0 }, 600); 
//       return false; 
//   }); 
// });