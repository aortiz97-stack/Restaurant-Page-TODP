import createBasicMainPage from './main-page';
import createMenuPage from './menu-page';

const divContent = document.querySelector('div#content');
console.log('test');

createBasicMainPage();

const navUl = document.querySelector('nav ul');
console.log(navUl);
navUl.addEventListener('click', (e) => {
  console.log(e.target);
  const linkName = e.target.innerHTML;

  if (linkName === 'Menu') {
    divContent.innerHTML = '';
    createMenuPage();
  }
});
