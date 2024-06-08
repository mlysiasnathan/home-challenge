
(function() {
  "use strict";
// =====ALL OF THIS CAN BE DONE USING CSS ONLY BUT THE CHALLENGE REQUIRED JS=====
   let galleryItems = document.querySelectorAll(".gallery-item");
   let glassEffects = document.querySelectorAll(".glass");
   galleryItems.forEach(galleryItem => {
       galleryItem.addEventListener("mouseover", event => {
           galleryItem.style.cursor = "pointer";
           galleryItem.style.filter = "grayscale(100%)";
       });
       galleryItem.addEventListener("mouseout", event => {
           galleryItem.style.filter = "grayscale(0)";
       });
   });
    glassEffects.forEach(glassEffect => {
        glassEffect.addEventListener("mouseover", event => {
            glassEffect.style.transition = "all 0.7s ease";
            glassEffect.style.transform = "scale(1.0, 1.03)";
            glassEffect.style.filter = "blur(5px)";
            glassEffect.style.backgroundColor = "black";
            glassEffect.style.opacity = "0.4";
        });
        glassEffect.addEventListener("mouseout", event => {
            glassEffect.style.transform = "scale(1.0, 1.0)";
            glassEffect.style.filter = "blur(0)";
            glassEffect.style.backgroundColor = "inherit";
            glassEffect.style.opacity = "1";
        });
    });

})()