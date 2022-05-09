const displayAbout = () => {
  let arrow = document.getElementById('animation');
  arrow.classList.toggle('rotate');
  arrow.classList.toggle('icone');

  let display = document.getElementById('projects-id');
  display.classList.toggle('active');
}