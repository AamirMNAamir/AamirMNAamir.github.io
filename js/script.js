function toggleDetails(button) {
  const details = button.nextElementSibling;

  if (details.style.maxHeight) {
    details.style.maxHeight = null;
    button.textContent = "Show Details";
  } else {
    details.style.maxHeight = details.scrollHeight + "px";
    button.textContent = "Hide Details";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.querySelector('#skills');
  const skillFills = document.querySelectorAll('.fill');

  if (!skillsSection || skillFills.length === 0) {
    console.error("Skills section or bars not found");
    return;
  }

  const skillObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      skillFills.forEach(bar => {
        bar.style.width = bar.dataset.percent;
      });
      skillObserver.disconnect();
    }
  }, { threshold: 0.3 });

  skillObserver.observe(skillsSection);
});
