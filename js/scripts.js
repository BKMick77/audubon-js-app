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
                .map((PType) => PType.type.name)
                .join(', ');
            let content = `Height: ${pokemon.height}m 
                Weight: ${pokemon.weight}kg
                Type: ${types}`;
            let image = pokemon.imageUrl;

            document.querySelector('#exampleModalLabel').innerText = capitalize(
                pokemon.name
            );

            let modalBody = document.querySelector('.modal-body');
            modalBody.innerHTML = `<p>${content}</p>
      <img src="${image}" alt="${pokemon.name}" class="img-fluid" />`;
        });
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('#pokemon-list');

        let col = document.createElement('div');
        col.classList.add('col-6', 'col-md-4', 'col-lg-3', 'mb-3');
        let button = document.createElement('button');
        button.innerText = capitalize(pokemon.name);
        button.classList.add('btn', 'btn-primary');

        button.setAttribute('type', 'button');
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#exampleModal');

        button.addEventListener('click', () => {
            showDetails(pokemon);
        });

        col.appendChild(button);
        pokemonList.appendChild(col);
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
        pokemonRepository.addListItem(pokemon);
    });
});
