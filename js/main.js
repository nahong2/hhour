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

function openPopup(popup) {
    $(popup).show().attr("aria-hidden", "false");
    $("#closePopup").focus();
}

function closePopup(popup) {
    $(popup).hide().attr("aria-hidden", "true");
    $("#openMyPopup").focus();
}