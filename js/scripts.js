let pokemonRepository = (function () {
    let pokemon = [
        { name: 'Pidgey', height: 0.3, type: ['flying', 'normal'] },
        { name: 'Gyarados', height: 6.5, type: ['flying', 'water'] },
        { name: 'Gastly', height: 1.3, type: ['ghost', 'poison'] },
        { name: 'Scizor', height: 1.8, type: ['steel', 'bug'] },
    ];

    function add(p) {
        pokemon.push(p);
    }

    function getAll() {
        return pokemon;
    }

    return {
        getAll: getAll,
        add: add,
    };
})();

pokemonRepository.add({
    name: 'Bulbasaur',
    height: 0.7,
    type: ['grass', 'poison'],
});

pokemonRepository.getAll().forEach((pokemon) => {
    let bigPokemon = pokemon.height >= 6 ? " - That's a big Pokemon!" : '';
    document.write(
        `${pokemon.name} (Height: ${pokemon.height}m) ${bigPokemon} <br>`
    );
});
