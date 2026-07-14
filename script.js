document.addEventListener("DOMContentLoaded", function () {

  // ==========================
  // Typing Animation
  // ==========================
  const words = [
    "Website Development",
    "WhatsApp Bot Deployment",
    "VPN Solutions",
    "ICT Support",
    "Digital Marketing"
  ];

  const typing = document.getElementById("typing");

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {
      typing.textContent = currentWord.substring(0, charIndex);
      charIndex++;

      if (charIndex > currentWord.length) {
        deleting = true;
        setTimeout(typeEffect, 1500);
        return;
      }

    } else {

      typing.textContent = currentWord.substring(0, charIndex);
      charIndex--;

      if (charIndex < 0) {
        deleting = false;
        wordIndex++;

        if (wordIndex >= words.length) {
          wordIndex = 0;
        }
      }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
  }

  typeEffect();

  // ==========================
  // Animated Counters
  // ==========================
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {

    const target = Number(counter.getAttribute("data-target"));

    let count = 0;

    const speed = target / 100;

    function updateCounter() {

      count += speed;

      if (count < target) {

        counter.textContent = Math.floor(count);

        requestAnimationFrame(updateCounter);

      } else {

        counter.textContent = target;

      }

    }

    updateCounter();

  });

  // ==========================
  // Scroll Reveal Animation
  // ==========================
  const revealItems = document.querySelectorAll("section, .card");

  const observer = new IntersectionObserver(function(entries){

    entries.forEach(entry => {

      if(entry.isIntersecting){

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

      }

    });

  },{
    threshold:0.2
  });

  revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "0.6s ease";

    observer.observe(item);

  });

  // ==========================
  // Smooth Scrolling
  // ==========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if(target){

        target.scrollIntoView({

          behavior:"smooth"

        });

      }

    });

  });

});