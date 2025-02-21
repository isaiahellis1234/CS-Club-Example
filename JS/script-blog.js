const scrollToTopButton = document.getElementById("scrollToTop");

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scrolling option
});
