/** Returns a randomly selected item from an array of items */

function choice(items) {
    const length = items.length;
    const randomFloat = Math.random();
    const randomIndex = Math.floor( length * randomFloat );
    return items[randomIndex];
}

export default choice;