let navElements = document.querySelectorAll('.nav');
navElements.forEach(element => {
    element.addEventListener('click', () => {
        navElements.forEach(item => item.classList.remove('active'));
        element.classList.add('active');
    });
});
let type = new Typed(".auto-type", {
    strings: ["Designer", "Developer", "Freelancer", "Photographer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
})