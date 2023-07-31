// Nav mymenu selections
const mymenu = document.querySelector("#my-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// arrow selection
const scrollUp = document.querySelector("#scroll-up");
const scrollDown = document.querySelector("#scroll-down");
// nav link selection
const navLink = document.querySelectorAll(".nav-link");

// menu listener
mymenu.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close nav menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollDown.addEventListener("click", () => {
  window.scrollTo(
    0, document.body.scrollHeight
    ,{behavior: "smooth"}
  );
});

//scroll to bottom functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});