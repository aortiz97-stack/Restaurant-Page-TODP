const img = document.createElement('img');
img.src = '../images/italian_dinner.jpg';
img.alt = 'Italian dinner being served';

const h1 = document.createElement('h1');
h1.innerHTML = 'Il Gustoso Pomodoro';

const p = document.createElement('p');
p.innerHTML = 'Come eat at our newly-opened location! Our authentic Italian dining is the perfect spot for any first date!';

const div = document.querySelector('div');
div.appendChild(img);
div.appendChild(h1);
div.appendChild(p);
