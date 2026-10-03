// Welcome message when the website loads
window.addEventListener("load", function () {
    console.log("Miles Tech Hub website loaded successfully!");
});

// Get Started button
const heroButton = document.querySelector(".hero-btn");

if (heroButton) {
    heroButton.addEventListener("click", function () {
        console.log("Visitor clicked Get Started");
    });
}

// Service cards animation
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", function () {
        card.style.transform = "translateY(0)";
    });
});
const counters = document.querySelectorAll(".counter");

counters.forEach(function (counter) {

    const target = Number(counter.getAttribute("data-target"));
    let current = 0;

    const updateCounter = function () {

        const increment = target / 50;

        if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current);
            setTimeout(updateCounter, 30);
        } else {
            counter.textContent = target;
        }
    };

    updateCounter();
});
window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {
        loader.classList.add("hide");
    }, 1200);

});
// Scroll reveal animation
const revealElements = document.querySelectorAll(
    ".about, .stats, .services, .contact, footer"
);

const revealOnScroll = function () {
    revealElements.forEach(function (element) {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("reveal");
            element.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();