var burger = document.querySelector('.header__burger');
var list = document.querySelector('.header__list');
var block01 = document.querySelectorAll('.footer__block');
var title01 = document.querySelectorAll('.footer__title');

burger.onclick = () => {
   burger.classList.toggle('active');
   list.classList.toggle('list_active');
   block01.forEach(item => {
      item.classList.remove('active');
   });
   title01.forEach(item => {
      item.classList.remove('active');
      item.classList.toggle('active2');
   });
};

// footer


title01.forEach(item => {
   item.addEventListener('click', (e)=> {
      item.classList.toggle('active');
      var parent = e.target.parentNode;
      parent.querySelector('.footer__block').classList.toggle('active');
   });
});

// smooth move

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
}