let page = document.querySelector('.page');
let menuBtn = document.querySelector('.header-about__hamburger');
let menu = document.querySelector('.nav-popup');
let cross = document.querySelector('.popup-cross-image');
const langRu = document.querySelector('.header-about-lang__ru');
const langEn = document.querySelector('.header-about-lang__eng');
const langPopupRu = document.querySelector('.popup-lang-container__ru');
const langPopupEn = document.querySelector('.popup-lang-container__eng');

/* menuBtn.addEventListener('click', function(){
	menu.classList.add('nav-popup-inactive');
}) */


menuBtn.onclick = function() {
	menu.classList.toggle('nav-popup-inactive');
};

cross.onclick = function() {
	menu.classList.toggle('nav-popup-inactive');
};

function changeLanguage(changeLanguage) {
	let hash = changeLanguage.innerHTML;
    for (let key in langArr) {
        let elem = document.querySelector(key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}
langRu.addEventListener("click", ()=>changeLanguage(langRu));
langEn.addEventListener("click", ()=>changeLanguage(langEn));
langPopupRu.addEventListener("click", ()=>changeLanguage(langPopupRu));
langPopupEn.addEventListener("click", ()=>changeLanguage(langPopupEn));
/* langRu.addEventListener("click", changeLanguage(langRu)); */