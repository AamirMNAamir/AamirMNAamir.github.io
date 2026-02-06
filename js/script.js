document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
function toggleDetails(button) {
  const details = button.nextElementSibling; // the .project-details div
  if (details.style.maxHeight) {
    details.style.maxHeight = null;  // collapse
    button.textContent = "Show Details";
  } else {
    details.style.maxHeight = details.scrollHeight + "px";  // expand
    button.textContent = "Hide Details";
  }
}
