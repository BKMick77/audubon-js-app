let pokemonRepository = (function () {
    let pokemon = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(p) {
        pokemon.push(p);
    }

    function getAll() {
        return pokemon;
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
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
            showDetails(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                json.results.forEach(function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url,
                    };
                    add(pokemon);
                });
            })
            .catch(function (e) {
                console.error(e);
            });
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (details) {
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.types = details.types;
            })
            .catch(function (e) {
                console.error(e);
            });
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
    };
})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach((pokemon) => {
        // let bigPokemon = pokemon.height >= 6 ? " - That's a big Pokemon!" : '';
        // );
        pokemonRepository.addListItem(pokemon);
    });
});
