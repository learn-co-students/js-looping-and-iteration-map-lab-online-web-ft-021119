function lowerCaseDrivers(drivers) {
    return drivers.map(function (driver) {
        return driver.toLowerCase()
    })
}

function nameToAttributes(drivers) {
    return drivers.map(function (driver) {
        let drFirstName = driver.split(' ')[0]
        let drLastName = driver.split(' ')[1]
        return { firstName: drFirstName, lastName: drLastName }
    })
}

function attributesToPhrase(drivers) {
    return drivers.map(function (driver) {
        return `${driver.name} is from ${driver.hometown}`
    })
}