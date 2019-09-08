/*Optimize the sections, so instead of declaring each one of them, try to sections.forEach*/
var sections = document.querySelectorAll("#table-scroll ul li a");

sections[0].addEventListener("click", function() {
  smoothScroll("#section0", 1000);
});

sections[1].addEventListener("click", function() {
  smoothScroll("#section1", 1000);
});

sections[2].addEventListener("click", function() {
  smoothScroll("#section2", 1000);
});

sections[3].addEventListener("click", function() {
  smoothScroll("#section3", 1000);
});

sections[4].addEventListener("click", function() {
  smoothScroll("#section4", 1000);
});
