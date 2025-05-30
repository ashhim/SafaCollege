// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Highlight active section link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + window.innerHeight / 3;

  let currentSectionId = '';

  sections.forEach(section => {
    if (scrollPosition >= section.offsetTop) {
      currentSectionId = section.id;
    }
  });

  document.querySelectorAll('nav a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href').substring(1) === currentSectionId);
  });
});

// Optional: Log when Dialogflow script is loaded
window.addEventListener('load', () => {
  if (window.dfMessenger) {
    console.log('Dialogflow Messenger chatbot loaded');
  }
});
