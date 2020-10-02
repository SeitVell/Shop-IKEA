
//Day 1

const btnBurger = document.querySelector ('.btn-burger');
const catalog = document.querySelector ('.catalog');
const overlay = document.querySelector ('.overlay');
const btnClose = document.querySelector(' .btn-close');
const subCatalog = document.querySelector ('.subcatalog');
const subCatalogHeader =document.querySelector('.subcatalog-header')

const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
};

const closeMenu = () => {
    catalog.classList.remove('open');
    overlay.classList.remove('active');
};
 const openSubMenu = event => {
    event.preventDefault();
    const itemList = event.target.closest('.catalog-list__item');
    if (itemList) {
        subCatalogHeader.innerHTML = itemList.textContent;
        subCatalog.classList.add('subopen')
    }
 };

 const closeSubMenu = () => {

 }

btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalog.addEventListener ('click', openSubMenu);





//Сворачинавние на кнопку Escape
document.addEventListener ('keydown', (event) => {
    if (event.code === 'Escape'){
        closeMenu();
    };
});