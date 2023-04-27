const scrollAmount = 500;
const pictures = document.getElementById("images");
let leftArrow = document.querySelector(".scroll-arrow.left");
let rightArrow = document.querySelector(".scroll-arrow.right");

let scrollPosition = 0;
leftArrow.addEventListener("click", () => {
  scrollPosition -= scrollAmount;
  pictures.scrollTo({
    top: 0,
    left: scrollPosition,
    behavior: "smooth"
  });
});

rightArrow.addEventListener("click", () => {
  scrollPosition += scrollAmount;
  pictures.scrollTo({
    top: 0,
    left: scrollPosition,
    behavior: "smooth"
  });
});




// Get the button element
var scrollBtn = document.getElementById("scroll-to-top");

// When the user clicks on the button, scroll back to the top of the page smoothly
scrollBtn.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default behavior of the link

  // Scroll smoothly to the top of the page over 500 milliseconds
  var scrollToTop = window.setInterval(function() {
    var position = window.pageYOffset;
    if (position > 0) {
      window.scrollTo(0, position - 50);
    } else {
      window.clearInterval(scrollToTop);
    }
  }, 30); // scroll speed in milliseconds (60 fps)
});


