var supersoup = {
    potato: 3,
    onion: 1,
    corn: 1
};

var stew = {
    tomato: 2,
    onion: 1,
    corn: 1,
    potato: 3
}

var ICA = {
    potato: 12,
    tomato: 7,
    cucumber: 3,
    corn: 5,
    onion: 2
};

function costOfRecipeSoup(supersoup, ICA) {
    return (ICA.potato * supersoup.potato +
            ICA.onion * supersoup.onion +
            ICA.corn * supersoup.corn);

}

function costOfRecipe(stew, ICA) {
    return (ICA.tomato * stew.tomato +
            ICA.onion * stew.onion +
            ICA.corn * stew.corn +
            ICA.potato * stew.potato);
}

console.log("Supersoup costs " + costOfRecipeSoup(supersoup, ICA));
console.log("My famous stew costs " + costOfRecipeStew(stew, ICA));