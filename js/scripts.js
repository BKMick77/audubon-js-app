pokemon = [
    { name: 'Pidgey', height: 0.3, type: ['flying', 'normal'] },
    { name: 'Gyarados', height: 6.5, type: ['flying', 'water'] },
    { name: 'Gastly', height: 1.3, type: ['ghost', 'poison'] },
    { name: 'Scizor', height: 1.8, type: ['steel', 'bug'] },
];

for (let i = 0; i < pokemon.length; i++) {
    //    added <br> to separate pokemon
    document.write(
        pokemon[i].name + ' (Height: ' + pokemon[i].height + 'm)<br>'
    );
    if (pokemon[i].height >= 6) {
        document.write("That's a big Pokemon!<br>");
    }
}
