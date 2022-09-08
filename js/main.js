console.log("WE WANNA HAVE HHOUR!")

const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
    })
}


document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('loaded');
            }, 800);
            setTimeout(() => {
                preloader.remove();
            }, 2000);
        });
    }
});