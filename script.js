// Miles Tech Hub Website

// Smooth fade-in animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});

// Welcome message
window.addEventListener("load", () => {
  setTimeout(() => {
    alert("👋 Welcome to Miles Tech Hub!");
  }, 500);
});

// Highlight active navigation link
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});// Animated Counters

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const count = +counter.innerText;

const increment = target / 80;

if(count < target){

counter.innerText = `${Math.ceil(count + increment)}`;

setTimeout(updateCounter,20);

}else{

counter.innerText = target + "+";

}

};

updateCounter();

});// Typing Animation

const words = [
  "Website Development",
  "WhatsApp Bot Deployment",
  "VPN Installation",
  "ICT Support",
  "Social Media Advertising"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (!typingElement) return;

  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex++);
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex--);
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex > currentWord.length) {
    isDeleting = true;
    speed = 1500;
  } else if (isDeleting && charIndex < 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    charIndex = 0;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();// Loading Screen

window.addEventListener("load", () => {

setTimeout(() => {

const loader = document.getElementById("loader");

loader.style.opacity = "0";
loader.style.visibility = "hidden";

}, 2500);

});// Animated Particles

const particlesContainer = document.getElementById("particles");

if (particlesContainer) {

for (let i = 0; i < 40; i++) {

const particle = document.createElement("div");

particle.classList.add("particle");

particle.style.left = Math.random() * 100 + "%";

particle.style.animationDuration =
(Math.random() * 8 + 6) + "s";

particle.style.animationDelay =
(Math.random() * 5) + "s";

particle.style.width =
particle.style.height =
(Math.random() * 6 + 3) + "px";

particlesContainer.appendChild(particle);

}
