
function processArray(numbers) {
  return numbers.map((number) => {
    if (number % 2 === 0) {
      return number * number; // Square even numbers
    } else {
      return number * 3; // Triple odd numbers
    }
  });
}

function formatArrayStrings(strings, numbers) {
  return strings.map((string, index) => {
    if (numbers[index] % 2 === 0) {
      return string.toUpperCase(); // Capitalize if number is even
    } else {
      return string.toLowerCase(); // Convert to lowercase if number is odd
    }
  });
}

// Test
const strings = prompt("Enter an array of strings (comma-separated): ").split(",");
const numbers = prompt("Enter an array of numbers (comma-separated): ").split(",").map(Number);

const processedNumbers = processArray(numbers);
const formattedStrings = formatArrayStrings(strings, processedNumbers);

console.log(formattedStrings);


