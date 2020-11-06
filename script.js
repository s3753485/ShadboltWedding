		// When the user scrolls the page, execute myFunction
		            window.onscroll = function() {
		                myFunction()
		            };
		
		            // Get the navbar
		            var navbar = document.getElementById("navbar");
		
		            // Get the offset position of the navbar
		            var sticky = navbar.offsetTop;
		
		            // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
		            function myFunction() {
		                if (window.pageYOffset >= sticky) {
		                    navbar.classList.add("sticky")
		                } else {
		                    navbar.classList.remove("sticky");
		                }
		            }
				
						            var slideIndex = 0;
				showSlides();
				
				function showSlides() {
				  var i;
				  var slides = document.getElementsByClassName("mySlides");
				  for (i = 0; i < slides.length; i++) {
				    slides[i].style.display = "none";  
				  }
				  slideIndex++;
				  if (slideIndex > slides.length) {slideIndex = 1}    
				  slides[slideIndex-1].style.display = "block";  
				  setTimeout(showSlides, 5000); // Change image every 2 seconds
				}


/* curator-feed-default-feed-layout */
(function(){
var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
i.src = "https://cdn.curator.io/published/424b27de-a291-4b36-aed6-28fe7971c6d4.js";
e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
})();
