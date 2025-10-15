// scripts.js - utilidades compartidas
document.addEventListener('DOMContentLoaded', function () {
  // Efecto navbar scroll (si usas navbar con id mainNavbar)
  const nav = document.querySelector('.navbar');
  function onScroll(){ if(window.scrollY>20) nav.classList.add('scrolled'); else nav.classList.remove('scrolled'); }
  window.addEventListener('scroll', onScroll);
});
