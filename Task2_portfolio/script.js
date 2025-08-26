// Smooth scrolling for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple form alert
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for reaching out! I'll reply soon.");
});
