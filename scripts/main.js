const navbar = document.getElementById("navbar");
const scroll = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
    navbar.style.transform = "translateY(-60px)";

    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 600);
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};

// Smooth Scrolling
$("#navbar, a, .btn").on("click", function (e) {
  if (this.hash != "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

// TYPING ANIMATION
var fullname = document.getElementById("fullname");
const Typewriter = function (txtElement, words, wait = 300) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
};

// Type Method
Typewriter.prototype.type = function () {
  // Current index of word
  const current = this.wordIndex % this.words.length;
  // Get full text of current word
  const fulltxt = this.words[current];

  this.txt = fulltxt.substring(0, this.txt.length + 1);

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // If word is complete
  setTimeout(() => this.type(), 200);
  //   fullname.style.transform = "translateX(0)";
};

// init on Dom Load
document.addEventListener("DOMContentLoaded", init);

// init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // init TypeWriter
  new Typewriter(txtElement, words, wait);
  //   alert(fullname);
  //   fullname.style.transform = "translateX(-1000px)";
}
