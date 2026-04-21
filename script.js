// Smooth scroll for anchor links (like "Learn More")
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// Simple alert when clicking "Get Started"
document.querySelectorAll('a[href="signup.html"]').forEach(btn => {
  btn.addEventListener('click', function () {
    alert("Redirecting to Sign Up page...");
  });
});


// Navbar shadow on scroll
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 10) {
    nav.classList.add('shadow-soft');
  } else {
    nav.classList.remove('shadow-soft');
  }
});


// Example: Mood tracker demo (future feature)
function saveMood(mood) {
  localStorage.setItem('userMood', mood);
  alert("Mood saved: " + mood);
}


// Example: Load saved mood
function loadMood() {
  const mood = localStorage.getItem('userMood');
  if (mood) {
    console.log("Last saved mood:", mood);
  }
}

// Run on page load
loadMood();
