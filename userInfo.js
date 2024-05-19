
function createUserProfiles(names, modifiedNames) {
  let id = 1;
  return names.map((name, index) => {
    return {
      originalName: name,
      modifiedName: modifiedNames[index],
      id: id++
    };
  });
}

// Test
const names = ["John", "Jane", "Michael"];
const modifiedNames = ["JOHN", "jane", "MICHAEL"];

const userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);


