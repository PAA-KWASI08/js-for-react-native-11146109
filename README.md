# js-for-react-native-11146109
js-for-react-native-11146019 project

ID:11146019

//TASK 1: The processArray function takes an array of numbers as an argument. It uses the map method to iterate over each number in the array. If the number is even, it squares the number. If the number is odd, it triples the number. The function returns a new array with the modified numbers.

The code also includes a prompt where the user can enter an array of numbers (comma-separated). It then converts the input into an array of numbers using the split method and map function. Finally, it logs the result of calling the processArray function with the user's input.

//TASK 2:The formatArrayStrings function takes two arrays as arguments: strings (an array of strings) and numbers (an array of numbers processed by the processArray function).

Inside the function, it uses the map method to iterate over each string in the strings array. For each string, it checks the corresponding number in the numbers array. If the number is even, it capitalizes the entire string using the toUpperCase method. If the number is odd, it converts the string to lowercase using the toLowerCase method. The function returns a new array with the modified strings.

The code also includes prompts where the user can enter an array of strings and an array of numbers (comma-separated). It then converts the input into arrays using the split method and map function. It calls the processArray function to process the numbers and stores the result in the processedNumbers variable. Finally, it calls the formatArrayStrings function with the strings and processed numbers, and logs the formatted strings to the console.

//TASK3:The createUserProfiles function takes two arrays as arguments: names (an array of original names) and modifiedNames (an array of modified names from Task 2).

Inside the function, it initializes a variable id to 1. Then, it uses the map method to iterate over each name in the names array. For each name, it creates an object with three properties: originalName (set to the current name), modifiedName (set to the corresponding modified name from modifiedNames array), and id (auto-incremented starting from 1 using the id++ expression). The function returns an array of these objects.

The code also includes a test where it creates an array of names and an array of modified names. It then calls the createUserProfiles function with these arrays and stores the result in the userProfiles variable. Finally, it logs the userProfiles array to the console.
