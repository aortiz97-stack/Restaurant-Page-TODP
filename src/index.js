import createBasicMainPage from './main-page';
import createMenuPage from './menu-page';

const divContent = document.querySelector('div#content');

createBasicMainPage();

const navUl = document.querySelector('nav ul');
navUl.addEventListener('click', (e) => {
  const a = e.target.innerHTML;
  const linkName = a.innerHTML;

  if (linkName === 'Menu') {
    divContent.innerHTML = '';
    createMenuPage();
  }
});
