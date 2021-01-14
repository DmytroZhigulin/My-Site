"use strict";

window.addEventListener('DOMContentLoaded', () => {
    console.log('done');

    // document.body.style.overflow = 'hidden';

    let nav = document.querySelectorAll('.aside__nav-item');
    let sections = document.querySelectorAll('section');

    //Функция принимает аргумент i, перебирает секции и присваевает им классы
    //для скрытия, потом для секции с индексом который передается в i присваевает класс для показа.
    function showDefaultWindow(i) {
        sections.forEach( item => {
            item.classList.add('hide');
            item.classList.remove('show', 'animated-show');
        });
        sections[i].classList.add('show', 'animated-show');
        sections[i].classList.remove('hide');
    }
    
    //Функция отслеживает клик по ссылкам меню и перевает индекс
    // элемента события i + 1 в функцию выше.
    function showPages() {
         nav.forEach( (item, index) => {
            
            item.addEventListener('click', (e) => {
                e.preventDefault();
                showDefaultWindow(index + 1);
            });
         });

         //Add animation on logo link.
         let logo = document.querySelector('.header__logo');
         logo.addEventListener('click', () => showDefaultWindow(0));
    }
    showPages();

    //Side menu function
    function test() {

        const menuButton = document.querySelector('.aside__menu-button');
        
        menuButton.addEventListener('click', (e) => {

            menuButton.classList.toggle('active');
            const asideWindow = document.querySelector('.aside');
            asideWindow.classList.toggle('open');
            const asideMenu = document.querySelector('.aside__nav');
            asideMenu.classList.toggle('active');
        });
    }
    test();
});





