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
