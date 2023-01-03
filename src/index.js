import createBasicMainPage from './main-page';
import createMenuPage from './menu-page';
import createContactPage from './contact-page';

const divContent = document.querySelector('div#content');

createBasicMainPage();

divContent.addEventListener('click', (e) => {
  const linkName = e.target.innerHTML;

  if (linkName === 'Menu') {
    divContent.innerHTML = '';
    createMenuPage();
  } else if (linkName === 'Home') {
    divContent.innerHTML = '';
    createBasicMainPage();
  } else if (linkName === 'Contact') {
    divContent.innerHTML = '';
    createContactPage();
  }
});
