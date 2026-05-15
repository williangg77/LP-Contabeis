// ROLAGEM SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function(e) {

    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior:'smooth'
    });

  });

});

// ANIMAÇÃO AO ROLAR
const elements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }

  });

}, {
  threshold:0.15
});

elements.forEach(el => observer.observe(el));
