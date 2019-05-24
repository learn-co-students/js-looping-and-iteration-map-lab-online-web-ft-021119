function lowerCaseDrivers(drivers){
  const newDrivers = drivers.map(driver => driver.toLowerCase());
  return newDrivers
}


function nameToAttributes(drivers){
  const newDrivers = drivers.map(driver => Object.assign({},{firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]
}))
  return newDrivers
}

function attributesToPhrase(drivers){
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}
