function processArray(numbers) {
    return numbers.map((number) => {
      if (number % 2 === 0) {
        return number * number; // Square even numbers
      } else {
        return number * 3; // Triple odd numbers
      }
    });
  }
  
  // Test
  const numbers = prompt("Enter an array of numbers (comma-separated): ").split(",").map(Number);
  console.log(processArray(numbers));
  