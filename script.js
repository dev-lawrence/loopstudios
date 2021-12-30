const stickyHeader = document.querySelector('.nav-section');
const navBar = document.querySelector('.toggle');
const navMenu = document.querySelector('.mobile-nav');
const body = document.querySelector('body');
//add event listener
window.addEventListener('scroll', stickToTop);
navBar.addEventListener('click', showMenu);

//functions
//show nav menu
function showMenu() {
  navBar.classList.toggle('active');
  navMenu.classList.toggle('show');
  body.classList.toggle('bodyMenu');
}

//sticky header to top of the page
function stickToTop() {
  const stickOnScroll = window.scrollY;

  //if the header is above the page
  if (stickOnScroll > 0) {
    stickyHeader.classList.add('fixed');
  }

  //if header is below the page
  else {
    stickyHeader.classList.remove('fixed');
  }

  //show scroll on transition
  if (stickOnScroll > 400) {
    stickyHeader.classList.add('inView');
  } else {
    stickyHeader.classList.remove('inView');
  }
}
