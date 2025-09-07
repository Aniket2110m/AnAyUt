// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Auto-update footer year
document.getElementById("yr").textContent = new Date().getFullYear();

// Contact form AJAX submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const msg = document.getElementById('msg').value;
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, msg })
      });
      if (res.ok) {
        alert('Thanks! We\'ll reach out shortly.');
        contactForm.reset();
      } else {
        alert('Sorry, there was a problem. Please try again later.');
      }
    } catch (err) {
      alert('Network error. Please try again later.');
    }
  });
}
// Animated price comparison bar chart
// Animated arrow price drop chart
window.addEventListener('DOMContentLoaded', () => {
  const arrowLine = document.getElementById('arrowLine');
  const savingsLabel = document.getElementById('savingsLabel');
  if (arrowLine && savingsLabel) {
    let x2 = 120;
    const x2Target = 300;
    function animateArrow() {
      if (x2 < x2Target) {
        x2 += 8;
        arrowLine.setAttribute('x2', x2);
        requestAnimationFrame(animateArrow);
      } else {
        savingsLabel.setAttribute('opacity', '1');
      }
    }
    animateArrow();
  }
});