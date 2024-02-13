// scroll.js

function scrollToAboutUs() {
  // Get the offset position of the target element
  var targetElement = document.getElementById("about-us");
  var targetOffset = targetElement.offsetTop;

  // Adjust for the fixed header height and add some padding
  var headerHeight = document.querySelector('.header-area').offsetHeight;
  var padding = 20; // Adjust this value as needed
  var scrollToPosition = targetOffset - headerHeight + padding;

  // Scroll to the adjusted position
  window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
  });
}
