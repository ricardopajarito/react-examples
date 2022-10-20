const fetchPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    return res.json();
}

const fetchPokemon = async (url) => {
    const res = await fetch(url)
    return res.json();
}

module.exports = {
    fetchPokemons,
    fetchPokemon
}