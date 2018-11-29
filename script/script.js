var menu = document.getElementById('navMenu');
var sliderControlNext = document.getElementById('sliderControlNext');

/** hide mobile nav menu  when click on document */
document.onclick = function () {
    if(menu.classList.contains('mobileNavMenu')) {
        menu.classList.remove('mobileNavMenu');
        sliderControlNext.classList.remove('hideSliderControl');
    }
}

/** stop propagation of event */
function stopPropagation(e) {
    e.stopPropagation();
}

/** Toggle mobile nav menu */
function  toggleMobileMenu(e) {
    e.stopPropagation();
    menu.classList.toggle('mobileNavMenu');
    sliderControlNext.classList.toggle('hideSliderControl');
}