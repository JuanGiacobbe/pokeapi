const url = 'https://pokeapi.co/api/v2/pokemon';


fetch(url)
.then(res => res.json())
.then(data => console.log(data.name))
.catch(err => console.log('error'))
