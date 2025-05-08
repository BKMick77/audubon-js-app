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

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        button.addEventListener('click', () => {
            showDetails(pokemon.name);
        });
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
    };
})();

pokemonRepository.add({
    name: 'Bulbasaur',
    height: 0.7,
    type: ['grass', 'poison'],
});

pokemonRepository.getAll().forEach((pokemon) => {
    // let bigPokemon = pokemon.height >= 6 ? " - That's a big Pokemon!" : '';
    // );
    pokemonRepository.addListItem(pokemon);
});
