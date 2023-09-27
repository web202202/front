// main text
const spanEl = document.querySelector("main h2 span");
const txtArr = ['Sunrin HighSchool Student', 'Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
let index = 0;
let currentTxt = txtArr[index].split("");
function writeTxt() {
    spanEl.textContent += currentTxt.shift();
    if (currentTxt.length !== 0) {
        setTimeout(writeTxt, Math.floor(Math.random() * 100))
    } else {
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 3000);
    }
}
function deleteTxt() {
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");
    if (currentTxt.length !== 0) {
        setTimeout(deleteTxt, Math.floor(Math.random() * 100))
    } else {
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
    }
}
writeTxt();

// menu active
(function () {
    const headerEl = document.querySelector("header");

    window.addEventListener("scroll", function () {
        this.requestAnimationFrame(scrollCheck);
    });
    function scrollCheck() {
        const browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
        if (browserScrollY > 0) {
            headerEl.classList.add('active');
        } else {
            headerEl.classList.remove('active');
        }
    }
})();

// menu move
(function () {
    const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");

    for (let i = 0; i < scrollMoveEl.length; i++) {
        scrollMoveEl[i].addEventListener("click", function () {
            animationMove(this.dataset.target);
        });
    }

    function animationMove(selector) {
        const target = document.querySelector(selector);
        const browserScrollY = window.pageYOffset;
        const targetScrollY = target.getBoundingClientRect().top + browserScrollY;
        window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    }

})();
