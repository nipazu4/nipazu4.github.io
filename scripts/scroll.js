// When the user scrolls the page, execute headerScroll 
window.onscroll = function() {headerScroll()};

// Get the header
var header = document.getElementById("tab");

// Get the offset position of the navbar
var tab-fix = header.offsetTop;

// Add the tab-fix class to the header when you reach its scroll position. Remove "tab-fix" when you leave the scroll position
function headerScroll() {
  if (window.pageYOffset > tab-fix) {
    header.classList.add("tab-fix");
  } else {
    header.classList.remove("tab-fix");
  }
}