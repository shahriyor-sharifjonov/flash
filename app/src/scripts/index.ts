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

// popup
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
setTimeout(() => {
  popup.classList.add('active')
  document.body.style.overflowY = "hidden";
}, 5000);
popupClose.addEventListener('click', function(e){
  popup.classList.remove('active');
  document.body.style.overflowY = "auto";
})


$(document).ready(function() {
  $(".faq__item > .faq__item-btn").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".faq__item-content")
        .slideUp(200);
      $(".faq__item > .faq__item-btn svg")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".faq__item > .faq__item-btn svg")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".faq__item > .faq__item-btn").removeClass("active");
      $(this).addClass("active");
      $(".faq__item-content").slideUp(200);
      $(this)
        .siblings(".faq__item-content")
        .slideDown(200);
    }
  });
});
