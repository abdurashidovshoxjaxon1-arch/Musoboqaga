const pilotBtn = document.getElementById("pilot-btn");
const moveNavbar = document.getElementById("navbar");

pilotBtn.addEventListener("click", () => {
  moveNavbar.classList.toggle("open");
  pilotBtn.classList.toggle("close-btn");
});
