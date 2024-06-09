function transformString(input) {
    const length = input.length;
    // Check if the length is divisible by 3
    if (length % 3 === 0) {
        input = input.split('').reverse().join('');
    }
    // Check if the length is divisible by 5
    if (length % 5 === 0) {
        input = input.split('').map(char => char.charCodeAt(0)).join('');
    }
    return input;
}
// Example usage:
const givenString = "Hamburger";
console.log(transformString(givenString));