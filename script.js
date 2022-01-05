const nav = document.querySelector('.nav');
const menuBar = document.querySelector('.menu-bar');
const menu = document.querySelector('.menu');
const menuLinks = menu.querySelectorAll('a');

//FUNCTIONS

// show bg color on scroll
const showBgOnScroll = () => {
  const scroll = window.scrollY;

  // logic
  if (scroll > 200) {
    nav.classList.add('showBg');
  }

  // if it is less than 200
  else {
    nav.classList.remove('showBg');
  }
};

//show nav menu on click
const showMenu = () => {
  menu.classList.toggle('showMenu');
  let closeIcon = menuBar.querySelector('i');
  closeIcon.classList.toggle('showMenu');
};

//add active class to menu links
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    let removeActiveClass = menu.querySelector('.active');
    removeActiveClass.classList.remove('active');
    link.classList.add('active');

    showMenu();
  });
});

// EVENT LISTENERS
window.addEventListener('scroll', showBgOnScroll);
menuBar.addEventListener('click', showMenu);
