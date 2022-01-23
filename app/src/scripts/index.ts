// Header Menu
const headerButton: HTMLButtonElement = document.querySelector(".header__button");
const headerMenu: HTMLUListElement = document.querySelector(".header__menu");
const main = document.querySelector('.main');
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
  main.classList.toggle("open");
};

headerButton.onclick = menuToggle;

window.onclick = (e: MouseEvent) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

window.addEventListener('scroll', function(){
    let item = document.querySelectorAll('.fixed');
    item.forEach(element => {
      element.classList.toggle('sticky', window.scrollY > 0);
    });
})