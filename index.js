// Code your solution in this file.
function lowerCaseDrivers(collection) {
  const result = collection.map(driver => driver.toLowerCase());
  return result
}

function nameToAttributes(collection) {
  const nameObj = collection.map(driver => Object.assign({}, {firstName: driver.split(' ')[0], lastName: driver.split(' ')[1]}));
  return nameObj
}

function attributesToPhrase(obj) {
  const phraseArray = obj.map(driver => `${driver['name']} is from ${driver['hometown']}`);
  return phraseArray
}
