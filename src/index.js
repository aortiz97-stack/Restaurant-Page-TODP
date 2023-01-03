import createBasicMainPage from './main-page';
import createMenuPage from './menu-page';
import createContactPage from './contact-page';

const divContent = document.querySelector('div#content');
const body = document.querySelector('body');
const bottomContainer = document.querySelector('div#bottom-container');

const nav = document.createElement('nav');
const ul = document.createElement('ul');
const tabNames = ['Home', 'Menu', 'Contact'];
for (let i = 0; i < tabNames.length; i += 1) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = '#';
  a.innerHTML = tabNames[i];
  li.appendChild(a);
  ul.appendChild(li);
}
nav.appendChild(ul);
body.insertBefore(nav, bottomContainer);

const divPanel1 = document.createElement('div');
divPanel1.classList.add('panel');
const divPanel2 = document.createElement('div');
divPanel2.classList.add('panel');

bottomContainer.insertBefore(divPanel1, divContent);
divContent.after(divPanel2);

createBasicMainPage();

const ulDOM = document.querySelector('ul');
ulDOM.addEventListener('click', (e) => {
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
