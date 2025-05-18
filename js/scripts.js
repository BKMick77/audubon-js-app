let pokemonRepository = (function () {
    let pokemon = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(p) {
        pokemon.push(p);
    }

    function getAll() {
        return pokemon;
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function showDetails(pokemon) {
        console.log(pokemon);
        pokemonRepository.loadDetails(pokemon).then(function () {
            let types = pokemon.types
                .map((typeSlot) => typeSlot.type.name)
                .join(', ');
            let content = `Height: ${pokemon.height}m 
                Weight: ${pokemon.weight}kg
                Type: ${types}`;
            let image = pokemon.imageUrl;

            modalModule.showModal(capitalize(pokemon.name), content, image);
        });
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = capitalize(pokemon.name);
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
                // item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.types = details.types;
                item.imageUrl =
                    details.sprites.other['official-artwork'].front_default;
                item.weight = details.weight;
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
        // showModal: showModal,
    };
})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach((pokemon) => {
        // let bigPokemon = pokemon.height >= 6 ? " - That's a big Pokemon!" : '';
        // );
        pokemonRepository.addListItem(pokemon);
    });
});
