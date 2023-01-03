export default function createBasicMainPage() {
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

  const img = document.createElement('img');
  img.src = '../images/italian_dinner.jpg';
  img.alt = 'Italian dinner being served';

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Il Gustoso Pomodoro';

  const p = document.createElement('p');
  p.innerHTML = 'Come eat at our newly-opened location! Our authentic Italian dining is the perfect spot for any first date!';

  const div = document.querySelector('div');
  div.appendChild(nav);
  div.appendChild(img);
  div.appendChild(h1);
  div.appendChild(p);
}
