// Loader

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

setTimeout(() => {
loader.style.opacity = "0";

setTimeout(() => {
loader.style.display = "none";
}, 500);

}, 1200);

});


// Typing Animation

const typingElement = document.querySelector(".typing-text");

const words = [
"Frontend Developer",
"UI / UX Designer",
"Freelancer",
"Web Creator",
"Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

const currentWord = words[wordIndex];

if(!deleting){

typingElement.textContent =
currentWord.substring(0, charIndex + 1);

charIndex++;

if(charIndex === currentWord.length){

deleting = true;

setTimeout(typeEffect, 1500);

return;
}

}else{

typingElement.textContent =
currentWord.substring(0, charIndex - 1);

charIndex--;

if(charIndex === 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){
wordIndex = 0;
}

}

}

setTimeout(
typeEffect,
deleting ? 60 : 120
);

}

typeEffect();


// Scroll Reveal

const revealElements = document.querySelectorAll(
".section,.service-card,.project-card,.stat-box,.skill"
);

const revealObserver = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0)";

}

});

},

{
threshold:0.15
}

);

revealElements.forEach(el => {

el.style.opacity = "0";

el.style.transform =
"translateY(60px)";

el.style.transition =
"all 0.8s ease";

revealObserver.observe(el);

});


// Dark Mode

const themeBtn =
document.querySelector(".theme-btn");

let darkMode = true;

themeBtn.addEventListener("click", () => {

if(darkMode){

document.documentElement.style.setProperty(
"--bg",
"#f8fafc"
);

document.documentElement.style.setProperty(
"--text",
"#111827"
);

document.documentElement.style.setProperty(
"--card",
"#ffffff"
);

document.documentElement.style.setProperty(
"--glass",
"rgba(0,0,0,.04)"
);

themeBtn.innerHTML =
'<i class="ri-sun-line"></i>';

}else{

document.documentElement.style.setProperty(
"--bg",
"#050816"
);

document.documentElement.style.setProperty(
"--text",
"#ffffff"
);

document.documentElement.style.setProperty(
"--card",
"#0f172a"
);

document.documentElement.style.setProperty(
"--glass",
"rgba(255,255,255,.05)"
);

themeBtn.innerHTML =
'<i class="ri-moon-line"></i>';

}

darkMode = !darkMode;

});


// Navbar Blur Effect

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

navbar.style.background =
"rgba(0,0,0,.65)";

navbar.style.boxShadow =
"0 10px 30px rgba(0,0,0,.25)";

}else{

navbar.style.background =
"rgba(0,0,0,.30)";

navbar.style.boxShadow =
"none";

}

});


// Smooth Button Hover Glow

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(btn => {

btn.addEventListener("mousemove", e => {

const rect =
btn.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

btn.style.setProperty(
"--x",
x + "px"
);

btn.style.setProperty(
"--y",
y + "px"
);

});

});


// Counter Animation

const counters =
document.querySelectorAll(".stat-box h4");

const counterObserver =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

const counter =
entry.target;

const target =
parseInt(counter.innerText);

let count = 0;

const update = () => {

const increment =
target / 60;

count += increment;

if(count < target){

counter.innerText =
Math.floor(count) + "+";

requestAnimationFrame(update);

}else{

counter.innerText =
target + "+";

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter => {
counterObserver.observe(counter);
});


// Floating Hero Image

const heroImage =
document.querySelector(".hero-image img");

let angle = 0;

function floating(){

angle += 0.02;

heroImage.style.transform =
`translateY(${Math.sin(angle)*15}px)`;

requestAnimationFrame(floating);

}

floating();


// Mouse Glow Effect

document.addEventListener(
"mousemove",
e => {

const glow =
document.querySelector(".glow");

if(glow){

glow.style.left =
e.clientX - 220 + "px";

glow.style.top =
e.clientY - 220 + "px";

}

}
);

console.log(
"Premium Portfolio Loaded Successfully 🚀"
);