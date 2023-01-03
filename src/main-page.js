export default function createBasicMainPage() {
  const divContent = document.querySelector('div#content');
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('home-background-container');
  const img = document.createElement('img');
  img.src = '../src/images/italian_dinner.jpg';
  img.alt = 'Italian dinner being served';
  img.classList.add('home-background');
  imgContainer.appendChild(img);

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Il Gustoso Pomodoro';

  const p = document.createElement('p');
  p.innerHTML = 'Come eat at our newly-opened location! Our authentic Italian dining is the perfect spot for any first date!';

  divContent.appendChild(h1);
  divContent.appendChild(imgContainer);
  divContent.appendChild(p);
}
