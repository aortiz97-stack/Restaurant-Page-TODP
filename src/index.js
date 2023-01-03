import createBasicMainPage from './main-page';
import createMenuPage from './menu-page';

const divContent = document.querySelector('div#content');
console.log('test');

createBasicMainPage();

divContent.addEventListener('click', (e) => {
  console.log(e.target);
  const linkName = e.target.innerHTML;

  if (linkName === 'Menu') {
    divContent.innerHTML = '';
    createMenuPage();
  } else if (linkName === 'Home') {
    divContent.innerHTML = '';
    createBasicMainPage();
  }
});
