const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

// function handleResize() {
//   if (window.innerWidth >= 1440) {
//     navLinks.classList.remove("hidden");
//   } else if (window.innerWidth <= 370) {
//     navLinks.classList.add("hidden");
//   }
// }

menuIcon.addEventListener("click", () => {
//   if (window.innerWidth <= 370) {
    navLinks.classList.toggle("hidden");
//   }
});

// window.addEventListener("resize", handleResize);
// handleResize();
