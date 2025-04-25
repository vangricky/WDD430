function add(a, b) {
    return a + b;
}

const result = add(2, 5) // when executed, answer will be 7
const otherResult = add("2", "5") // when executed, answer will be 25
console.log(result)

// This function doesn't have any specific type to check for. Whatever is in 'a' or 'b', JS will just execute the function when called, 
// even if 'a' or 'b' is a string or number.
