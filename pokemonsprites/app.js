
const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const container = document.querySelector('#container');

for (let i = 0; i < 500; i++) {
    const pokemon = document.createElement('div');
    const newImage = document.createElement('img');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    newImage.src = url + [i] + '.png';
    pokemon.appendChild(newImage);
    pokemon.appendChild(label);
    pokemon.classList.add('pokemon');
    container.appendChild(pokemon);
}