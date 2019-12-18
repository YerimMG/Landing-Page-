function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 19.320499, lng: -99.152603 },
    zoom: 8
  });
  var marker = new google.maps.Marker({
    position: { lat: 19.320499, lng: -99.152603 },
    map: map,
    title: 'Golden Gate Bridge'
  });
}

window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    this.document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    this.document.querySelector('#navbar').style.opacity = 1;
  }
});

$(document).ready(function() {
  // Add smooth scrolling to all links
  $('a').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    } // End if
  });
});
