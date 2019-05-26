// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function(name) {return name.toLowerCase()});
}

function nameToAttributes(array) {

  return array.map(function(person) {
    const index = person.indexOf(" ");
    return {"firstName": person.slice(0, index), "lastName": person.slice(index + 1)};
    }
  )
}

function attributesToPhrase(array) {
  return array.map(function(person) {
    return `${person.name} is from ${person.hometown}`
  })
}
