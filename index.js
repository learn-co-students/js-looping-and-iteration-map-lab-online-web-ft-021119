// Code your solution in this file.
function lowerCaseDrivers(collection) {
   const newCollection = collection.map(name => name.toLowerCase())
   
   return newCollection
}

function nameToAttributes(collection) {
   const newCollection = collection.map(name => Object.assign({}, {firstName: name.split(" ")[0], lastName: name.split(" ")[1]}))

   return newCollection
}

function attributesToPhrase(collection) {
   const newCollection = collection.map(driver => `${driver.name} is from ${driver.hometown}`)
   
   return newCollection
}