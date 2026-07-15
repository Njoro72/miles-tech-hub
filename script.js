// =========================
// Miles Tech Hub Script
// =========================

// Loading Screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        if (loader) {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            setTimeout(() => {
                loader.style.display = "none";
            }, 800);
        }
    }, 1800);
});

// Typing Animation
const words = [
    "Website Development",
    "WhatsApp Bot Deployment",
    "VPN Services",
    "ICT Support",
    "Digital Marketing"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);
    } else {

        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex > currentWord.length) {

        deleting = true;
        speed = 1500;

    } else if (deleting && charIndex < 0) {

        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        charIndex = 0;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// Animated Particles

const particles = document.getElementById("particles");

if (particles) {

    for (let i = 0; i < 40; i++) {

        const particle = document.createElement("div");

        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "%";

        particle.style.animationDuration =
            (Math.random() * 8 + 6) + "s";

        particle.style.animationDelay =
            (Math.random() * 5) + "s";

        const size = Math.random() * 6 + 3;

        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particles.appendChild(particle);

    }

}

// Smooth Fade-In Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});

// Animated Counters

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const update = () => {

                const increment = Math.ceil(target / 80);

                count += increment;

                if (count < target) {

                    counter.textContent = count;

                    requestAnimationFrame(update);

                } else {

                    counter.textContent = target + "+";
                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => counterObserver.observe(counter));

// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// Contact Form Success Message

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", () => {

        alert("✅ Thank you for contacting Miles Tech Hub! Your message has been submitted.");

    });

}