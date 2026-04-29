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

  // Form Submission Handler
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = document.getElementById('submit-btn');
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      formStatus.textContent = '';
      formStatus.className = 'form-status';

      try {
        const response = await fetch(contactForm.action, {
          method: contactForm.method,
          body: new FormData(contactForm),
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          formStatus.textContent = 'Message sent successfully!';
          formStatus.classList.add('success');
          contactForm.reset();
        } else {
          formStatus.textContent = 'Oops! There was a problem sending your message.';
          formStatus.classList.add('error');
        }
      } catch (error) {
        formStatus.textContent = 'Oops! There was a problem sending your message.';
        formStatus.classList.add('error');
      } finally {
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
      }
    });
  }
});
