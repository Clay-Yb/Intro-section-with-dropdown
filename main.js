// Nav
const navMenu = document.querySelector(".nav_menu");
const navToggle = document.querySelector(".nav_toggle");
const navClose = document.querySelector(".nav_close");
const body = document.body;
const navLink = document.querySelectorAll(".nav_link_close");
const dropdownLink = document.querySelectorAll(".dropdown_link");

if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show_menu");
		body.style.backgroundColor = "rgba(0,0,0,0.4)";
	});
}

if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show_menu");
		body.style.backgroundColor = "transparent";
	});
}

function removeMenu() {
	navMenu.classList.remove("show_menu");
	body.style.backgroundColor = "transparent";
}

navLink.forEach((n) => n.addEventListener("click", removeMenu));
dropdownLink.forEach((n) => n.addEventListener("click", removeMenu));

// dropdown
const dropdownList = document.querySelectorAll(".dropdown_list");
const dropdownHeader = document.querySelectorAll(".dropdown_header");

dropdownHeader.forEach((n, i) => {
	n.addEventListener("click", () => {
		dropdownList[i].classList.toggle("show_dropdown");
		dropdownHeader[i].classList.toggle("open_dropdown");
	});
});
