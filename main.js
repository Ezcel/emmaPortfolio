// var typed= new Typed(".text", {
// 	strings: ["Graphic Designer", "Content Creator", "Video Editor", "Creative Director"],
// 	typeSpeed: 100,
// 	backSpeed: 100,
// 	backDelay: 1000,
// 	loop: true
// });

const menu = document.querySelector(".navbar");
const hamburger= document.querySelector("#hamburger");
const closeIcon= document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
