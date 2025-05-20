document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((accordion) => {
    const panel = accordion.nextElementSibling;

    accordion.addEventListener('click', () => {
      accordion.classList.toggle('active');
      panel.classList.toggle('open');
    });
  });
});



