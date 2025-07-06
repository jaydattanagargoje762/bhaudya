// Typing animation for job title
const text = "Frontend Developer | UI/UX Designer | Freelancer";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeText() {
  typingElement.innerHTML = text.slice(0, index++);
  if (index <= text.length) {
    setTimeout(typeText, 80);
  } else {
    setTimeout(() => {
      index = 0;
      typeText();
    }, 2000);
  }
}
typeText();

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Add pop animation to nav links and buttons
document.querySelectorAll('nav a, button').forEach(el => {
  el.addEventListener("click", function () {
    this.classList.add("pop-animate");
    setTimeout(() => this.classList.remove("pop-animate"), 300);
  });
});
