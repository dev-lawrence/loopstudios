//sticky header to top of the page
const stickyHeader = document.querySelector('.nav-section');
const logo = document.querySelector('.logo');
//add event listener
window.addEventListener('scroll', stickToTop);

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
