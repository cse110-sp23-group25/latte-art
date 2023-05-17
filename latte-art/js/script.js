

const POSSIBLE_FORTUNES = ['Fortune 1', 'Fortune 2', 'Fortune 3', 'Fortune 4', 'Fortune 5', 'Fortune 6', 'Fortune 7', 'Fortune 8', 'Fortune 9', 'Fortune 10']; // TODO: add ten different fortunes

/**
 * generates a four-digit seed based on the the state of the latte art
 * Params:
 *  stats : int - the amount of 'milk' added to the coffee
 * Return:
 *  int - four-digit */
function seedGeneration(stats) { // TODO: once we know what the amount value looks like we will change this function
    const seed = Math.floor(Math.random() * stats);
    if(seed > 1000)
        return 1000;
    if (seed < 0)
        return 0;
    
    return seed;
}

/**
 * generates generates a fortune based on the given amount of milk using the seedGeneration() function
 * Params:
 *  stats : int - the amount of 'milk' added to the coffee
 * Return:
 *  fortune: string */
function fortuneSelector(stats) {
    const seed = seedGeneration(stats);
    const fortune = seed % 10; 
    return POSSIBLE_FORTUNES[fortune];
}