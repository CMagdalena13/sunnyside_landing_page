const burger = document.querySelector('.navbar-toggle');
const aside = document.querySelector('aside');
const headerText = document.querySelector('.header-text');
const headerArrow = document.querySelector('.header-arrow')

burger.addEventListener("click", function(){
    aside.classList.toggle('show');
    headerText.classList.toggle('none');
    headerArrow.classList.toggle('none');
})