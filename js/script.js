var burger = document.querySelector('.header__burger');
var list = document.querySelector('.header__list');
var list2 = document.querySelectorAll('.footer__block');

function listShow(){
   burger.classList.toggle('active');
   list.classList.toggle('active');
   document.querySelector('body').classList.toggle('active');
   list2.forEach(item => {
      item.classList.remove('active');
   });
}

burger.onclick = listShow;

//  next

var title01 = document.querySelectorAll('.footer__title01');

title01.forEach(item => {
   item.addEventListener('click', (e)=> {
      var parent = e.target.parentNode;
      parent.querySelector('.footer__block').classList.toggle('active');
   });
});

// next


$(function(){
   $('a[href^="#"]').click(function(){
   var target = $(this).attr('href');
   $('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
   return false;
   });
   });