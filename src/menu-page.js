export default function createMenuPage() {
  const divContent = document.querySelector('div#content');

  const menuTitle = document.createElement('h1');
  menuTitle.innerHTML = 'Menu';

  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');

  const foodImageFileNames = ['lasagna.jpg', 'risotto.jpg', 'pizza.jpg',
    'arancini.jpg', 'ossobuco.jpg', 'ribollita.jpg'];
  const foodPrices = ['$20', '$12', '$25', '$15', '$20', '$12'];

  for (let i = 0; i < foodImageFileNames.length; i += 1) {
    const foodCard = document.createElement('div');
    foodCard.classList.add('food-card');

    const foodName = foodImageFileNames[i].split('.')[0];
    const foodCardName = document.createElement('h3');
    foodCardName.innerHTML = foodName;

    const foodImage = document.createElement('img');
    const foodImageContainer = document.createElement('div');
    foodImageContainer.classList.add('food-image-container');
    foodImage.src = `../src/images/${foodImageFileNames[i]}`;
    if (foodName === 'arancini') {
      foodImage.id = 'arancini';
      foodImageContainer.id = 'arancini-container';
    }
    foodImageContainer.appendChild(foodImage);

    const foodPrice = foodPrices[i];
    const foodCardPrice = document.createElement('p');
    foodCardPrice.innerHTML = foodPrice;

    foodCard.appendChild(foodImageContainer);
    foodCard.appendChild(foodCardName);
    foodCard.appendChild(foodCardPrice);

    gridContainer.appendChild(foodCard);

    divContent.append(menuTitle);
    divContent.append(gridContainer);
  }
}
