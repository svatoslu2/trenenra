const heroBtn2 = document.querySelector('.hero-btn2');
const modalBackdrop = document.querySelector('.modalBackdrop'); 
const lightboxClose = document.querySelector('.lightbox-close'); 
heroBtn2.addEventListener('click', function() {
    modalBackdrop.style.display = 'flex';
});
lightboxClose.addEventListener('click', function() {
    modalBackdrop.style.display = 'none';
});