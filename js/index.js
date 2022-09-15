const menuBtn = document.querySelector('.header-about__hamburger');
const menu = document.querySelector('.nav-popup');
const cross = document.querySelector('.popup-cross-image');
const langRu = document.querySelectorAll('.lang-ru');
const langEn = document.querySelectorAll('.lang-eng');

/*функция для переключения цвета языка при его выборе, которую вызываем в changeLanguage*/

function changeColorLanguage(changeLanguage, secondLanguage) {
    changeLanguage.forEach(element => element.classList.toggle('selected'));
    secondLanguage.forEach(element => element.classList.toggle('selected'));
};

/*функция для переключения языка c данными из массива langArr*/

function changeLanguage(changeLanguage, secondLanguage, changeColorLanguage) {
	let key2 = changeLanguage[0].innerHTML;
    for (let key in langArr) {
        let elem = document.querySelector(key);
        if (elem) {
            elem.innerHTML = langArr[key][key2];
        }
    }
    changeColorLanguage(changeLanguage, secondLanguage);
}; 

/* добавляем обработчики клика на RU и ENG, для обоих на странице */

langRu.forEach((item) => {
    item.addEventListener("click", ()=>changeLanguage(langRu, langEn, changeColorLanguage));
});

langEn.forEach((item) => {
    item.addEventListener("click", ()=>changeLanguage(langEn, langRu, changeColorLanguage));
});

/* добавляем обработчики клика для открытия и закрытия popup'а */

menuBtn.addEventListener("click", function() {
	menu.classList.toggle('nav-popup-inactive');
});

cross.addEventListener("click", function() {
	menu.classList.toggle('nav-popup-inactive');
});





/* функция для переключения цвета ссылки при её выборе в навигации

const navLinks = document.querySelectorAll('.nav-link-js');

function changeColorLinks(target) {
    navLinks.forEach(element => element.classList.remove('selected'));
    target.classList.toggle('selected');
};

navLinks.forEach((item) => {
    item.addEventListener("click", () => changeColorLinks(EventTarget));
});   

Не могу понять, как передать корретно выбранную сслыку при клике в саму 
функцию переключения, пробовал EventTarget - не сработало.
*/  