/*
 * Exercise #1
 * Define a const variable and then change it. Show the world that you can do the unthinkable.
 */

// YOUR ANSWER HERE

/*
 * Exercise #2
 * Initialized an array in as many ways you can think of
 * Hint: try to understand the difference between them, and which one is your "favourite"
 */

// YOUR CODE HERE

/*
 * Exercise #3
 * Write a Person class that has two properties: name, surname
 * The Person constructor accepts two arguments: name, surname
 * Define a toString() method on Person that returns the concatenation of name and surname
 * Hint: should this method be static?
 */

// YOUR CODE HERE

/*
 * Exercise #4
 * What would be a functional programming way of rewriting the Person class
 */

// YOUR CODE HERE

/*
 * Exercise #5
 * Write a proxified (using a javascript Proxy) version of Person
 * so that every time a new Person is created, then name and surname
 * are validated (let's say they must not contain numbers)
 * e.g. If I try to create a Person with a number in the name "Josh1"
 * a sanitized version of the input ("Josh") will be saved and a
 * log will read "The input values were sanitized"
 */

// YOUR CODE HERE

/*
 * Exercise #6
 * Write the function mergeArrays(arr) that takes an array of arrays|string|number in input, merges them into
 * a single array, and returns it
 * [[1, 2], ["ciao", "mamma"], [3, 4]] -> [1, 2, "ciao", "mamma", 3, 4]
 */
export function mergeArrays(arr) {
    // YOUR CODE HERE
    return;
}

/*
 * Exercise #7
 * Write the function vowelizer(string) that takes a string in input, adds a random vowel after
 * every character in the string, and returns the new vowelized phrase
 * "wow vowelizer really?" -> "waoawi ovaouwaeuliiozieari uraeoaililoyu?u"
 * Hint: try to use every tool in the ES6 tollbox
 */
export function vowelizer(string) {
    // YOUR CODE HERE
    return;
}

/*
 * Exercise #8
 * Write the function createNewPerson(object) that takes as input
 * an Object with the following shape
 * {
 *   name: "Micheal",
 *   surname: "Scott"
 * }
 * and returns the corresponding Person() instance
 * Hint: you can change the function signature to your liking
 */
function createNewPerson(object) {
    // YOUR CODE HERE
    return;
}

/*
 * Exercise #9
 * Write the function createPersonFromNameAndSurname(name, surname) that receives in input name and surname,
 * calls the createNewPerson function you created above and returns the Person object.
 */

function createPersonFromNameAndSurname() {
    // YOUR CODE HERE
    return;
}

/*
 * Exercise #10
 * Rewrite the process of creating a Person through createPersonFromNameAndSurname using Currying?
 */
