// DOM SECTION
const btn = document.querySelector('.btn');
const input = document.querySelector('.id');
const result = document.querySelector('.result');
const txt = document.querySelector('.name');
const img = document.querySelector('.img');
const hei = document.querySelector('.height');

// FUNCTIONS

function renderPokemon(name, image, height){
    txt.innerHTML = name;
    img.setAttribute('src', image);
    hei.innerHTML = height;
}

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let id = input.value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
        let name = data.name;
        let image = data.sprites.front_default;
        let height = data.height;
        renderPokemon(name, image, height);
    })



    .catch(err => console.log('error'))



})


