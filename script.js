"use strict";

const navbar = document.querySelector(".nav");
const logo = document.querySelector(".logo");
const linkWrapper = document.querySelector(".link-wrapper");
const menuIcon = document.querySelector(".menu-icon");
const links = document.querySelector(".link");

window.onscroll = function () {
	scrollFunction();
};

const scrollFunction = () => {
	if (
		document.body.scrollTop > 200 ||
		document.documentElement.scrollTop > 200
	) {
		document.querySelector(".main_nav").style.backgroundColor = "white";
		document.querySelector(".heikki").style.color = "black";
		document.querySelector(".link").style.color = "black";
		document.querySelector(".link2").style.color = "black";
		document.querySelector(".link3").style.color = "black";
		document.querySelector(".link4").style.color = "black";
		// document.querySelector(".link5").style.color = "black";
		// document.querySelector(".link6").style.color = "black";
		document.querySelector(".p").style.color = "black";
		document.querySelector(".p2").style.color = "black";
		document.querySelector(".p3").style.color = "black";
		// document.querySelector(".p4").style.color = "black";
		// document.querySelector(".p5").style.color = "black";
	} else {
		document.querySelector(".main_nav").style.backgroundColor = "transparent";
		document.querySelector(".heikki").style.color = "white";
		document.querySelector(".link").style.color = "white";
		document.querySelector(".link2").style.color = "white";
		document.querySelector(".link3").style.color = "white";
		document.querySelector(".link4").style.color = "white";
		// document.querySelector(".link5").style.color = "white";
		// document.querySelector(".link6").style.color = "white";
		document.querySelector(".p").style.color = "white";
		document.querySelector(".p2").style.color = "white";
		document.querySelector(".p3").style.color = "white";
		// document.querySelector(".p4").style.color = "white";
		// document.querySelector(".p5").style.color = "white";
	}
};

//   if (window.innerWidth > 450) {
// 	window.onscroll = function () {
// 		if (window.scrollY >= 600) {
//             document.querySelector(".main_nav").style.backgroundColor = "white";
// 		} else if  (window.scrollY < 600) {
//             document.querySelector(".main_nav").style.backgroundColor = "transparent";
// } else if (window.innerWidth <= 450) {
// 	window.onscroll = function () {
// 		if (window.scrollY >= 400) {
//             document.querySelector(".main_nav").style.backgroundColor = "white";
// 		} else if  (window.scrollY < 400) {
//             document.querySelector(".main_nav").style.backgroundColor = "transparent";
//         };
// 			menuIcon.style.color = "unset";
// 	}
// };

menuIcon.addEventListener("click", toggleMenu);

links.forEach((link) => link.addEventListener("click", toggleMenu));

function toggleMenu() {
	linkWrapper.classList.toggle("show");
}
