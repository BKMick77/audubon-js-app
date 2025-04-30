pokemon = [
    { name: 'Pidgey', height: 0.3, type: ['flying', 'normal'] },
    { name: 'Gyarados', height: 6.5, type: ['flying', 'water'] },
    { name: 'Gastly', height: 1.3, type: ['ghost', 'poison'] },
    { name: 'Scizor', height: 1.8, type: ['steel', 'bug'] },
];

// for (let i = 0; i < pokemon.length; i++) {
//     let bigPokemon = pokemon[i].height >= 6 ? " - That's a big Pokemon!" : '';
//     document.write(
//         `${pokemon[i].name} (Height: ${pokemon[i].height}m) ${bigPokemon} <br>`
//     );
// }

pokemon.forEach((pokemon) => {
    let bigPokemon = pokemon.height >= 6 ? " - That's a big Pokemon!" : '';
    document.write(
        `${pokemon.name} (Height: ${pokemon.height}m) ${bigPokemon} <br>`
    );
});
