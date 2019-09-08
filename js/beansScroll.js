/*Optimize the sections, so instead of declaring each one of them, try to sections.forEach*/
const sections = document.querySelectorAll("#table-scroll ul li a");

for (let i = 0; i < sections.length; i++) {
  (() => {
    sections[i].addEventListener("click", () => {
      smoothScroll("#section" + i, 1000);
    });
  })();
}
