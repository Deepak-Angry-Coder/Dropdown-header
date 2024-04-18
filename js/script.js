const menuItem = document.getElementById("features");
const dropdown = document.getElementById("drop_");
const menuItem2 = document.getElementById("company");
const dropdown2 = document.getElementById("drop_2");
const arr_up = document.querySelectorAll(".arw_up");
const arr_dwn = document.querySelectorAll(".arw_dwn");
const menuClose = document.getElementById("menuClose");
const menuOpen = document.getElementById("openMenu");
const mob_nav = document.getElementById("mob_navbar");
const overlay = document.getElementById("overlay");

// for mobile
menuOpen.addEventListener("click", function () {
  mob_nav.style.visibility = "visible";
  mob_nav.style.opacity = 1;
  overlay.style.display = "block";
});

menuClose.addEventListener("click", function () {
  mob_nav.style.visibility = "hidden";
  mob_nav.style.opacity = 0;
  overlay.style.display = "none";
});

const mobMenuItem = document.getElementById("mob_features");
const mobMenuItem2 = document.getElementById("mob_company");
const mb_dropdown1 = document.getElementById("mb_drop");
const mb_dropdown2 = document.getElementById("mb_drop2");
const active1 = document.getElementsByClassName("active1");

mobMenuItem.addEventListener("click", () => {
  mb_dropdown1.classList.toggle("active1");
});

mobMenuItem2.addEventListener("click", () => {
  mb_dropdown2.classList.toggle("active1");
});

menuItem.addEventListener("mouseover", function () {
  dropdown.style.opacity = 1;
});

menuItem.addEventListener("mouseout", function () {
  dropdown.style.opacity = 0;
});

dropdown.addEventListener("mouseover", function () {
  dropdown.style.opacity = 1;
});

dropdown.addEventListener("mouseout", function () {
  dropdown.style.opacity = 0;
});

menuItem2.addEventListener("mouseover", function () {
  dropdown2.style.opacity = 1;
});

menuItem2.addEventListener("mouseout", function () {
  dropdown2.style.opacity = 0;
});

dropdown2.addEventListener("mouseover", function () {
  dropdown2.style.opacity = 1;
});

dropdown2.addEventListener("mouseout", function () {
  dropdown2.style.opacity = 0;
});
