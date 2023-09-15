var productContainers = [...document.querySelectorAll('.container22')];
var nxtBtn = [...document.querySelectorAll('.left')];
var preBtn = [...document.querySelectorAll('.right')];
var item20 = document.querySelectorAll('.parts__box')[0];

productContainers.forEach((item, i) => {
   let containerWidth = item20.clientWidth;


    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});