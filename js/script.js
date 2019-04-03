"use strict";
(function() {
  // vanilla js (kodilla script)
  var accordionVanillaJS = function() {
    var headers = document.querySelectorAll("#accordion-vanillajs h3");

    var headerClickCallback = function() {
      this.classList.add("active");
      for (var i = 0; i < headers.length; i++) {
        if (headers[i].classList.contains("active") && headers[i] != this) {
          headers[i].classList.remove("active");
        }
      }
    };

    for (var i = 0; i < headers.length; i++) {
      headers[i].addEventListener("click", headerClickCallback);
    }
  };
  accordionVanillaJS();

  // my task - jQuery
  var accordionJQuery = function() {
    $(document).ready(function() {
      $("#accordion-jquery h3").click(function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active");
      });
    });
  };

  accordionJQuery();
})();
