let $ = require("jquery");
let ScrollMagic = require("scrollmagic");

$(document).ready(function() {
  let controller = new ScrollMagic.Controller();
  let ourScene = new ScrollMagic.Scene({
    triggerElement: "#textimage1"
  })

    .setClassToggle("#textimage1", "fade-in")
    .addTo(controller);
});
